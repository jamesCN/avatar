/**
 * Parse all hash parameters and provide the accessor of parameter
 * 
 * @author James.Yu <x.james.yu@gmail.com>
 * @create 2016-01-05
 */



function AvataJS(){

    this.initialize();

}

AvataJS.prototype = {

    content: null,

    modulePage: null,

    urlMap: {
        "#index": new Index(),
        "#article": new Article(),
        "#detail": new Detail()
    },

    initialize: function(){

        this.content = $("#app");

        this.initializeMain();

        this.thisChangeHash();

    },

    initializeMain: function(){
        console.log("DEBUG::xRouter initialized.");
    },


    thisChangeHash: function(){

        var that = this;

        var url = window.location.hash;
        console.log("DEBUG::xRouter.js::url:",url);
        
        if(!url) {
            console.log("Debug::request default page.");
            new Index().display();
        }

        window.onhashchange = function(){
            
            var url = window.location.hash;
            console.log("DEBUG::url", url);
            console.log("DEBUG::urlMap", that.urlMap);

            var module = that.urlMap[url];
            if(!module) console.log("warn::couldn't find module!");
            console.log("module", module);
            
            module.display();

        }
    }
}
