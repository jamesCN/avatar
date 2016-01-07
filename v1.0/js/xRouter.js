/**
 * Parse all hash parameters and provide the accessor of parameter
 * 
 * @author James.Yu <x.james.yu@gmail.com>
 * @update 2015-11-04
 */



function AvataJS(){

    this.initialize();

}

AvataJS.prototype = {

    content: null,

    modulePage: null,

    initialize: function(){

        this.content = $("#app");

        this.initializeMain();

        this.thisChangeHash();

    },

    initializeMain: function(){
        console.log("initialized");
    },


    thisChangeHash: function(){

        var self = this;

        window.onhashchange = function(){
            
            var url = window.location.hash;

            console.log("onhashchange", url);

        }
    }
}
