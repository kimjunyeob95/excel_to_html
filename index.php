<?php
    include('./config/var.php');
    include('./input/bixby/index.php');
    include('./input/catalog/index.php');
    include('./input/svm/index.php');

    $rows = 300;
    //echo('<pre>');print_r($_SERVER['DOCUMENT_ROOT']."/onboarding");echo('</pre>');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/common.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.7/handlebars.min.js"></script>
    <title>Document</title>
</head>
<body>
    <div class="wrap">
       <ul class="select-wrap">
            <li>
                <select id="select-type" class="select">
                    <?
                        foreach($type_array as $val){
                    ?>
                        <option value=<?=$val?>><?=$val?></option>
                    <?}?>
                </select>
                <select id="select-nation" class="select">
                    <?
                        foreach($type_nation as $key => $val){
                    ?>
                        <option nation="<?=$key?>" value=<?=$val?>><?=$key?></option>
                    <?}?>
                </select>
            </li>
            <li>
                <p class="only-text">
                </p>
            </li>
            <li>
                <button class="btn" id="btn-submit">생성</button>
            </li>
       </ul>
       <div class="w-inner">
         <div class="area-wrap">
            <div class="scroll">
                <?
                    for($i=0;$i<$rows;$i++){
                ?>
               <div class="area box">
                  <p class="number area"><?=$i+1?></p>
                  <textarea class="lang_area" cols="30" rows="10"></textarea>
               </div>
               <?}?>
            </div>
         </div>
       </div>
    </div>
    <script>
        $(document).ready(function(){
            let type = $('#select-type').val();
            let lang_code = $('#select-nation').val();
            let nation = $('#select-nation option:selected').attr('nation');
            $('.only-text').text(`${type + ' || ' + nation+' || '+lang_code}`);
        })

        $('select').change(function(){
            $('.lang_area').val('');
            let type = $('#select-type').val();
            let lang_code = $('#select-nation').val();
            let nation = $('#select-nation option:selected').attr('nation');
            $('.only-text').text(`${type + ' || ' + nation+' || '+lang_code}`);

        });

        $('.lang_area').bind('paste', null, function (e) { 
            $('.lang_area').val('');
            let $this = $(this); 
            setTimeout(function () { 
                var values = $this.val().split('\n').filter(val=>val !== ""); 
                for(let i=0;i<values.length;i++){
                    $('.lang_area').eq(i).val(values[i]);
                }
            }, 0); 
        });


        function fn_return_html(type,lang,nation){
            const regx = new RegExp("_script", "gi");
            var source = $(`#template-${type}`).html();
            var template = Handlebars.compile(source);
            let _array = [];
            var data  = {
                nation_name : nation,
                lang_code : lang,
            };

            for(let i=0;i<$('.lang_area').length;i++){
                if($('.lang_area').eq(i).val()){
                    let object = {};
                    object["lang"+(i+1)] = $('.lang_area').eq(i).val();
                    data = Object.assign(data,object);
                }
            }
            return template(data).replace(regx,"script");
        }

        $('#btn-submit').click(function(){
            let type = $('#select-type').val();
            let lang_code = $('#select-nation').val();
            let nation = $('#select-nation option:selected').attr('nation');
            let html = fn_return_html(type,lang_code,nation);
           
            $.ajax({
                url: './proc/createFile.php',
                type: 'post',
                data: {
                    "type" : type,
                    "nation_name" : nation,
                    "html" : html,
                },
                dataType: 'json',
                success: function(response) {
                    if(response.res !== true){
                        alert('오류입니다.');
                    }
                }
            });

        });
    </script>
</body>
</html>