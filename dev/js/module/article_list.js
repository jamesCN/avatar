
/*************************************************

Version:
Create: 06-01-05
Update: 
Description: 首页-文章列表
Reference: 
Author: James.Yu

*************************************************/

function ArticleList(options) {
        
    $.extend(this, options);    
    this.initialize();
    return this;
    
};

ArticleList.prototype = {

    url: "mock/default.json",
    container: "#article",
    tmpl: "tplArticleList",

    initialize: function() {        
        this.container = $(this.container);
    },

    display: function() {

        var that = this;

        $.ajax({
                url: this.url,
                context: "#article"
            }
        )
        .done(function(data, textStatus, jqXHR) {

            if(data.code!=0) return false;

            var dataObject = {
                articles: data.data
            };

            var dataHTML = tmpl(that.tmpl, dataObject);
            that.container.html(dataHTML);
            
            console.log("ToRe::context::",$(this));

        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        });
    }
}
