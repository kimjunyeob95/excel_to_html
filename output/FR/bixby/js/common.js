
(function($) {
	$.each(['show', 'hide'], function(i, ev) {
		var el = $.fn[ev];
		$.fn[ev] = function() {
			this.trigger(ev);
			return el.apply(this, arguments);
		};
	});
})(jQuery);

function chk_is_mobile() {
	if( navigator.userAgent.match(/Android/i)
		 || navigator.userAgent.match(/webOS/i)
		 || navigator.userAgent.match(/iPhone/i)
		 || navigator.userAgent.match(/iPad/i)
		 || navigator.userAgent.match(/iPod/i)
		 || navigator.userAgent.match(/BlackBerry/i)
		 || navigator.userAgent.match(/Windows Phone/i) ){
			return true;
		 }
	return false;
}

function chk_is_iphone() {
	return navigator.userAgent.match(/iPhone/i);
}

$(document).ready(function(){
	intro();
	galaxy_prod();
	scrollbar();

	setTimeout(function(){
		bixbyAnswer();
	},5000);

	$('.btn.s10, .btn.fold, .btn.note10').click(function(){
		//bixbyAnswer();
	});

	$('.b_prev').click(function(){
		  $('.detail-view').scrollTop(0);
		  $('.detail-view').removeClass('fixer').removeClass('min').addClass('no-fixer');
	});

	if( navigator.userAgent.includes('iPhone') ) {
		$('body').addClass('dvc-iphone');
	}

});

//빅스비 초기화
function bixbyInit() {
	$('.chat, .toBixby, .bixbyAnswer').removeClass('on').removeAttr('style');
	$('.typing-wp').removeClass('end');
	$('.typing').text('');
	$('.typing_group').next('.b_next').removeClass('on');
	$('.ans_tit_wp').removeAttr('style');
	$('.b_more, .ans_area + .ans_area, .ans_area').removeAttr('style');
	$('.link_wp, .chat.c1 .txt, .placeholder').removeAttr('style');
	$('.chat .ans_area').removeClass('top');
}

var sp1 = 600;
var sp2 = 750;

function scrollbar(){
	if($('.intro .mCustomScrollbar').length>0){
	}
	if($('.mCustomScrollbar_y').length>0){
		$(".mCustomScrollbar_y").mCustomScrollbar(
			{ axis: "y" }
		);
	}
}

// detail swiper
// #s20
var swiper = null;
var swipe_c = false;
// #zfilp
var swiper2= null;
var swipe_c2 = false;
// #note20
var swiper3 = null;
var swipe_c3 = false;
// #fold2
var swiper4= null;
var swipe_c4 = false;
// #s21
var swiper5 = null;
var swipe_c5 = false;
// #s20fe
var swiper6 = null;
var swipe_c6 = false;

function detailSwiper(idx){

	var id = '';
	if(idx == '#note20') {

		id = 'note20-swiper';

		if(swipe_c3==false){
			swiper3 = new Swiper('.' + id, {
				grabCursor: true,
				centeredSlides: true,
				slidesPerView: 'auto',
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows : true,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				navigation: {
					prevEl: '.swiper-button-prev',
				},
				on : {
					slideChange : function(){

						qqFixed=false;
						$('.detail-body').css('position','relative').css('top','0px');
						$('.detail-body').css('height','').css('max-height','').css('overflow-y','');

						player7.pauseVideo();
						player8.pauseVideo();
						player9.pauseVideo();
						player10.pauseVideo();
						player11.pauseVideo();
						player12.pauseVideo();
						player13.pauseVideo();
						player14.pauseVideo();
						player15.pauseVideo();
						player16.pauseVideo();
						player17.pauseVideo();
						player18.pauseVideo();
						player19.pauseVideo();
						player20.pauseVideo();

						var eq = swiper3.realIndex;

						setTimeout(function(){
							$('.detail-view').not( $(this) ).scrollTop(0);
							$('.detail-view').not( $(this) ).removeClass('fixer').removeClass('min').addClass('no-fixer');
						}, 200);

						if($('#note20 .swiper-pagination-bullet').last().hasClass('swiper-pagination-bullet-active')) {
							$('.galaxyNote20').find('.bubble')
							.addClass('animated')
							.addClass('fadeInUp')
							.addClass('fast')
							.addClass('delay-1s')
							.show();
							//console.log('note20bubble');
						} else {
							$(".detail-view").unbind('scroll');
							headerScoroll();

							$('.galaxyNote20').find('.bubble')
							.removeClass('animated')
							.removeClass('fadeInUp')
							.removeClass('fast')
							.removeClass('delay-1s')
							.hide();
						}
					}
				},
				// Enable debugger
				debugger: true
			});
			swipe_c3=true;
		} else {
			swiper3.slideTo(0);
		}
	} else if (idx == '#fold2') {
		id = 'fold2-swiper';

		if(swipe_c4==false){
			swiper4 = new Swiper('.' + id, {
				grabCursor: true,
				centeredSlides: true,
				slidesPerView: 'auto',
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows : true,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				navigation: {
					prevEl: '.swiper-button-prev',
				},
				on : {
					slideChange : function(){

						qqFixed=false;
						$('.detail-body').css('position','relative').css('top','0px');
						$('.detail-body').css('height','').css('max-height','').css('overflow-y','');

						player7.pauseVideo();
						player8.pauseVideo();
						player9.pauseVideo();
						player10.pauseVideo();
						player11.pauseVideo();
						player12.pauseVideo();
						player13.pauseVideo();
						player14.pauseVideo();
						player15.pauseVideo();
						player16.pauseVideo();
						player17.pauseVideo();
						player18.pauseVideo();
						player19.pauseVideo();
						player20.pauseVideo();

						var eq = swiper4.realIndex;

						setTimeout(function(){
							$('.detail-view').not( $(this) ).scrollTop(0);
							$('.detail-view').not( $(this) ).removeClass('fixer').removeClass('min').addClass('no-fixer');
						}, 200);

						if($('#fold2 .swiper-pagination-bullet').last().hasClass('swiper-pagination-bullet-active')) {
							$('.galaxyFold2').find('.bubble')
							.addClass('animated')
							.addClass('fadeInUp')
							.addClass('fast')
							.addClass('delay-1s')
							.show();
							//console.log('fold2 bubble');
						} else{
							$(".detail-view").unbind('scroll');
							headerScoroll();
							$('.galaxyFold2').find('.bubble')
							.removeClass('animated')
							.removeClass('fadeInUp')
							.removeClass('fast')
							.removeClass('delay-1s')
							.hide();
						}
					}
				},
				// Enable debugger
				debugger: true
			});
			swipe_c4=true;
		} else {
			swiper4.slideTo(0);
		}
	} else if(idx == '#s20') {

		id = 's20-swiper';

		if(swipe_c==false){
			swiper = new Swiper('.' + id, {
				grabCursor: true,
				centeredSlides: true,
				slidesPerView: 'auto',
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows : true,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				navigation: {
					prevEl: '.swiper-button-prev',
				},
				on : {
					slideChange : function(){

						qqFixed=false;
						$('.detail-body').css('position','relative').css('top','0px');
						$('.detail-body').css('height','').css('max-height','').css('overflow-y','');

						player7.pauseVideo();
						player8.pauseVideo();
						player9.pauseVideo();
						player10.pauseVideo();
						player11.pauseVideo();
						player12.pauseVideo();
						player13.pauseVideo();
						player14.pauseVideo();
						player15.pauseVideo();
						player16.pauseVideo();
						player17.pauseVideo();
						player18.pauseVideo();
						player19.pauseVideo();
						player20.pauseVideo();

						var eq = swiper.realIndex;

						setTimeout(function(){
							  $('.detail-view').not( $(this) ).scrollTop(0);
							  $('.detail-view').not( $(this) ).removeClass('fixer').removeClass('min').addClass('no-fixer');
						}, 200);

						if($('#s20 .swiper-pagination-bullet').last().hasClass('swiper-pagination-bullet-active')) {
							$('.galaxyS20').find('.bubble')
							.addClass('animated')
							.addClass('fadeInUp')
							.addClass('fast')
							.addClass('delay-1s')
							.show();
							//console.log('galaxyS20 bubble');
						} else {
							$(".detail-view").unbind('scroll');
							headerScoroll();

							$('.galaxyS20').find('.bubble')
							.removeClass('animated')
							.removeClass('fadeInUp')
							.removeClass('fast')
							.removeClass('delay-1s')
							.hide();
						}
					}
				},
				// Enable debugger
				debugger: true
			});
			swipe_c=true;
		} else {
			swiper.slideTo(0);
		}
	} else if (idx == '#zflip') {
		id = 'zflip-swiper';

		if(swipe_c2==false){
			swiper2 = new Swiper('.' + id, {
				grabCursor: true,
				centeredSlides: true,
				slidesPerView: 'auto',
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows : true,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				navigation: {
					prevEl: '.swiper-button-prev',
				},
				on : {
					slideChange : function(){

						qqFixed=false;
						$('.detail-body').css('position','relative').css('top','0px');
						$('.detail-body').css('height','').css('max-height','').css('overflow-y','');

						player7.pauseVideo();
						player8.pauseVideo();
						player9.pauseVideo();
						player10.pauseVideo();
						player11.pauseVideo();
						player12.pauseVideo();
						player13.pauseVideo();
						player14.pauseVideo();
						player15.pauseVideo();
						player16.pauseVideo();
						player17.pauseVideo();
						player18.pauseVideo();
						player19.pauseVideo();
						player20.pauseVideo();

						var eq = swiper2.realIndex;

						setTimeout(function(){
							$('.detail-view').not( $(this) ).scrollTop(0);
							$('.detail-view').not( $(this) ).removeClass('fixer').removeClass('min').addClass('no-fixer');
						}, 200);

						if($('#zflip .swiper-pagination-bullet').last().hasClass('swiper-pagination-bullet-active')) {
							$('.galaxyZflip').find('.bubble')
							.addClass('animated')
							.addClass('fadeInUp')
							.addClass('fast')
							.addClass('delay-1s')
							.show();
							//console.log('galaxyZflip bubble');
						} else{
							$(".detail-view").unbind('scroll');
							headerScoroll();
							$('.galaxyZflip').find('.bubble')
							.removeClass('animated')
							.removeClass('fadeInUp')
							.removeClass('fast')
							.removeClass('delay-1s')
							.hide();
						}
					}
				},
				// Enable debugger
				debugger: true
			});
			swipe_c2=true;
		} else {
			swiper2.slideTo(0);
		}
	} else if (idx == '#s21') {
		id = 's21-swiper';

		if(swipe_c5==false){
			swiper5 = new Swiper('.' + id, {
				grabCursor: true,
				centeredSlides: true,
				slidesPerView: 'auto',
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows : true,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				navigation: {
					prevEl: '.swiper-button-prev',
				},
				on : {
					slideChange : function(){

						qqFixed=false;
						$('.detail-body').css('position','relative').css('top','0px');
						$('.detail-body').css('height','').css('max-height','').css('overflow-y','');

						player7.pauseVideo();
						player8.pauseVideo();
						player9.pauseVideo();
						player10.pauseVideo();
						player11.pauseVideo();
						player12.pauseVideo();
						player13.pauseVideo();
						player14.pauseVideo();
						player15.pauseVideo();
						player16.pauseVideo();
						player17.pauseVideo();
						player18.pauseVideo();
						player19.pauseVideo();
						player20.pauseVideo();

						var eq = swiper5.realIndex;

						setTimeout(function(){
							$('.detail-view').not( $(this) ).scrollTop(0);
							$('.detail-view').not( $(this) ).removeClass('fixer').removeClass('min').addClass('no-fixer');
						}, 200);

						if($('#s21 .swiper-pagination-bullet').last().hasClass('swiper-pagination-bullet-active')) {
							$('.galaxyZflip').find('.bubble')
							.addClass('animated')
							.addClass('fadeInUp')
							.addClass('fast')
							.addClass('delay-1s')
							.show();
							//console.log('galaxyZflip bubble');
						} else{
							$(".detail-view").unbind('scroll');
							headerScoroll();
							$('.galaxyZflip').find('.bubble')
							.removeClass('animated')
							.removeClass('fadeInUp')
							.removeClass('fast')
							.removeClass('delay-1s')
							.hide();
						}
					}
				},
				// Enable debugger
				debugger: true
			});
			swipe_c2=true;
		} else {
			swiper5.slideTo(0);
		}
	} else if (idx == '#s20fe') {
		id = 's20fe-swiper';

		if(swipe_c6==false){
			swiper6 = new Swiper('.' + id, {
				grabCursor: true,
				centeredSlides: true,
				slidesPerView: 'auto',
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows : true,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				navigation: {
					prevEl: '.swiper-button-prev',
				},
				on : {
					slideChange : function(){

						qqFixed=false;
						$('.detail-body').css('position','relative').css('top','0px');
						$('.detail-body').css('height','').css('max-height','').css('overflow-y','');

						player7.pauseVideo();
						player8.pauseVideo();
						player9.pauseVideo();
						player10.pauseVideo();
						player11.pauseVideo();
						player12.pauseVideo();
						player13.pauseVideo();
						player14.pauseVideo();
						player15.pauseVideo();
						player16.pauseVideo();
						player17.pauseVideo();
						player18.pauseVideo();
						player19.pauseVideo();
						player20.pauseVideo();

						var eq = swiper6.realIndex;

						setTimeout(function(){
							$('.detail-view').not( $(this) ).scrollTop(0);
							$('.detail-view').not( $(this) ).removeClass('fixer').removeClass('min').addClass('no-fixer');
						}, 200);

						if($('#s20fe .swiper-pagination-bullet').last().hasClass('swiper-pagination-bullet-active')) {
							$('.galaxyZflip').find('.bubble')
							.addClass('animated')
							.addClass('fadeInUp')
							.addClass('fast')
							.addClass('delay-1s')
							.show();
							//console.log('galaxyZflip bubble');
						} else{
							$(".detail-view").unbind('scroll');
							headerScoroll();
							$('.galaxyZflip').find('.bubble')
							.removeClass('animated')
							.removeClass('fadeInUp')
							.removeClass('fast')
							.removeClass('delay-1s')
							.hide();
						}
					}
				},
				// Enable debugger
				debugger: true
			});
			swipe_c6=true;
		} else {
			swiper6.slideTo(0);
		}
	}
}

// detail header scroll
var qqFixed = false;

function headerScoroll(){

	$('.detail-header ').scroll(function (event) {

	});

	$(".detail-view").scroll(function (event) {

		var scrollTop = $(this).scrollTop();
		var innerHeight = $(this).innerHeight();
		var scrollHeight = $(this).prop('scrollHeight');

		if(scrollTop > 150 && qqFixed ==false){

			var dh = $(window).height() - 150;
			qqFixed = true;

			$(this).removeClass('no-fixer').addClass('fixer').addClass('min');
			$('.detail-body').css('position','fixed').css('top','41.667vw');
			$('.detail-body').css('height',dh).css('max-height',dh).css('overflow-y','scroll');

			$('.detail-body').css(' scrollTop','10' );
		}

	});

	$('.detail-body').scroll(function(){
		var scrollTop = $(this).scrollTop();
		if(qqFixed==true &&scrollTop==0){
			$('.detail-body').stop();
			qqFixed=false;
			$('.detail-body').css('position','relative').css('top','0px');
			$('.detail-body').css('height','').css('max-height','').css('overflow-y','');
			$('.detail-view').removeClass('fixer').removeClass('min').addClass('no-fixer');
		}
	});
}

// Fold swiper
function foldSwiper(){
	var swiper = new Swiper('#fold .swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	});
}

// 갤럭시 제품보기
function galaxy_prod(){

	var chk = 0;
	$('.galaxy_prod a').on('click',function(){
		var idx = $(this).attr('href');

		//첫 페이지 이동시
		var sec = $(this).parents('section');
		if(sec.hasClass('intro')){
			if(chk === 0){
				sec.addClass('first');
				chk = 1;
			}
		}

		if (!$(this).hasClass('disable')) {

			if(!$(this).parents('section').hasClass('intro')){
				$(this).parents('#wrap').addClass('twice');
				if(!$(this).parents('.galaxy').siblings().hasClass('prev')){
					$(this).parents('.galaxy').addClass('prev');
				}else{
					$(this).parents('.galaxy').addClass('prev2');
				}
			}

			$(idx).addClass('on').siblings().removeClass('on');

			if(idx == "#s20" || idx == "#zflip" || idx == "#note20" || idx == "#fold2" || idx == "#s20fe" || idx == "#s21"){
				//상세보기 S20, Z, Note20, Fold2
				detailSwiper(idx); //풀페이지 스와이퍼
				headerScoroll(idx); //헤더스크롤

			} else { // 빅스비 채팅 S10, Fold, Note10
				var c1 = $(idx).find('.chat.c1');
				c1.addClass('on').fadeIn();
				c1.prev('.logo').fadeIn();
				c1.find('.toBixby').show();
				c1.find('.placeholder').show();
				c1.find('.typing-wp').removeClass('end');
				c1.find('.typing').text('');

				setTimeout(function(){
					c1.find('.placeholder').hide();
				},sp1)
				setTimeout(function(){
					typingSet(c1.find('.typing-wp:first-child'));
				},sp2)

				if(!($(this).parents('section').index() == 0)){ //마지막페이지에서 이동할때
					var answer = $(this).parents('.bixbyAnswer');
					answer.hide().removeClass('on');
					answer.parents('.chat').hide().removeClass('on');
				}
			}
		}

		var intro = $(this).parents('.intro');
		if($(this).parents('section').index() == 0){ //인트로 페이지에서 이동할때
			intro.removeClass('on');
			intro.find('.intro_txt.q').hide();
		}
	})

}

// 인트로
function intro(){
	setTimeout(function(){
		$('.intro_txt.q').hide();
		$('.intro_txt.a').show();
	},2500)

	bubbleInit();
}

// 말풍선 초기화
function bubbleInit(){
	$('.bubble').removeClass('animated')
		.removeClass('fadeInUp')
		.removeClass('fast')
		.removeClass('delay-1s')
		.removeAttr('style');
}
// 타이핑
function typingSet(target){
	var typingTxt = target.find(".typing-txt").text(); // 타이핑될 텍스트를 가져온다
	var typingView = target.find(".typing");
	var typingBool = false;
	var typingIdx=0;
	typingTxt=typingTxt.split(""); // 한글자씩 자른다.

	if(typingBool==false){ // 타이핑이 진행되지 않았다면
		typingBool=true;
		//var tyInt = setInterval(typing,80); // 반복동작
		var tyInt = setInterval(typing,45); // 반복동작
	}

	function typing(){
		$('.b_prev, .galaxy_prod a, .bixbyAnswer .b_next, .b_home, .bubble span').on('click',function(){
			clearInterval(tyInt);
		})

		if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복
			typingView.append(typingTxt[typingIdx]); // 한글자씩 이어준다.
			typingIdx++;
		} else {
			clearInterval(tyInt); //끝나면 반복종료

			// to 빅스비 질문
			if(target.parents('.typing_group').length > 0){
				var tgIdx = target.index() + 1;
				var tgLength = target.parents('.typing_group').find('.typing-wp').length;
				var b_next = target.parents('.typing_group').next('.b_next');
				if(!(tgIdx == tgLength)){
					target.addClass('end');
				} else {
					b_next.addClass('on');
				}
				typingSet(target.next());
			}
		}
	}
}

//빅스비
function bixbyAnswer(){
	// 유튜브 플레이어를 생성한다.

	function onYouTubePlayerAPIReady() {
	  try {
		  player = new YT.Player('playerLayer', {
					height: '100%',
					width: '100%',
					videoId: 'VqpZKflGw4Y',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady();

	function onYouTubePlayerAPIReady2() {
	  try {
		  player2 = new YT.Player('playerLayer2', {
					height: '100%',
					width: '100%',
					videoId: 'oJYb1LqE90w',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange2
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady2();

	function onYouTubePlayerAPIReady3() {
	  try {
		  player3 = new YT.Player('playerLayer3', {
					height: '100%',
					width: '100%',
					videoId: 'McdgS3Popjk',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange3
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady3();

	function onYouTubePlayerAPIReady4() {
	  try {
		  player4 = new YT.Player('playerLayer_note10_1', {
					height: '100%',
					width: '100%',
					videoId: 'Akoln1KbjMM',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange4
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady4();

	function onYouTubePlayerAPIReady5() {
	  try {
		  player5 = new YT.Player('playerLayer_note10_2', {
					height: '100%',
					width: '100%',
					videoId: 'JKx6rZP1bXk',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange5
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady5();

	function onYouTubePlayerAPIReady6() {
	  try {
		  player6 = new YT.Player('playerLayer_note10_3', {
					height: '100%',
					width: '100%',
					videoId: 'nTDZTEOTN7U',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange6
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady6();

	function onYouTubePlayerAPIReady7() {
	  try {
		  player7 = new YT.Player('playerLayer_s20_1', {
					height: '100%',
					width: '100%',
					videoId: 'TXGGdL2uncw',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange7
			  }
				});
	  } catch (e) {
	  }
	} onYouTubePlayerAPIReady7();

	function onYouTubePlayerAPIReady8() {
	  try {
		  player8 = new YT.Player('playerLayer_s20_2', {
					height: '100%',
					width: '100%',
					videoId: '6lMK6HqK9pU',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
					'onStateChange': onPlayerStateChange8
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady8();

	function onYouTubePlayerAPIReady9() {
	  try {
		  player9 = new YT.Player('playerLayer_s20_3', {
					height: '100%',
					width: '100%',
					videoId: 'gIXtYJEy7gk',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				'onStateChange': onPlayerStateChange9
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady9();

	function onYouTubePlayerAPIReady10() {
	  try {
		  player10 = new YT.Player('playerLayer_s20_4', {
					height: '100%',
					width: '100%',
					videoId: 'vlgkFoQrQAY',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange10
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady10();

	function onYouTubePlayerAPIReady11() {
	  try {
		  player11 = new YT.Player('playerLayer_s20_5', {
					height: '100%',
					width: '100%',
					videoId: 'xSjkY4XenXI',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange11
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady11();

	function onYouTubePlayerAPIReady12() {
	  try {
		  player12 = new YT.Player('playerLayer_zflip_1', {
					height: '100%',
					width: '100%',
					videoId: 'Sx9ibZLwVNE',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange12
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady12();

	function onYouTubePlayerAPIReady13() {
	  try {
		  player13 = new YT.Player('playerLayer_note20_1', {
					height: '100%',
					width: '100%',
					videoId: 'PJDQwoPcXCI',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange13
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady13();

	function onYouTubePlayerAPIReady14() {
	  try {
		  player14 = new YT.Player('playerLayer_note20_2', {
					height: '100%',
					width: '100%',
					videoId: '9EeKp_Wj7gE',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange14
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady14();

	function onYouTubePlayerAPIReady15() {
	  try {
		  player15 = new YT.Player('playerLayer_note20_3', {
					height: '100%',
					width: '100%',
					videoId: 'eecBkhyvF3k',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange15
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady15();

	function onYouTubePlayerAPIReady16() {
	  try {
		  player16 = new YT.Player('playerLayer_note20_4', {
					height: '100%',
					width: '100%',
					videoId: '0BbNcPug1xQ',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange16
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady16();

	function onYouTubePlayerAPIReady17() {
	  try {
		  player17 = new YT.Player('playerLayer_note20_5', {
					height: '100%',
					width: '100%',
					videoId: 'bbSNpDKcGMc',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange17
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady17();

	function onYouTubePlayerAPIReady18() {
	  try {
		  player18 = new YT.Player('playerLayer_note20_6', {
					height: '100%',
					width: '100%',
					videoId: 'GHfVkLkHEyA',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange18
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady18();

	function onYouTubePlayerAPIReady19() {
	  try {
		  player19 = new YT.Player('playerLayer_note20_7', {
					height: '100%',
					width: '100%',
					videoId: 'x3EcfBrjGPY',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange19
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady19();

	function onYouTubePlayerAPIReady20() {
	  try {
		  player20 = new YT.Player('playerLayer_fold2_1', {
					height: '100%',
					width: '100%',
					videoId: 'cswa4G4mhPE',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange20
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady20();

	function onYouTubePlayerAPIReady21() {
	  try {
		  player20 = new YT.Player('playerLayer_s21_1', {
					height: '100%',
					width: '100%',
					videoId: '45lNmd_ykuk',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange20
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady21();

	function onYouTubePlayerAPIReady22() {
	  try {
		  player20 = new YT.Player('playerLayer_s21_2', {
					height: '100%',
					width: '100%',
					videoId: 'r26JHAOtVSc',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange20
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady22();

	function onYouTubePlayerAPIReady23() {
	  try {
		  player20 = new YT.Player('playerLayer_s20fe_1', {
					height: '100%',
					width: '100%',
					videoId: 'QtlBpXiDAUo',
					playerVars: {
						'enablejsapi':1,
						'modestbranding':1,
						'showinfo':1,
						'disablekb':0,
						'autoplay': 0,  // 자동실행여부
						'controls': 1,  // 재생컨트롤 노출여부
						'autohide': 1,  // 재생컨트롤이 자동으로 사라질지의 여부
						'rel': 0,          // 동영상 재생완료 후 유사동영상 노출여부
						'wmode': 'opaque'
					},
			  events: {
				  'onStateChange': onPlayerStateChange20
			  }
				});
	  } catch (e) {
	  }
	}onYouTubePlayerAPIReady23();

	// 동영상의 재생되었을 때 호출됨
	function onPlayerStateChange(event) {
		/*
		if (event.data === 3) {
			var btn = $('#playerLayer').parents('.video').next('.b_more');
			var ans_area = btn.parents('.ans_area');
			if(!ans_area.hasClass('top')){
				btn.fadeIn().addClass('on');
			}
		}
		*/
	}
	function onPlayerStateChange2(event) {
		/*
		if (event.data === 3) {
			var btn = $('#playerLayer2').parents('.video').next('.b_more');
			var ans_area = btn.parents('.ans_area');
			if(!ans_area.hasClass('top')){
				btn.fadeIn().addClass('on');
			}
		}
		*/
	}
	function onPlayerStateChange3(event) {
		/*
		if (event.data === 3) {
			var btn = $('#playerLayer3').parents('.video').next('.b_more');
			var ans_area = btn.parents('.ans_area');
			if(!ans_area.hasClass('top')){
				btn.fadeIn().addClass('on');
			}
		}
		*/
	}
	function onPlayerStateChange4(event) {
		/*
		if (event.data === 3) {
			var btn = $('#playerLayer_note10_1').parents('.video').next('.b_more');
			var ans_area = btn.parents('.ans_area');
			if(!ans_area.hasClass('top')){
				btn.fadeIn().addClass('on');
			}
		}
		*/
	}
	function onPlayerStateChange5(event) {
		/*
		if (event.data === 3) {
			var btn = $('#playerLayer_note10_5').parents('.video').next('.b_more');
			var ans_area = btn.parents('.ans_area');
			if(!ans_area.hasClass('top')){
				btn.fadeIn().addClass('on');
			}
		}
		*/
	}

	function onPlayerStateChange6(event) {
		if (event.data === 1) {
			//player6.pauseVideo();
			player7.pauseVideo();
			player8.pauseVideo();
			player9.pauseVideo();
			player10.pauseVideo();
			player11.pauseVideo();
			player12.pauseVideo();
			player13.pauseVideo();
			player14.pauseVideo();
			player15.pauseVideo();
			player16.pauseVideo();
			player17.pauseVideo();
			player18.pauseVideo();
			player19.pauseVideo();
			player20.pauseVideo();
			player21.pauseVideo();
			player22.pauseVideo();
			player23.pauseVideo();
		}
	}

	function onPlayerStateChange7(event) {
		if (event.data === 1) {
			player6.pauseVideo();
			//player7.pauseVideo();
			player8.pauseVideo();
			player9.pauseVideo();
			player10.pauseVideo();
			player11.pauseVideo();
			player12.pauseVideo();
			player13.pauseVideo();
			player14.pauseVideo();
			player15.pauseVideo();
			player16.pauseVideo();
			player17.pauseVideo();
			player18.pauseVideo();
			player19.pauseVideo();
			player20.pauseVideo();
			player21.pauseVideo();
			player22.pauseVideo();
			player23.pauseVideo();
		}
	}

	function onPlayerStateChange8(event) {
		if (event.data === 1) {
			player6.pauseVideo();
			player7.pauseVideo();
			//player8.pauseVideo();
			player9.pauseVideo();
			player10.pauseVideo();
			player11.pauseVideo();
			player12.pauseVideo();
			player13.pauseVideo();
			player14.pauseVideo();
			player15.pauseVideo();
			player16.pauseVideo();
			player17.pauseVideo();
			player18.pauseVideo();
			player19.pauseVideo();
			player20.pauseVideo();
			player21.pauseVideo();
			player22.pauseVideo();
			player23.pauseVideo();
		}
	}

	function onPlayerStateChange9(event) {
		if (event.data === 1) {
			player6.pauseVideo();
			player7.pauseVideo();
			player8.pauseVideo();
			//player9.pauseVideo();
			player10.pauseVideo();
			player11.pauseVideo();
			player12.pauseVideo();
			player13.pauseVideo();
			player14.pauseVideo();
			player15.pauseVideo();
			player16.pauseVideo();
			player17.pauseVideo();
			player18.pauseVideo();
			player19.pauseVideo();
			player20.pauseVideo();
			player21.pauseVideo();
			player22.pauseVideo();
			player23.pauseVideo();
		}
	}

	function onPlayerStateChange10(event) {
		if (event.data === 1) {
			player6.pauseVideo();
			player7.pauseVideo();
			player8.pauseVideo();
			player9.pauseVideo();
			//player10.pauseVideo();
			player11.pauseVideo();
			player12.pauseVideo();
			player13.pauseVideo();
			player14.pauseVideo();
			player15.pauseVideo();
			player16.pauseVideo();
			player17.pauseVideo();
			player18.pauseVideo();
			player19.pauseVideo();
			player20.pauseVideo();
			player21.pauseVideo();
			player22.pauseVideo();
			player23.pauseVideo();
		}
	}

	function onPlayerStateChange11(event) {
		if (event.data === 1) {
			player6.pauseVideo();
			player7.pauseVideo();
			player8.pauseVideo();
			player9.pauseVideo();
			player10.pauseVideo();
			//player11.pauseVideo();
			player12.pauseVideo();
			player13.pauseVideo();
			player14.pauseVideo();
			player15.pauseVideo();
			player16.pauseVideo();
			player17.pauseVideo();
			player18.pauseVideo();
			player19.pauseVideo();
			player20.pauseVideo();
			player21.pauseVideo();
			player22.pauseVideo();
			player23.pauseVideo();
		}
	}

	function onPlayerStateChange12(event) {
		if (event.data === 1) {
			player6.pauseVideo();
			player7.pauseVideo();
			player8.pauseVideo();
			player9.pauseVideo();
			player10.pauseVideo();
			player11.pauseVideo();
			//player12.pauseVideo();
			player13.pauseVideo();
			player14.pauseVideo();
			player15.pauseVideo();
			player16.pauseVideo();
			player17.pauseVideo();
			player18.pauseVideo();
			player19.pauseVideo();
			player20.pauseVideo();
			player21.pauseVideo();
			player22.pauseVideo();
			player23.pauseVideo();
		}
	}

	function onPlayerStateChange13(event) {
		if (event.data === 1) {
			player6.pauseVideo();
			player7.pauseVideo();
			player8.pauseVideo();
			player9.pauseVideo();
			player10.pauseVideo();
			player11.pauseVideo();
			player12.pauseVideo();
			//player13.pauseVideo();
			player14.pauseVideo();
			player15.pauseVideo();
			player16.pauseVideo();
			player17.pauseVideo();
			player18.pauseVideo();
			player19.pauseVideo();
			player20.pauseVideo();
			player21.pauseVideo();
			player22.pauseVideo();
			player23.pauseVideo();
		}
	}

	function onPlayerStateChange14(event) {
		if (event.data === 1) {
			player6.pauseVideo();
			player7.pauseVideo();
			player8.pauseVideo();
			player9.pauseVideo();
			player10.pauseVideo();
			player11.pauseVideo();
			player12.pauseVideo();
			player13.pauseVideo();
			//player14.pauseVideo();
			player15.pauseVideo();
			player16.pauseVideo();
			player17.pauseVideo();
			player18.pauseVideo();
			player19.pauseVideo();
			player20.pauseVideo();
			player21.pauseVideo();
			player22.pauseVideo();
			player23.pauseVideo();
		}
	}

	function onPlayerStateChange15(event) {
		if (event.data === 1) {
			player6.pauseVideo();
			player7.pauseVideo();
			player8.pauseVideo();
			player9.pauseVideo();
			player10.pauseVideo();
			player11.pauseVideo();
			player12.pauseVideo();
			player13.pauseVideo();
			player14.pauseVideo();
			//player15.pauseVideo();
			player16.pauseVideo();
			player17.pauseVideo();
			player18.pauseVideo();
			player19.pauseVideo();
			player20.pauseVideo();
			player21.pauseVideo();
			player22.pauseVideo();
			player23.pauseVideo();
		}
	}

	function onPlayerStateChange16(event) {
		if (event.data === 1) {
			player6.pauseVideo();
			player7.pauseVideo();
			player8.pauseVideo();
			player9.pauseVideo();
			player10.pauseVideo();
			player11.pauseVideo();
			player12.pauseVideo();
			player13.pauseVideo();
			player14.pauseVideo();
			player15.pauseVideo();
			//player16.pauseVideo();
			player17.pauseVideo();
			player18.pauseVideo();
			player19.pauseVideo();
			player20.pauseVideo();
			player21.pauseVideo();
			player22.pauseVideo();
			player23.pauseVideo();
		}
	}

	function onPlayerStateChange17(event) {
		if (event.data === 1) {
			player6.pauseVideo();
			player7.pauseVideo();
			player8.pauseVideo();
			player9.pauseVideo();
			player10.pauseVideo();
			player11.pauseVideo();
			player12.pauseVideo();
			player13.pauseVideo();
			player14.pauseVideo();
			player15.pauseVideo();
			player16.pauseVideo();
			//player17.pauseVideo();
			player18.pauseVideo();
			player19.pauseVideo();
			player20.pauseVideo();
			player21.pauseVideo();
			player22.pauseVideo();
			player23.pauseVideo();
		}
	}

	function onPlayerStateChange18(event) {
		if (event.data === 1) {
			player6.pauseVideo();
			player7.pauseVideo();
			player8.pauseVideo();
			player9.pauseVideo();
			player10.pauseVideo();
			player11.pauseVideo();
			player12.pauseVideo();
			player13.pauseVideo();
			player14.pauseVideo();
			player15.pauseVideo();
			player16.pauseVideo();
			player17.pauseVideo();
			//player18.pauseVideo();
			player19.pauseVideo();
			player20.pauseVideo();
			player21.pauseVideo();
			player22.pauseVideo();
			player23.pauseVideo();
		}
	}

	function onPlayerStateChange19(event) {
		if (event.data === 1) {
			player6.pauseVideo();
			player7.pauseVideo();
			player8.pauseVideo();
			player9.pauseVideo();
			player10.pauseVideo();
			player11.pauseVideo();
			player12.pauseVideo();
			player13.pauseVideo();
			player14.pauseVideo();
			player15.pauseVideo();
			player16.pauseVideo();
			player17.pauseVideo();
			player18.pauseVideo();
			//player19.pauseVideo();
			player20.pauseVideo();
			player21.pauseVideo();
			player22.pauseVideo();
			player23.pauseVideo();
		}
	}

	function onPlayerStateChange20(event) {
		if (event.data === 1) {
			player6.pauseVideo();
			player7.pauseVideo();
			player8.pauseVideo();
			player9.pauseVideo();
			player10.pauseVideo();
			player11.pauseVideo();
			player12.pauseVideo();
			player13.pauseVideo();
			player14.pauseVideo();
			player15.pauseVideo();
			player16.pauseVideo();
			player17.pauseVideo();
			player18.pauseVideo();
			player19.pauseVideo();
			//player20.pauseVideo();
			player21.pauseVideo();
			player22.pauseVideo();
			player23.pauseVideo();
		}
	}

	function onPlayerStateChange21(event) {
		if (event.data === 1) {
			player6.pauseVideo();
			player7.pauseVideo();
			player8.pauseVideo();
			player9.pauseVideo();
			player10.pauseVideo();
			player11.pauseVideo();
			player12.pauseVideo();
			player13.pauseVideo();
			player14.pauseVideo();
			player15.pauseVideo();
			player16.pauseVideo();
			player17.pauseVideo();
			player18.pauseVideo();
			player19.pauseVideo();
			player20.pauseVideo();
			//player21.pauseVideo();
			player22.pauseVideo();
			player23.pauseVideo();
		}
	}

	function onPlayerStateChange22(event) {
		if (event.data === 1) {
			player6.pauseVideo();
			player7.pauseVideo();
			player8.pauseVideo();
			player9.pauseVideo();
			player10.pauseVideo();
			player11.pauseVideo();
			player12.pauseVideo();
			player13.pauseVideo();
			player14.pauseVideo();
			player15.pauseVideo();
			player16.pauseVideo();
			player17.pauseVideo();
			player18.pauseVideo();
			player19.pauseVideo();
			player20.pauseVideo();
			player21.pauseVideo();
			//player22.pauseVideo();
			player23.pauseVideo();
		}
	}

	function onPlayerStateChange23(event) {
		if (event.data === 1) {
			player6.pauseVideo();
			player7.pauseVideo();
			player8.pauseVideo();
			player9.pauseVideo();
			player10.pauseVideo();
			player11.pauseVideo();
			player12.pauseVideo();
			player13.pauseVideo();
			player14.pauseVideo();
			player15.pauseVideo();
			player16.pauseVideo();
			player17.pauseVideo();
			player18.pauseVideo();
			player19.pauseVideo();
			player20.pauseVideo();
			player21.pauseVideo();
			player22.pauseVideo();
			//player23.pauseVideo();
		}
	}


	// 빅스비 대답듣기
	$('.toBixby .b_next').on('click',function(){
		var chat = $(this).parents('.chat');
		var toBixby = $(this).parents('.toBixby');
		var logo = $(this).parents('section').find('.logo');
		var answer = toBixby.next('.bixbyAnswer');

		if($(this).hasClass('on')){ //버튼 활성화 되었을때
			$(this).removeClass('on');
			logo.fadeOut();
			toBixby.fadeOut();
			answer.fadeIn().addClass('on');

			var section = $(this).parents('section')
			if(section.hasClass('galaxyS10')){ //갤럭시 s10일때
					if(chat.index() == 1){ //첫번째 대답
						if(answer.find('.ans_tit_wp + .ans_area').hasClass('top')){
							setTimeout(function(){
								answer.find('.ans_area + .ans_area').fadeIn();
							},500);
						}
					}else if(chat.index() == 2){
						setTimeout(function(){
							answer.find('.b_next').fadeIn('slow');
						},500);
					}else if(chat.index() == 3){
						setTimeout(function(){
							answer.find('.b_last').fadeIn('slow').addClass('on');
						},500);

					}
			}else if(section.hasClass('galaxyFold')){ //갤럭시 폴더일때
					if(chat.index() == 1 || chat.index() == 2){ //첫번째 대답
						if(answer.find('.ans_tit_wp + .ans_area').hasClass('top')){
							setTimeout(function(){
								answer.find('.ans_area + .ans_area').fadeIn();
							},500);
						}
					}else if(chat.index() == 3){

						foldSwiper();
						setTimeout(function(){
							answer.find('.b_last').fadeIn('slow').addClass('on');
						},500);
					}

			}else if(section.hasClass('galaxyNote10')){ //갤럭시 Note10일때
					if(chat.index() == 1 || chat.index() == 2){ //첫번째 대답 & 두번째 대답
						if(answer.find('.ans_tit_wp + .ans_area').hasClass('top')){
							setTimeout(function(){
								answer.find('.ans_area + .ans_area').fadeIn();
							},500);
						}
					}else if(chat.index() == 3){
						setTimeout(function(){
							answer.find('.b_last').fadeIn('slow').addClass('on');
						},500);
					}

			}
		}
	})

	// 상세빅스비 하단 홈으로
	$('.b_home, .bubble span').on('click',function(){

		if($(this).parents('section').hasClass('detail')){
			qqFixed=false;
			$('.detail-body').css('position','relative').css('top','0px');
			$('.detail-body').css('height','').css('max-height','').css('overflow-y','');
			$('.detail-view').removeClass('fixer').removeClass('min').addClass('no-fixer');
		} else {
			bixbyInit();
		}

		//첫 슬라이드는 intro이동
		$('.intro').addClass('on').siblings().removeClass('on');

		player2.pauseVideo();
		player3.pauseVideo();
		player4.pauseVideo();
		player5.pauseVideo();
		player6.pauseVideo();
		player7.pauseVideo();
		player8.pauseVideo();
		player9.pauseVideo();
		player10.pauseVideo();
		player11.pauseVideo();
		player12.pauseVideo();
		player13.pauseVideo();
		player14.pauseVideo();
		player15.pauseVideo();
		player16.pauseVideo();
		player17.pauseVideo();
		player18.pauseVideo();
		player19.pauseVideo();
		player20.pauseVideo();

		intro();
	})

	//이전페이지 가기
	$('.b_prev').on('click',function(){

		player2.pauseVideo();
		player3.pauseVideo();
		player4.pauseVideo();
		player5.pauseVideo();
		player6.pauseVideo();
		player7.pauseVideo();
		player8.pauseVideo();
		player9.pauseVideo();
		player10.pauseVideo();
		player11.pauseVideo();
		player12.pauseVideo();
		player13.pauseVideo();
		player14.pauseVideo();
		player15.pauseVideo();
		player16.pauseVideo();
		player17.pauseVideo();
		player18.pauseVideo();
		player19.pauseVideo();
		player20.pauseVideo();

		qqFixed=false;
		$('.detail-body').css('position','relative').css('top','0px');
		$('.detail-body').css('height','').css('max-height','').css('overflow-y','');
		$('.detail-view').removeClass('fixer').removeClass('min').addClass('no-fixer');


		var onSection;
		var chat = $(this).parents('.chat');
		var crrtSection = chat.parents('section');
		var prevChat = chat.prev('.chat');
		var toBixby = $(this).parents('.chat').find('.toBixby');
		var logo = $(this).parents('section').find('.logo');
		var answer = $(this).parents('.bixbyAnswer');
		chat.hide().removeClass('on');
		chat.find('.typing-wp').removeClass('end')
		chat.find('.typing').text('');
		chat.find('.typing_group').next('.b_next').removeClass('on');

		if($(this).parent().hasClass('detail-view')){ //상세페이지에서 뒤로

			//첫 슬라이드는 intro이동
			$('.intro').addClass('on').siblings().removeClass('on');
			intro();


		} else if($(this).parent().hasClass('toBixby')){ //빅스비 질문페이지에서 뒤로갈때

			toBixby.hide();
			logo.hide();

			if(chat.prev('.chat').length > 0){ //이전 채팅페이지로
				prevChat.fadeIn('slow',function(){prevChat.addClass('on')}); //이전 채팅 보이기
				prevChat.addClass('again');
				prevChat.find('.bixbyAnswer').fadeIn().addClass('on');
				prevChat.find('.bixbyAnswer').find('.b_next').fadeIn();

				if(chat.parents('section').hasClass('galaxyS10')){ //galaxyS10 채팅일때
					if(prevChat.index() === 1){
						prevChat.find('.ans_area + .ans_area').hide();
						setTimeout(function(){
							prevChat.find('.ans_area + .ans_area').fadeIn();
						},500);
					}
				}else if(chat.parents('section').hasClass('galaxyFold')){ //fold 채팅일때
					if(prevChat.index() === 1 || prevChat.index() === 2){
						prevChat.find('.ans_area + .ans_area').hide();
						setTimeout(function(){
							prevChat.find('.ans_area + .ans_area').fadeIn();
						},500);
					}

				}
			}else{ //로고페이지로

				if(!chat.parents('#wrap').hasClass('twice')){
					$('.intro').addClass('on').siblings().removeClass('on');
					// 첫채팅화면에서 인트로화면 이동시
					var secIntro = $(this).parents('#wrap').find('.intro');
					if(secIntro.hasClass('first')){
						$('.intro_txt.a').show();
					}else{
						intro();
					}
				}else{ //첫제품을 끝까지 보고 다음제품에서 이전(로고)페이지로 이동시
					var sibSection = crrtSection.siblings('.prev');
					var adIdx = crrtSection.index() - 1;

					if(crrtSection.siblings().hasClass('prev2')){
						crrtSection.siblings('.prev2').addClass('on');
						onSection = crrtSection.siblings('.prev2');
					}else{
						crrtSection.siblings('.prev').addClass('on');
						onSection = crrtSection.siblings('.prev');
					}

					onSection.find('.chat.c3').fadeIn().addClass('on');
					onSection.find('.chat.c3 .bixbyAnswer.last').fadeIn().addClass('on');

					onSection.find('.chat.c3 .bixbyAnswer.last .ad.last').hide().siblings('.ad').show();

					onSection.find('.chat.c3 .bixbyAnswer.last .ad.last').hide().siblings('.ad').find('.galaxy_prod a').eq(adIdx).removeClass('disable');

					var lastAnswer = onSection.find('.chat.c3 .bixbyAnswer.last')
					lastAnswer.find('.placeholder').show();
					lastAnswer.find('.typing').text('');
					lastAnswer.find('.typing-wp').removeClass('end');
					setTimeout(function(){
						lastAnswer.show().addClass('on');
						// to Bixby 타이핑 시작
						setTimeout(function(){
							lastAnswer.find('.placeholder').hide();
						},sp1)
						setTimeout(function(){
							typingSet(lastAnswer.find('.typing-wp:first-child'));
						},sp2)
					},0)
					setTimeout(function(){
						lastAnswer.find('.typing-wp:last-child').addClass('end')
					},5000);

					onSection.parents('#wrap').removeClass('twice')
					setTimeout(function(){
						onSection.removeClass('prev');
						onSection.removeClass('prev2');
					},100)

					$('.galaxy_prod .mCSB_dragger, .galaxy_prod .mCSB_container').css('left','0')
					//chat.parents('#wrap').removeClass('twice');
				}
			}

		}else{ //빅스비 답변페이지에서 뒤로갈때
			if(!answer.hasClass('last')){ //마지막 페이지 아닐때
				logo.fadeIn();
				chat.fadeIn().addClass('on');
				toBixby.fadeIn().addClass('on');
				answer.hide().removeClass('on');
				toBixby.find('.placeholder').show();
				setTimeout(function(){
					// to Bixby 타이핑 시작
					setTimeout(function(){
						toBixby.find('.placeholder').hide();
					},sp1)
					setTimeout(function(){
						typingSet(toBixby.find('.typing-wp:first-child'));
					},sp2)
				},700)
			}else{//마지막페이지일때
				chat.fadeIn().addClass('on');
				answer.prev('.bixbyAnswer').fadeIn().addClass('on');
				answer.prev('.bixbyAnswer').find('div, a').fadeIn();
				answer.fadeOut().removeClass('on');
				answer.find('.typing').text('');
				answer.find('.typing-wp').removeClass('end');

				if(chat.parents('#wrap').hasClass('twice')){
					chat.parents('#wrap').removeClass('twice')
				}
			}

				player.pauseVideo();
				player2.pauseVideo();
				player3.pauseVideo();
				player4.pauseVideo();
				player5.pauseVideo();
				player6.pauseVideo();
				player7.pauseVideo();
				player8.pauseVideo();
				player9.pauseVideo();
				player10.pauseVideo();
				player11.pauseVideo();
				player12.pauseVideo();
				player13.pauseVideo();
				player14.pauseVideo();
				player15.pauseVideo();
				player16.pauseVideo();
				player17.pauseVideo();
				player18.pauseVideo();
				player19.pauseVideo();
				player20.pauseVideo();

				answer.find('.ans_area + .ans_area').fadeOut();

		}

		$('.youTube_link .mCSB_dragger, .youTube_link .mCSB_container').css('left','0'); //스크롤바 위치 초기화

	})


	// 영상설명 더보기
	$('.b_more').on('click',function(){
		var ans_tit = $(this).parents('.bixbyAnswer').find('.ans_tit_wp');
		var txt = $(this).parents('.ans_area').find('.txt');
		var ans_area2 = $(this).parents('.ans_area').next('.ans_area');
		var b_next = $(this).parents('.bixbyAnswer').find('.b_next');
		ans_tit.slideUp('slow');  //상단 텍스트 숨김
		txt.slideUp('slow'); //텍스트 박스 안 텍스트 숨김
		ans_area2.fadeIn('slow');
		b_next.fadeIn('slow');
		$(this).hide().removeClass('on')
		$(this).parents('.ans_area').addClass('top');
		$('.youTube_link .mCSB_dragger, .youTube_link .mCSB_container').css('left','0'); //스크롤바 위치 초기화
	})

	// 채팅 다음 페이지
	$('.bixbyAnswer .b_next').on('click',function(){
		var chatLength = $(this).parents('section').find('.chat').length;
		var currentChat = $(this).parents('.chat');
		var bixbyAnswer = currentChat.find('.bixbyAnswer');
		var nextChat = currentChat.next('.chat');
		var logo = $(this).parents('section').find('.logo');

			player.stopVideo();//정지
			player2.pauseVideo();
			player4.pauseVideo();
			player3.pauseVideo();
			player5.pauseVideo();
			player6.pauseVideo();
			player7.pauseVideo();
			player8.pauseVideo();
			player9.pauseVideo();
			player10.pauseVideo();
			player11.pauseVideo();
			player12.pauseVideo();
			player13.pauseVideo();
			player14.pauseVideo();
			player15.pauseVideo();
			player16.pauseVideo();
			player17.pauseVideo();
			player18.pauseVideo();
			player19.pauseVideo();
			player20.pauseVideo();

		logo.fadeIn(); //로고 보이기
		currentChat.hide().removeClass('on');//이전 채팅 숨기기
		currentChat.find('.toBixby ').removeClass('on');
		bixbyAnswer.hide().removeClass('on');//이전 채팅 숨기기
		bixbyAnswer.find('.b_next').hide();
		//nextChat.fadeIn('slow',function(){nextChat.addClass('on')}); //다음 채팅 보이기
		nextChat.show().addClass('on')

		if(currentChat.hasClass('again')){ //이전페이지 갔다가 다시 다음페이지 갈때
			currentChat.removeClass('again');
			nextChat.find('.toBixby').show();
			nextChat.find('.placeholder').show();
			nextChat.find('.toBixby').find('.typing-wp').removeClass('end');
			nextChat.find('.toBixby').find('.typing').text('');

			$('.youTube_link .mCSB_dragger, .youTube_link .mCSB_container').css('left','0'); //스크롤바 위치 초기화
		}

		setTimeout(function(){
			// to Bixby 타이핑 시작
			setTimeout(function(){
				nextChat.find('.toBixby').find('.placeholder').hide();
			},sp1)
			setTimeout(function(){
				typingSet(nextChat.find('.toBixby').find('.typing-wp:first-child'));
			},sp2)
		},700)

	})

	//채팅 마지막 페이지
	$('.b_last').on('click',function(){
		var galaxyIdx = $(this).parents('.galaxy').index() - 1;
		var currentAnswer = $(this).parents('.bixbyAnswer');
		var lastAnswer = currentAnswer.next('.bixbyAnswer');
		currentAnswer.find('.ans_tit_wp').slideUp();  //상단 텍스트 숨김
		currentAnswer.find('.ans_area').slideUp(); //텍스트 박스 안 텍스트 숨김
		currentAnswer.find('.link_wp').slideUp(function(){
			currentAnswer.hide().removeClass('on')
		});
		//currentAnswer.fadeOut(function(){});
		$(this).fadeOut(function(){$(this).removeClass('on')});

		// backtohome 노출
		$(this).parents('.galaxy').find('.bubble')
			.addClass('animated')
			.addClass('fadeInUp')
			.addClass('fast')
			.addClass('delay-1s')
			.show();

		lastAnswer.find('.placeholder').show();
		lastAnswer.find('.typing').text('');
		lastAnswer.find('.typing-wp').removeClass('end');
		setTimeout(function(){
			lastAnswer.show().addClass('on');
			// to Bixby 타이핑 시작
			setTimeout(function(){
				lastAnswer.find('.placeholder').hide();
			},sp1)
			setTimeout(function(){
				typingSet(lastAnswer.find('.typing-wp:first-child'));
			},sp2)
		},700)

		setTimeout(function(){
			lastAnswer.find('.typing-wp:last-child').addClass('end')
		},5700);

		// 현재 보고있는 제품 비활성화
		$('.ad .galaxy_prod').each(function(){
			$(this).find('a').eq(galaxyIdx).addClass('disable');
			//$('.ad .galaxy_prod').appendTo($(this).find('a').eq(galaxyIdx));
		});


		//제품 전부 봤을 경우
		var disable = $(this).parents('.bixbyAnswer').next('.bixbyAnswer.last').find('.galaxy_prod .disable');
		if(disable.length > 2){

			$('.bixbyAnswer.last').each(function(){
				$(this).find('.ad').eq(0).hide().siblings('.ad.last').show();
			})
		}
		if($(this).parents('#wrap').hasClass('twice')){
			$(this).parents('#wrap').removeClass('twice')
		}

		player6.pauseVideo();
		$('.galaxy_prod .mCSB_dragger, .galaxy_prod .mCSB_container').css('left','0')
	})
}
