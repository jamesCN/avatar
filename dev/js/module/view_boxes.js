
/*************************************************

Version:
Create: 06-01-05
Update: 
Description: 旅图页
Reference: 
Author: James.Yu

*************************************************/


function Boxes(options) {
        
    $.extend(this, options);    
    this.initialize();
    return this;
    
};

Boxes.prototype = {

    url: "mock/view-boxes.json",
    container: "#content",
    tmpl: "tplViewBoxes",

    initialize: function() {        
        this.container = $(this.container);
    },

    display: function() {

        var that = this;

        $.ajax({url: this.url})
        .done(function(data, textStatus, jqXHR) {

            if(data.code!=0) return false;

            var dataObject = {
                boxes: data.data
            };

            var dataHTML = tmpl(that.tmpl, dataObject);
            that.container.html(dataHTML);
            
            that.preLoadImages();
            
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        });
    },

    preLoadImages: function() {
        var that = this;
        var imgdefereds=[];
        $('img').each(function(){
            var dfd=$.Deferred();
            $(this).bind('load',function(){
                dfd.resolve();
            }).bind('error',function(){
                //图片加载错误，加入错误处理 dfd.resolve();
            });
            if(this.complete) setTimeout(function(){
                dfd.resolve();
            },1000);
            imgdefereds.push(dfd);
        });

        $.when.apply(null,imgdefereds).done(function(){
            that.firedFlow();
        });
    },
    
    firedFlow: function() {
        var box = $(".box");
        var boxWidth = box.eq(0).width();
        var num = Math.floor($(window).width()/boxWidth);
        console.log("window's with:", $(window).width());
        var boxArr = [];
        box.each(function(index, el) {
            console.log("boxArr:", $(window).width());
            var boxHeight = box.eq(index).height();
            if(index < num) {
                boxArr[index] = boxHeight+2;
            } else {
                var minBoxHeight = Math.min.apply(null, boxArr);
                var minBoxIndex = $.inArray(minBoxHeight, boxArr);
                $(el).css({
                    "position": "absolute",
                    "top": minBoxHeight,
                    "left": box.eq(minBoxIndex).position().left
                });
                boxArr[minBoxIndex] += box.eq(index).height()+2;
            }
        });
    }
}

