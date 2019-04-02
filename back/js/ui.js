$(document).ready(function() {

    // portfolio list hover effect
    if ($(window).width() < 1025){
        //console.log(1)
        $('.pfList li').css('cursor','pointer');
        $('.pfList li').on('click', function(){
            $(this).find('.pfContWrap').css({
                top:'0',
                opacity:'1'
            });
            $(this).find('.pfContWrap').siblings('.popWrap')
            .css({
                display: 'block',
                zIndex: '100'
            })
            .stop().animate({ opacity: '1' }, 400);
        })
    } else {
        $('.pfList li').on('mouseenter', function() {
            $(this).find('.pfContWrap').stop().animate({
                top: '0',
                opacity: '1'
            }, 400)
        }).on('mouseleave', function() {
            $(this).find('.pfContWrap').stop().animate({
                top: '100%',
                opacity: '0'
            }, 200)
        });
    }

    // pop open
    $('.viewDetail').on('click', function() {
        $(this).parents('.pfContWrap').siblings('.popWrap')
            .css({
                display: 'block',
                zIndex: '100'
            })
            .stop().animate({ opacity: '1' }, 400);
    });

    // pop close
    $('.popClose').on('click', function() {
        //console.log(1);
        $('.popWrap').animate({ opacity: '0' }, 400, function() {
            $('.popWrap').css('display', 'none')
        });
        $(this).parents('.pfList li').find('.pfContWrap').stop().animate({
                top: '100%',
                opacity: '0'
            }, 200)
    });

    // resume download
    $('.resumeDw').on('click', function() {
        // window.open("/download/resume_yijisun.pdf")
        alert('준비중입니다')
    });

    // go to top
    $(document).on('click', '.goTopWrap', function() {
        $.fn.fullpage.moveTo('page1');
    });
});
