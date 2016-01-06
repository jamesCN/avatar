/*************************************************

Version:
Create: 06-01-06
Update: 
Description: 尾部组件for Page.
Reference: 
Author: James.Yu

*************************************************/

function Footer(options) {
        
    $.extend(this, options);    
    this.initialize();
    return this;
    
};

Footer.prototype = {

    container: "",
    tmpl: "tplComFooter",

    initialize: function() {

        this.container = $(this.container);
        
    },

    display: function() {

        var dataObject = {
            "website": this.website,
            "mail": this.mail,
            "company": this.company,
            "timespan": this.timespan
        }
        var dataHTML = tmpl(this.tmpl, dataObject);
        
        this.container.html(dataHTML);
    }
}
