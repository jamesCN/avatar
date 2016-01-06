
/*************************************************

Version:
Create: 06-05-15
Update: 
Description: 首页
Reference: 
    fn:loadSkuDetail
    tpl:tplArticleList
Author: James.Yu

*************************************************/


function Index() {
    this.initialize();
};

Index.prototype = {

    _container: null,
    _data: null,
    _tmpl: null,

    initialize: function() {        
        this._container = $("#app");
    },

    _initData: function() {},

    _bindEvent: function() {
        $(".canBack").click(function(){
            window.history.back(-1);
        }); 
    },

    display: function() {

        var dataObject = {};  

        var dataHTML = tmpl("tplIndex", dataObject);

        this._container.html(dataHTML);

        this._bindEvent();
    }
}
