
/*************************************************

Version:
Create: 06-01-05
Update: 
Description: 首页
Reference: 
Author: James.Yu

*************************************************/


function Index(options) {

    this.initialize();

    return this;
};

Index.prototype = {

    _container: null,
    _tmpl: "tplPageIndex",

    initialize: function() {        
        this._container = $("#app");
    },

    _bindEvent: function() {
        // bind event for page index. 
    },

    display: function() {

        var dataHTML = tmpl(this._tmpl, {});
        this._container.html(dataHTML);

        var options = {"url": "mock/index-article-list.json", 
        "container": "#article-list"};
        new ArticleList(options).display();

        var options = {
            "website": "me.html5s.net",
            "mail": "x.james.yu@gmail.com",
            "company": "viewsoft",
            "timespan": "2015~2016",
            "container": "#contact"
        }  
        new Footer(options).display();

    }
}
