/* main.js */
$(document).ready(function(){
    // 윈도우 시작하면 화면 맨 위로 이동
    $("body,html").stop().animate({"scrollTop":0},1500,"swing");

    // 브라우저의 높이값을 div의 높이값으로
    var ht = $(window).height();
    $("#container > div").height(ht);

    $(window).resize(function(){
        var ht = $(window).height();
        $("#container > div").height(ht);
    });

    var start = setTimeout(function(){
        $("#content1 > section").addClass("on");
    },500);

    $(window).scroll(function(){
        var scroll = $(this).scrollTop(); // 현재 scroll
        var ht = $(window).height();

        // content1
        if(scroll >= 0*ht && scroll < 1*ht){
            // 내용물 움직임 시작
            $("#content1 > section").addClass("on");
        }else{
            // 움직임 취소
            $("#content1 > section").removeClass("on");
        }


        // content2
        if(scroll >= 1*ht && scroll < 2*ht){
            // 내용물 움직임 시작
            $("#content2 > section").addClass("on");
        }else{
            // 움직임 취소
            $("#content2 > section").removeClass("on");
        }


        // content3
        if(scroll >= 2*ht && scroll < 3*ht){
            // 내용물 움직임 시작
            $("#content3 > section").addClass("on");
        }else{
            // 움직임 취소
            $("#content3 > section").removeClass("on");
        }


        // content4
        if(scroll >= 3*ht && scroll < 4*ht){
            // 내용물 움직임 시작
            $("#content4 > section").addClass("on");
        }else{
            // 움직임 취소
            $("#content4 > section").removeClass("on");
        }


        // content5
        if(scroll >= 4*ht && scroll < 5*ht){
            // 내용물 움직임 시작
            $("#content5 > section").addClass("on");
        }else{
            // 움직임 취소
            $("#content5 > section").removeClass("on");
        }


        // content6
        if(scroll >= 5*ht && scroll < 6*ht){
            // 내용물 움직임 시작
            $("#content6 > section").addClass("on");
        }else{
            // 움직임 취소
            $("#content6 > section").removeClass("on");
        }


        // content7
        if(scroll >= 6*ht && scroll < 7*ht){
            // 내용물 움직임 시작
            $("#content7 > section").addClass("on");
        }else{
            // 움직임 취소
            $("#content7 > section").removeClass("on");
        }


        // content8
        if(scroll >= 7*ht && scroll < 8*ht){
            // 내용물 움직임 시작
            $("#content8 > section").addClass("on");
        }else{
            // 움직임 취소
            $("#content8 > section").removeClass("on");
        }


        // content9
        if(scroll >= 8*ht && scroll < 9*ht){
            // 내용물 움직임 시작
            $("#content9 > section").addClass("on");
        }else{
            // 움직임 취소
            $("#content9 > section").removeClass("on");
        }


        // content10
        if(scroll >= 9*ht && scroll < 10*ht){
            // 내용물 움직임 시작
            $("#content10 > section").addClass("on");
        }else{
            // 움직임 취소
            $("#content10 > section").removeClass("on");
        }


        // content11
        if(scroll >= 10*ht && scroll < 11*ht){
            // 내용물 움직임 시작
            $("#content11 > section").addClass("on");
        }else{
            // 움직임 취소
            $("#content11 > section").removeClass("on");
        }
   
    }); // scroll

});