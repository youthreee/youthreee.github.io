$(function () {
    // $('.tabs').tabs();

    var
        $phone = $('#phone'),

        $bodybook = $('.book_contents'),

        $menu = $('#menu')
        $menuOpenBtn = $('#menuOpen'),

        $tabArcodian = $('.tab.arcodian'),
        $tabContents = $('.tabs .contents'),

        $play = $('#play'),
        $intro = $('.opening')

        ;

    setTimeout(function () {
        $phone.addClass('readingMode');
    }, 3500);

    setTimeout(function () {
        $intro.remove();
    }, 3500);


    $menu.addClass('show');
    // $('#otherBooks').addClass('open');

    // var didScroll;
    //
    // $menu.scroll(function(event){
    // 	var scrollTop = $(this).scrollTop();
    // 	var scrollH = this.scrollHeight;
    // 	var height = $(this).height();
    // 	var percent = ((scrollTop / (scrollH - height)) * 100) * 0.1;
    //
    // 	requestAnimationFrame(function(){
    // 		$menu.css('bottom', 0);
    // 	});
    // });

    // hasScrolled()를 실행하고 didScroll 상태를 재설정
    // setInterval(function(){
    // 	if(didScroll){
    // 		hasScrolled();
    // 		didScroll = false;
    // 	}
    // }, 250);

    var isOpenAppbar = false

    function openAppbar() {
        $menu.addClass('show');
        isOpenAppbar = true
    }
    function closeAppbar() {
        $menu.removeClass('show');
        isOpenAppbar = false
    }
    function toggleAppbar() {
        if (!isOpenAppbar) {
            openAppbar()
        } else {
            closeAppbar()
        }
    }

    $menuOpenBtn.on('click', function () {
        toggleAppbar()
    });


    $bodybook.on('click', function () {
        var isOpenAppbar = $menu.css('right');
        if ($play.hasClass('open')) {
            $(this).parent().addClass('audioMode', 500);
            $play.toggleClass('off');
        } else {
            if (isOpenAppbar === '0px') {
                toggleAppbar()
            } else {
                $(this).parent().toggleClass('readingMode', 500);
            }
        }
    });

    var displayHeight = $('.display').height();
    var detailHeight = $('.detail').height();

    function tabs(tab) {
        tab.on('click', function () {
            var $this = $(this);
            var kind = $this.children('div').attr('class').replace('settings', '').trim();

            //아코디언 메뉴 화살표
            // $(this).prev().toggleClass('open',500);
            //탭 오픈
            // $(this).toggleClass('open',500);
            // if($this.hasClass('open')){
            // 	switch(kind){
            // 		case "display" :
            // 		$this.height(displayHeight);
            // 		break;

            // 		case "detail" :
            // 		$this.height(detailHeight);
            // 		break;
            // 	}
            // } else {
            // 	$this.css('height','');
            // }
        });
    };

    tabs($tabContents);

    //배경선택
    $('#set_bg').children('input').on('click', function () {
        $phone.removeClass();
        var colorName = $('#set_bg').children('input:checked').attr('id');
        $phone.addClass(colorName);
    });

    // $tabArcodian.on('click',function(){
    // 	$(this).toggleClass('open',500);
    // 	var $this = $(this);
    // 	console.log($this.next());

    // 	var kind = $this.next().attr('class').replace('settings','').trim();
    // 	if($this.hasClass('open')){
    // 		switch(kind){
    // 			case "display" :
    // 			$this.height(displayHeight);
    // 			break;

    // 			case "detail" :
    // 			$this.height(detailHeight);
    // 			break;
    // 		}
    // 	} else {
    // 		$this.css('height','');
    // 	}
    // });

    $('input[type=range]').each(function () {
        var gageWidth = $(this).val();
        // console.log($(this).val());

        var gageBar = $("<p>").css('width', (gageWidth + '%'));
        gageBar.insertBefore($(this));
    })

    $('input[type=range]').on('input', function () {
        $(this).trigger('change');
        var gageWidth = $(this).val();
        var gageBar = $(this).prev();
        gageBar.css('width', (gageWidth + '%'));
        // console.log(gageBar);
    });

    $('.visual_detail .slider_wrapper form').on('mousedown touchstart', function () {
        $menu.addClass('touching');
        console.log("ㅇㅇ");

    });
    $('.display').on('mouseup touchend', function () {
        $menu.removeClass('touching');
    });
    $('.visual_detail .slider_wrapper').on('mousedown touchstart', function () {
        $(this).parent().siblings().css('opacity', '0');
    });
    $('.visual_detail .slider_wrapper').on('mouseup touchend', function () {
        $(this).parent().siblings().css('opacity', '1');
    });

    $('.font_size').on('click', function () {
        $(this).toggleClass('short');
    });

    $('.btn_play').on('click', function () {
        $play.addClass('open')
    });

    $('.quitPlay').on('click', function () {
        $play.removeClass('open');
        $phone.removeClass('audioMode');
        $play.removeClass('off');
    })

    $('.pop_close').on('click', function () {
        $(this).closest('[class^=fullModal]').removeClass('open');
        // console.log($(this).parent());

    });

    $('.pop_open').on('click', function () {
        var target = $(this).attr('href');
        var targetLayer = $(target).addClass('open');
        $menu.removeClass('show');
    });

    $('header').on('click', function () {
        $('#contentsList').addClass('open');
    });


});