
/*************************************************

Version:
Create: 06-01-05
Update: 
Description: 旅图页
Reference: 
Author: James.Yu

*************************************************/


function ModView() {

    this.initialize();
    return this;
    
};

ModView.prototype = {

    container: null,
    tmpl: "tplPageView",

    initialize: function() {        
        this.container = $("#app");
    },

    bindEvent: function() {},

    display: function() {

        var dataHTML = tmpl(this.tmpl, {});
        this.container.html(dataHTML);
        this.bindEvent();

        // Render compents header.
        var options = {"title": "旅图",
        "container": "#header"};
        new Header(options).display();

        new Boxes().display();

    }
}
