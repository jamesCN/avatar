
/*************************************************

Version:
Create: 06-01-05
Update: 
Description: 首页
Reference: 
Author: James.Yu

*************************************************/


function ModDetail(options) {

    this.initialize();

    return this;
};

ModDetail.prototype = {

    container: null,
    tmpl: "tplPageDetail",

    initialize: function() {        
        this.container = $("#app");
    },

    display: function() {

        var dataHTML = tmpl(this.tmpl, {});
        this.container.html(dataHTML);

        // Render compents header.
        var options = {"title": "文章列表", "backType": 1,
        "container": "#header"};
        new Header(options).display();

        var options = {"url": "mock/article-detail.json", 
        "container": "#detail"};
        new ArticleDetail(options).display();
        
    }
}
