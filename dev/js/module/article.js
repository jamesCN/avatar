/*************************************************

Version:
Create: 06-01-05
Update: 
Description: 文章列表页
Reference: 
Author: James.Yu

*************************************************/


function ModArticle() {

    this.initialize();
    return this;
    
};

ModArticle.prototype = {

    container: null,
    tmpl: "tplPageArticle",

    initialize: function() {        
        this.container = $("#app");
    },

    bindEvent: function() {},

    display: function() {

        var dataHTML = tmpl(this.tmpl, {});
        this.container.html(dataHTML);
        this.bindEvent();

        // Render compents header.
        var options = {"title": "文章列表",
        "container": "#header"};
        new Header(options).display();

        // Render articleList
        var options = {"url": "mock/article-article-list.json", 
        "container": "#article"};
        new ArticleList(options).display();

        var options = {
            "website": "me.html5s.net",
            "mail": "x.james.yu@gmail.com",
            "company": "viewsoft",
            "timespan": "this.timespan",
            "container": "#contact"
        }  
        new Footer(options).display();

    }
}
