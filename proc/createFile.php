<?php

ini_set("display_errors", 1);

$type = $_REQUEST['type'];
$html = $_REQUEST['html'];
$nation = $_REQUEST['nation_name'];
$path = "../output/".$nation."/".$type;
// $type = 'bixby';
// $html = '안녕하세요';
// $nation = 'korea';

if(empty($type) || empty($html) || empty($nation)) {
    echo'잘못된 접근입니다.';
    exit;
}


// 파일복사 재귀함수
function recursive_copy($src,$dst) { 
    $dir = opendir($src);  
    if (!is_dir($dst)) {
        mkdir($dst, 0777, true);
    }
    while(false !== ( $file = readdir($dir)) ) {  
        if (( $file != '.' ) && ( $file != '..' )) {  
            if ( is_dir($src . '/' . $file) ) {  
               recursive_copy($src . '/' . $file,$dst . '/' . $file); 
            }  
            else {  
                copy($src . '/' . $file,$dst . '/' . $file);  
            }  
        }  
    }  
    closedir($dir);  
}  

// 타입별 디렉토리 복사 참조
function get_dir_list($dirname){
    $result_array = array();
    $handle = opendir($dirname);
    while ($file = readdir($handle)) {
        if($file == '.'||$file == '..') continue;
        if (is_dir($dirname.$file)) $result_array[$file] = $file;
    }
    closedir($handle);
    sort($result_array);
    // echo('<pre>');print_r($result_array);echo('</pre>');exit;
    return $result_array;
}

foreach (get_dir_list("../input/".$type."/") as $key => $value) {
    recursive_copy("../input/".$type."/".$value."/", $path."/".$value);
}



if (!is_dir($path)) {
    mkdir($path, 0777, true);
}

$file = fopen($path."/index.html", "w") or die('there is problem');
fwrite($file, $html);
fclose($file);

echo json_encode(array('res'=>true));
exit;

?>