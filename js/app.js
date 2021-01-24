/*===================================
 トップナビの固定
=====================================*/

var nav = (function(){
  var navPos = $('.js-nav-menu').offset().top; // navの位置
  var navHeight = $('.js-nav-menu').outerHeight(); // navの高さ
  var headerHeight = $('.js-header').outerHeight(); // headerの高さ
  var windowWidth = window.innerWidth;
  var breakPoint = 768;
  return {
      headerFixed:function(){ 
        $('body').css('padding-top', headerHeight);
        $('.js-header').addClass('is-header-fixed');
      },
      navFixed:function(){ 
        $('body').css('padding-top', navHeight);
        $('.js-nav-menu').addClass('is-nav-fixed');
        $('.js-header-display').addClass('is-header-none');
      },
      navTop:function(){ 
        $('body').css('padding-top', 0 );
        $('.js-nav-menu').removeClass('is-nav-fixed');
        $('.js-header-display').removeClass('is-header-none');
      },
      init:function(){
        var that = this;
        
        $(window).on('scroll', function(){
          if(windowWidth < breakPoint){
            that.headerFixed();
          }else{
            if ($(window).scrollTop() > navPos) {
              that.navFixed();
            }else{
              that.navTop();
            }
          }        
        });  
      }
  } 
})();
nav.init();


/*===================================
 ハンバーガーメニュー
=====================================*/
$('.js-toggle-sp-menu').on('click', function(){
  $('.js-trigger').toggleClass('is-active');
  $('.js-nav-sp').toggleClass('is-active');
});

$('a[href^="#"]').on('click', function() {
  $('.js-nav-sp').removeClass('is-active');
  $('.js-trigger').removeClass('is-active');
});

/*===================================
 画像スライダー（カルーセル）
=====================================*/
$(function(){
  var count = 0;//アニメーションのカウント数
  var $slideContainer = $('.p-loopslider__container');//ul要素を梱包する外枠。スライドさせる要素。
  var $slideWrap = $('.p-loopslider__wrap');//ul要素
  var $slideItem = $('.c-loopslider__item');//li要素
  var slideItemWidth = $slideItem.width();//li要素の横幅
  var slideItemNum = $slideItem.length; //li要素の数
  var slideWrapWidth = slideItemWidth * slideItemNum;//ul要素の横幅(li*横幅*数)
  var slideContainerAdd = slideWrapWidth * 2;
  var DURATION = 5000;//アニメーション時間
  var TIMER = 10000;//interval時間

  //ul要素をクローンで複製する。
  $slideWrap.clone().appendTo('.p-loopslider__container');//appendToはクラス名で指定する。
  //複製した分を含めたコンテナのwidthをcssに付与する。
  $slideContainer.css('width', slideContainerAdd);

  //アニメーションの設定
  function carouselAnimate(){
    count ++;//アニメーションするごとに1ずつ加算
    $slideContainer.animate({
      'left' : '-=' + (slideItemWidth)//li要素のwidthずつ移動
    }, DURATION ,function(){//コールバック関数
      positionInit();
    });
  }

  //一つ目のul要素分leftに移動したら、left:0に戻す。
  function positionInit(){
    if(!(count % slideItemNum)){//カウント数÷アイテム数の余りが0なら
      $slideContainer.css({'left': 0});
      count = 0;//カウント数リセット
    }
  }

  //指定した秒数ごとの処理
  setInterval(function(){
    carouselAnimate();
  }, TIMER);

});

/*===================================
 トップページボタン
=====================================*/
// 読み込んだ時とスクロールした時
$(window).on('load scroll', function(){

    // 目的のスクロール量を設定(px)
    var TargetPos = 450;
    // 現在のスクロール位置を取得
    var ScrollPos = $(window).scrollTop();
    // 現在位置が目的のスクロール量に達しているかどうかを判断
    
    if (ScrollPos >= TargetPos) {
      // 達していれば表示
      $("#page__top").fadeIn();
    }
    else {
      // 達していなければ非表示
      $("#page__top").fadeOut();
    }

});

/*===================================
 トップへ移動アニメーション
=====================================*/

$('#page__top').on('click', function(){
  $( 'html,body' ).animate( {scrollTop:0} , 1000) ;
});

/*===================================
 コンテンツ効果
=====================================*/
// 読み込んだ時とスクロールした時
$(window).on('load scroll', function(){

  scroll_effect();
  
  function scroll_effect(){
    $('.js-effect-fade').each(function(){
      //要素からTopまでの距離
      var elemPos = $(this).offset().top;
      //スクロールした量
      var scroll = $(window).scrollTop();
      //windowの高さ（画面）
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 50){
        $(this).addClass('is-effect-scroll');
      }
    });
  }

});









