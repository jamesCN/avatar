/*************************************************

Version:
Create: 06-01-07
Update: 
Description: Parse all hash parameters and 
provide the accessor of parameter.
Reference: 
Author: James.Yu

*************************************************/

function AvataJS(options){

    $.extend(this, options); 
       
    this.initialize();

}

AvataJS.prototype = {

    src: "xRouter.js",

    content: null,

    modulePage: null,

    fired: false,

    initialize: function(){

        this.content = $("#app");     

        this.initializeMain();

        this.bindChangeHash();   

    },

    initializeMain: function(){

        console.log(this.src+"::INFO:xRouter initialized.");
        this.display();

    },

    renderModule: function() {
  
        var hash = window.location.hash;
        console.log(this.src+"::DEBUG::renderModule:hash:", hash);
        console.log(this.src+"::DEBUG::moduleMap:", this.moduleMap);

        var hashParser = new HashParser(hash);
        var moduleName = hashParser.getModule();

        var module = this.moduleMap[moduleName];

        if(!module) console.log(this.src+"::WARN:couldn't find module!");
        console.log(this.src+"::DEBUG::renderModule:module:", module);
        
        module.display();

    },

    bindChangeHash: function(){

        var that = this;

        window.onhashchange = function(){

            that.renderModule();

            that.fired = true;
            console.log(that.src+"::DEBUG::bindChangeHash:fired", that.fired);

        }
    },

    display: function () {

        var hash = window.location.hash;
     
        if(!hash) {
            console.log(this.src+"::DEBUG::display:request default page.");
            new ModIndex().display();
        }

        if(hash && !this.fired) {
            console.log(this.src+"::DEBUG::display:refresh hash:", hash);
            this.renderModule();
        }

    }
}
