// Anchor Perfect Target 
$(".menu-items li a").bind("click", function(t) {
    var e = $(this);
    $("html, body")
        .stop()
        .animate({ scrollTop: $(e.attr("href")).offset().top - "350" + "%" }),
        t.preventDefault();
});

// Animated Guest Form Popup
$(document).ready(function() {
    $(".sign-btn a").click(function() {
        $(".guest-open").addClass("guest-visible");
        $("main").addClass("content-blur");
    });

    $(".guest-close-btn button").click(function() {
        $(".guest-open").removeClass("guest-visible");
        $("main").removeClass("content-blur");
    });

    $(".want-btn a").click(function() {
        $(".party-open").addClass("party-visible");
        $("main").addClass("content-blur");
    });

    $(".party-close-btn button").click(function() {
        $(".party-open").removeClass("party-visible");
        $("main").removeClass("content-blur");
    });
});

$(document).ready(function() {
    // Preloader Effect
    var preLoaderAnimate = gsap.timeline();

    preLoaderAnimate.set("main, footer", {
            duration: 1,
            autoAlpha: 0,
        }),
        preLoaderAnimate.from("#loading", {
            duration: 1.5,
            width: 0,
            delay: 0.2,
        }),
        preLoaderAnimate.to("#loading", {
            x: "100%",
        }),
        preLoaderAnimate.to("#loading", {
            autoAlpha: 0,
        }),
        preLoaderAnimate.to(
            "main, footer", {
                duration: 0.6,
                autoAlpha: 1,
            },
            "-=0.2"
        ),
        preLoaderAnimate.from(".header-area", {
            duration: 1,
            autoAlpha: 0,
        });
});

$(document).ready(function() {
    // Banner Image Change Effect
    var imageFlicker = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
    });

    imageFlicker.to(".hero-image1", {
            opacity: 0,
            duration: 0,
            ease: "none",
            delay: 1,
        }),
        imageFlicker.to(".hero-image2", {
            opacity: 0,
            duration: 0,
            ease: "none",
            delay: 1,
        }),
        imageFlicker.to(".hero-image3", {
            opacity: 0,
            duration: 0,
            ease: "none",
            delay: 1,
        }),
        imageFlicker.to(".hero-image4", {
            opacity: 0,
            duration: 0,
            ease: "none",
            delay: 1,
        }),
        imageFlicker.to(".hero-image5", {
            opacity: 0,
            duration: 0,
            ease: "none",
            delay: 1,
        }),
        imageFlicker.to(".hero-image6", {
            opacity: 0,
            duration: 0,
            ease: "none",
            delay: 1,
        });

    // Menu Animations
    var toggleMenu = document.querySelector(".menu-btn");
    var menuArea = document.querySelector(".menu-list-area");

    // Menu Fade In
    var fadeInMenu = gsap.timeline({ paused: true });

    fadeInMenu.to(".menu-list-area", {
            duration: 0.3,
            visibility: 'visible',
            y: "10%",
            autoAlpha: 0.97,
        }),
        fadeInMenu.to(".menu-items", {
            display: "block",
        }),
        fadeInMenu.from(
            ".menu-items li a", {
                duration: 0.4,
                autoAlpha: 0,
                stagger: 0.1,
            },
            "-=0.5"
        );

    toggleMenu.onclick = function() {
        fadeInMenu.restart(true, false);
    };

    // Menu Fade Out
    var fadeOutMenu = gsap.timeline({ paused: true });

    fadeOutMenu.to(".menu-items li a", {
            duration: 0.5,
            autoAlpha: 0,
            stagger: {
                from: "end",
                each: 0.12,
            }
        }),
        fadeOutMenu.to(".menu-list-area", {
                duration: 0.9,
                y: "-20%",
                autoAlpha: 0,
                visibility: 'hidden',
            },
            "-=0.1"
        );

    $(".menu-close").click(function() {
        fadeOutMenu.restart(true, false);
    });


});

$(document).ready(function() {
    // All Artwork & Color Blocks Vertically Parallax
    var blocksParallax = gsap.timeline();

    blocksParallax.from(".guest-position", {
            scrollTrigger: {
                trigger: ".guest-position",
                start: "top 90%",
                end: "center 50%",
                toggleActions: "restart none none reverse",
                markers: false,
                scrub: 0.5,
            },
            y: "20%",
        }),
        blocksParallax.from(".orange-position", {
            scrollTrigger: {
                trigger: ".orange-position",
                start: "top 100%",
                end: "center 60%",
                markers: false,
                scrub: 0.5,
            },
            y: "30%",
        }),
        blocksParallax.from(".involved-position", {
            scrollTrigger: {
                trigger: ".involved-position",
                start: "top 80%",
                end: "40% 60%",
                markers: false,
                scrub: 0.5,
            },
            y: "30%",
        }),
        blocksParallax.from(".dj-position", {
            scrollTrigger: {
                trigger: ".dj-position",
                start: "top 90%",
                end: "40% 50%",
                markers: false,
                scrub: 0.5,
            },
            y: "30%",
        }),
        blocksParallax.from(".hire-position", {
            scrollTrigger: {
                trigger: ".hire-position",
                start: "-300px 95%",
                end: "40% 40%",
                markers: false,
                scrub: 0.5,
            },
            y: "25%",
        });

    // All Artwork & Color Blocks Vertically Parallax
    var aboutBlock = gsap.timeline();

    aboutBlock.from(".party-position", {
            scrollTrigger: {
                trigger: ".party-position",
                start: "top 80%",
                end: "center 50%",
                toggleActions: "restart none none reverse",
                markers: false,
                scrub: 0.5,
            },
            y: "20%",
        }),
        aboutBlock.from(".green-position", {
            scrollTrigger: {
                trigger: ".green-position",
                start: "top 100%",
                end: "center 60%",
                markers: false,
                scrub: 0.5,
            },
            y: "30%",
        }),
        aboutBlock.from(".social-position", {
            scrollTrigger: {
                trigger: ".social-position",
                start: "top 90%",
                end: "40% 60%",
                markers: false,
                scrub: 0.5,
            },
            y: "30%",
        });
});

$(document).ready(function() {
    // Guest Text Horizontally Parallax
    var guestText = gsap.timeline();

    guestText.to(".guest-content h2", {
        scrollTrigger: {
            trigger: ".guest-content h2",
            start: "top 80%",
            end: "300px 30%",
            markers: false,
            scrub: 2.5,
        },
        x: "-120%",
    });

    // Get Involved Text Fade In
    gsap.registerPlugin(ScrollTrigger);

    var involvedText1 = gsap.timeline();

    involvedText1.to(".same-involved h2", {
        opacity: 0,
        ease: "power2.inOut",
        stagger: {
            each: 0.08,
            from: "start",
            grid: "auto",
            ease: "power2.inOut",
            repeat: -1,
            repeatDelay: 0.08,
        }
    });

    // Hire Text Animate
    gsap.registerPlugin(ScrollTrigger);

    var hireText = gsap.timeline({
        scrollTrigger: {
            trigger: ".involved-content",
            start: "top 70%",
            end: "center top",
            toggleActions: "restart none none reverse",
            markers: false,
        },
    });

    hireText.from(".get-area h3", {
        duration: 0.8,
        autoAlpha: 0,
        stagger: 0.15,
        repeat: -1,
        repeatDelay: 2,
    });
});

$(document).ready(function() {
    // Party Text Horizontally Parallax
    var partyText = gsap.timeline();

    partyText.to(".party-content h2", {
        scrollTrigger: {
            trigger: ".party-content h2",
            start: "top 80%",
            end: "300px 5%",
            markers: false,
            scrub: 2.5,
        },
        x: "-150%",
    });

    // Social Lalaland Text Pulse effect
    gsap.registerPlugin(ScrollTrigger);

    var socialText = gsap.timeline({
        scrollTrigger: {
            trigger: ".social-titles",
            start: "top 70%",
            end: "center top",
            toggleActions: "play none none reverse",
            markers: false,
        },
    });

    socialText.from(".social-titles a", {
        duration: 2,
        autoAlpha: 0,
        stagger: {
            grid: [0, 3],
            from: "random",
            amount: 0.3,
        },
        repeat: -1,
    });
});

$(document).ready(function() {
    // Image Hover Movement Effect
    const hoverThis = document.querySelector(".guest-image-area");

    hoverThis.addEventListener("mousemove", mouseMoveAnim);

    function mouseMoveAnim(e) {
        var xPos = e.clientX / window.innerWidth - 0.5;
        var yPos = e.clientY / window.innerHeight - 0.5;

        gsap.to(".move-me", {
            duration: 0.1,
            x: -90 * xPos,
            y: -90 * yPos,
            ease: "power1.inOut",
            transformPerspective: 900,
            transformOrigin: "center",
        });
    }

    hoverThis.onmouseenter = function() {
        hoverThis.addEventListener("mousemove", mouseMoveAnim);
    };

    hoverThis.onmouseleave = function() {
        hoverThis.removeEventListener("mousemove", mouseMoveAnim);

        gsap.to(".move-me", { delay: 0.1, duration: 0.2, rotationY: 0, rotationX: 0, x: 0, y: 0, ease: "power1.inOut" });
    };
});

$(document).ready(function() {
    // Lalalnd Logo Horizontally Parallax
    var $tickerWrapper1 = $(".logo-cover");
    var $list1 = $tickerWrapper1.find("a");
    var $clonedList1 = $list1.clone();
    var listWidth1 = 30;
    $list1.find("svg").each(function(i) {
        listWidth1 += $(this, i).outerWidth(true);
    });

    var endPos = $tickerWrapper1.width() - listWidth1;

    $list1.add($clonedList1).css({
        width: listWidth1 + "px",
    });

    $clonedList1.addClass("cloned1").appendTo($tickerWrapper1);

    var infinite1 = new TimelineMax({ force3D: true, repeat: -1 });
    var time1 = 30;

    infinite1.fromTo($list1, time1, { x: 0 }, { x: -listWidth1, ease: Linear.easeNone }, 0);
    infinite1.fromTo($clonedList1, time1, { x: listWidth1 }, { x: 0, ease: Linear.easeNone }, 0);
    infinite1.set($list1, { x: listWidth1 });
    infinite1.to($clonedList1, time1, { x: -listWidth1, ease: Linear.easeNone }, time1);
    infinite1.to($list1, time1, { x: 0, ease: Linear.easeNone }, time1);
});

$(document).ready(function() {
    // About Title Horizontally Parallax
    var $tickerWrapper = $(".about-title-scroll");
    var $list = $tickerWrapper.find(".about-title-wrap");
    var $clonedList = $list.clone();
    var listWidth = 30;
    $list.find("h2").each(function(i) {
        listWidth += $(this, i).outerWidth(true);
    });

    var endPos1 = $tickerWrapper.width() - listWidth;

    $list.add($clonedList).css({
        width: listWidth + "px",
    });

    $clonedList.addClass("cloned2").appendTo($tickerWrapper);

    var infinite = new TimelineMax({ force3D: true, repeat: -1 });
    var time = 1200;

    infinite.fromTo($list, time, { x: 0 }, { x: -listWidth, ease: Linear.easeNone }, 0);
    infinite.fromTo($clonedList, time, { x: listWidth }, { x: 0, ease: Linear.easeNone }, 0);
    infinite.set($list, { x: listWidth });
    infinite.to($clonedList, time, { x: -listWidth, ease: Linear.easeNone }, time);
    infinite.to($list, time, { x: 0, ease: Linear.easeNone }, time);
});

$(document).ready(function() {
    // Enjoy Trip Horizontally Parallax
    var $tickerWrapper3 = $(".footer-title-scroll");
    var $list3 = $tickerWrapper3.find(".footer-title-wrap");
    var $clonedList3 = $list3.clone();
    var listWidth3 = 10;
    $list3.find("h2").each(function(i) {
        listWidth3 += $(this, i).outerWidth(true);
    });

    var endPos2 = $tickerWrapper3.width() - listWidth3;

    $list3.add($clonedList3).css({
        width: listWidth3 + "px",
    });

    $clonedList3.addClass("cloned3").appendTo($tickerWrapper3);

    var infinite3 = new TimelineMax({ force3D: true, repeat: -1 });
    var time3 = 1200;

    infinite3.fromTo($list3, time3, { x: 0 }, { x: -listWidth3, ease: Linear.easeNone }, 0);
    infinite3.fromTo($clonedList3, time3, { x: listWidth3 }, { x: 0, ease: Linear.easeNone }, 0);
    infinite3.set($list3, { x: listWidth3 });
    infinite3.to($clonedList3, time3, { x: -listWidth3, ease: Linear.easeNone }, time3);
    infinite3.to($list3, time3, { x: 0, ease: Linear.easeNone }, time3);
});