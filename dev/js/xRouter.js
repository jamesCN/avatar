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

    moduleMap: {
        "index": new Index(),
        "article": new Article(),
        "detail": new Detail()
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

        var hash = window.location.hash;
        console.log("DEBUG::xRouter.js::url:", hash);
        
        if(!hash) {
            console.log("Debug::request default page.");
            new Index().display();
        }

        window.onhashchange = function(){
            
            var hash = window.location.hash;
            console.log("DEBUG::url", hash);
            console.log("DEBUG::urlMap", that.moduleMap);

            var hashParser = new HashParser(hash);
            var moduleName = hashParser.getModule();

            var module = that.moduleMap[moduleName];

            if(!module) console.log("warn::couldn't find module!");
            console.log("module", module);
            
            module.display();

        }
    }
}
