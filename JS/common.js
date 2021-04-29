// duplicate('wrap3', 'card-list', 15)

function duplicate(a, b, c) {
    var object = document.getElementById(a);
    var target = document.getElementById(b);
    for (let i = 0; i < c; i++) {
        var cln = target.cloneNode(true);
        object.appendChild(cln);
    }
}

function toggleMenu() {
    event.preventDefault();
    nav.classList.toggle('open');
}


var browser_h = $(window).height();
function openPopup(id){
    $(".popup_wrap").addClass("show");
    $(id).addClass("show");
    $("html, body").css("overflow", "hidden");
}

function closePopup(){
    $(".popup_wrap, .popup_window").removeClass("show");
    $("html, body").css("overflow", "visible");
}

/*hovering nav sub*/
$(window).on("resize", function(){
    relocateHvr();
});
function relocateHvr(){
    if($(".nav-sub .nav-item.on")[0]){
        var item = $(".nav-sub .nav-item.on")[0];
        $(".hvr").css({left:item.offsetLeft, width:item.clientWidth});
    }
}
$(document).ready(function(){
    setTimeout(function(){
        relocateHvr();
    },100);


    $('.btn_menu').on('click', function () {
        $('.btn_menu').toggleClass('moves');
    });

    $('.btn_menu').on('click', function () {
        var sub_height = $(".menu_center-m").outerHeight() + "px";

        $(".menu_center-m li").removeClass("on");
        $(".btn_menu_on").toggle();
        $(".menu_center-m li > .menu_2dp_boby").toggle(false);
        $(".menu_center-m li > .menu_2dp_boby").find('.menu_3dp').toggle(false);

        $('.menu_center-m').toggle(0, function () {
            $(this).toggleClass('moves');
        });
    });

    // 1depth 클릭시
    $(".menu_center-m .menu_name").click(function (e) {

        if ($(this).closest('li').find(".menu_2dp_boby").is(":hidden")) {

            $(".menu_center-m li").removeClass("on");
            $(this).closest('li').toggleClass("on");
            $(".menu_center-m li > .menu_2dp_boby").toggle(false);
            $(this).closest('li').find(".menu_2dp_boby").slideToggle();
        } else {
            $(".menu_center-m li").removeClass("on");
            $(this).closest('li').find(".menu_2dp_boby").slideToggle();
        }
    });

    //사이즈 수정될때마다 메뉴 모두 초기화
    $(window).resize(function () {
        closeMenu();
    });

    var topPosition = parseInt($("#menu-quick").css('top'));
    var widthPosition = parseInt($("#menu-quick").css('width'));

    var windowWidth = $( window ).width();

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        var newPosition = scrollTop + topPosition + "px";

        $("#menu-quick").stop().animate({
            "top": newPosition
        }, 500);

    }).scroll();



});

function closeMenu(){
    $('.btn_menu').removeClass('moves');
    $(".btn_menu_on").toggle(false);
    $('.menu_center-m').removeClass('moves');
    $('.menu_center-m').hide();
    $(".menu_center-m li").removeClass("on");
    $(".menu_center-m li > .menu_2dp_boby").toggle(false);
    $(".menu_center-m li > .menu_2dp_boby").find('.menu_3dp').toggle(false);
}

$(".nav-sub .nav-item").on("mouseover", function(e){
    $(this).addClass("hovering");
});
$(".nav-sub .nav-item").on("mouseout", function(e){
    $(this).removeClass("hovering");
    relocateHvr();
});
$(".nav-sub").on("mouseover", function(e){
    if($(".hovering")[0]){
        $(".hvr").css({left:$(".hovering")[0].offsetLeft, width:$(".hovering")[0].clientWidth});
    }
});

//전화번호 자동포커스
$(function() {
    $(".type_tel").keyup (function () {
        var charLimit = $(this).attr("maxlength");
        if (this.value.length >= charLimit) {
            $(this).next('.type_tel').focus();
            return false;
        }
    });
    //숫자만
    $(".it_num").keyup(function(event){
        var str;

        if(event.keyCode != 8){
            if (!(event.keyCode >=37 && event.keyCode<=40)) {
                var inputVal = $(this).val();

                str = inputVal.replace(/[^-0-9]/gi,'');

                if(str.lastIndexOf("-")>0){ //중간에 -가 있다면 replace
                    if(str.indexOf("-")==0){ //음수라면 replace 후 - 붙여준다.
                        str = "-"+str.replace(/[-]/gi,'');
                    }else{
                        str = str.replace(/[-]/gi,'');
                    }

                }

                $(this).val(str);

            }
        }
    });
});

// file
$(".file-input .file-browse, .file-input .btn_file").on("click", function(){
    $(this).siblings("input[type=file]").trigger("click");
});

$(".file-input input[type=file]").on("change", function(e){
    $(this).siblings(".file-name").val( getFileName(this.value) );
});

function getFileName(url){
    var startIndex = (url.indexOf('\\') >= 0 ? url.lastIndexOf('\\') : url.lastIndexOf('/'));
    var filename = url.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
    }
    return filename;
}
$("#top_btn").on("click", function() {
    $("html, body").animate({scrollTop:0}, '500');
    return false;
});

$(".nav-sub-wrap").on("click", function(){
    $(this).toggleClass("expanded");
});

$(".nav-sub .nav-item").on("click", function(){
    $(".nav-sub .nav-item").removeClass("on");
    $(this).addClass("on");
});

/*button hover*/
// $("button").on("mouseenter", function(){
//     var hvr = document.createElement("div");
//     hvr.classList.add("btn_hvr");
//     $(this).append(hvr);
// });
//
// $("button").on("mouseout", function(){
//     $(this).find(".btn_hvr").remove();
// });

// $(document).on("mousemove", function(e){
//     // console.log("clientX=>" + e.clientX + ":" +e.clientY);
//     // console.log("pageX=>" + e.pageX + ":" +e.pageY);
//     console.log("screenX=>" + e.screenX + ":" +e.screenY);
//
// });