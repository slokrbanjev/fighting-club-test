$(document).ready(function(){$(".main-menu").meanmenu({meanScreenWidth:600}),$(".main-menu a, .smooth-link, .mean-nav a").click(function(){var e=$(this).attr("href");return $("body, html").animate({scrollTop:$(e).offset().top},600),!1}),"0s"!==$(".glove").css("transitionDuration")&&$(document).on("scroll",function(){$(this).scrollTop()>100?$(".glove").addClass("punch"):$(".glove").removeClass("punch")}),"none"!==$(".day-toggle").css("display")&&$(".day_header").click(function(){$(".slots",$(this).closest(".day")).slideToggle(),"⬇︎"===$(".day-toggle",$(this).closest(".day")).text()?$(".day-toggle",$(this).closest(".day")).text("⬆︎"):$(".day-toggle",$(this).closest(".day")).text("⬇︎")}),$(".gallery").slippry({transition:"kenburns",easing:"linear",speed:2e3,pause:6e3,kenZoom:120,autoHover:!1})});