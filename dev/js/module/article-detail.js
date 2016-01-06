
/*************************************************

Version:
Create: 06-01-05
Update: 
Description: 首页-文章列表
Reference: 
Author: James.Yu

*************************************************/

function ArticleDetail(options) {
        
    $.extend(this, options);    
    this.initialize();
    return this;
    
};

ArticleDetail.prototype = {

    url: "mock/default.json",
    container: "#article-detail",
    tmpl: "tplArticleDetail",

    initialize: function() {        
        this.container = $(this.container);
    },

    display: function() {

        var that = this;

        $.ajax({url: this.url})
        .done(function(data, textStatus, jqXHR) {

            if(data.code!=0) return false;

            var dataObject = {
                article: data.data
            };

            var dataHTML = tmpl(that.tmpl, dataObject);
            that.container.html(dataHTML);

        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        });
        
    }
}
