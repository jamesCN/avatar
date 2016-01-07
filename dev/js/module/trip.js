
/*************************************************

Version:
Create: 06-01-05
Update: 
Description: 个人履历页
Reference: 
Author: James.Yu

*************************************************/


function ModTrip() {

    this.initialize();
    return this;
    
};

ModTrip.prototype = {

    container: null,
    tmpl: "tplPageTrip",

    initialize: function() {        
        this.container = $("#app");
    },

    bindEvent: function() {},

    display: function() {

        var dataHTML = tmpl(this.tmpl, {});
        this.container.html(dataHTML);
        this.bindEvent();

        // Render compents header.
        var options = {"title": "关于我",
        "container": "#header"};
        new Header(options).display();

        // Render Me
        new Me().display();
        // Render Trip
        new Trip().display();

    }
}
