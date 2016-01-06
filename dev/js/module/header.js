/*************************************************

Version:
Create: 06-01-05
Update: 
Description: 头部组件for Page.
Reference: 
Author: James.Yu

*************************************************/

function Header(options) {
        
    $.extend(this, options);    
    this.initialize();
    return this;
    
};

Header.prototype = {

    container: "",
    tmpl: "tplComHeader",
    backType: 0, 
    backUrl: "/",
    goUrl: null,

    initialize: function() {

        this.container = $(this.container);
        
    },

    bindEvent: function() {

        var that = this;

        $(".back").click(function(){
            if(bakcType==1) {
                window.history.go(-1);
            } else {
                location.href = that.backUrl;    
            }
        });

        $(".link").click(function(){
            window.location.reload();
        });

    },

    display: function() {

        var dataObject = {
            "title": this.title
        }
        var dataHTML = tmpl(this.tmpl, dataObject);
        this.container.html(dataHTML);

        this.bindEvent();
    }
}
