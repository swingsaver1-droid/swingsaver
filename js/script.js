$(document).ready(function(){
    var sTop = $(document).scrollTop();
    if(sTop >= 1){
        $(".header").addClass("on");
    }
    $(window).scroll(function(){
        var sTop = $(document).scrollTop();

        if(sTop >= 1){
            $(".header").addClass("on");
        } else{
            $(".header").removeClass("on");
        }
    });

    $('.header .btn-menu').click(function(){
        $('.header .gnb').addClass('on');
        $('.header').append('<div class="dim"></div>');
        bodyHidden();
    });

    $('.header .gnb .btn-close').click(function(){
        $('.header .gnb').removeClass('on');
        $('.header .dim').remove();
        bodyAuto();
    });

    var mainBanner = new Swiper('.main-banner', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: true,
        // autoplay: {
        //     delay: 3000,
        // },
        pagination: {
            el: '.main-banner .swiper-pagination',
            clickable: true
        },
        breakpoints:{
            1332:{
                pagination: {
                    el: '.main-banner .swiper-pagination',
                    clickable: true,
                    type: "bullets", 
                },
            },
        }
    });

    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth < 1332 || windowWidth > 1332){
            $('.header .gnb').removeClass('on');
            $('.header .dim').remove();
            bodyAuto();
        }
    });

    
    // 다국어 전환 스크립트
    const langLinks = document.querySelectorAll('.lang [data-lang]');
    const match = location.pathname.match(/\/html\/(ko|en|ja)\//);
    const currentLang = match ? match[1] : 'ko';
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // a 기본 이동 막기
        
            const targetLang = link.getAttribute('data-lang');
            const targetPath = `/swingsaver/html/${targetLang}/${currentPage}`;
        
            fetch(targetPath, { method: 'HEAD' }).then(res => {
                if (res.ok) {
                    location.href = targetPath;
                } else {
                    location.href = `/swingsaver/html/${targetLang}/index.html`;
                }
            });
        });
    });


    
});

