function HashParser(hash){

    this.hash = hash;
    this.initialize();
    this.parse();

    return this;
}

HashParser.prototype = {

    _contents: {},
    _modules: [],

    initialize: function(){
        this.parse();
    },

    parse: function(){
        if(this.hash != null){
            var pureHash = this.hash.substr(1);
            // mod_1/mod_1_1/mod_1_2?id=1&type=get
            var modules = pureHash.split('?');
            this._modules = modules[0].split('\/');

            var pairs = pureHash.split('&');
            for(var i = 0; i < pairs.length; i++){
                var pair = pairs[i];
                var parts = pair.split('=');
                if(parts.length>1){
                    this._contents[parts[0]] = parts[1];
                    this[parts[0]] = parts[1];
                }else{
                    this._contents[parts[0]] = true;
                    this[parts[0]] = true;
                }
            }
        }
    },

    get: function(key){
        if(this._contents[key])
            return this._contents[key];
        return null;
    },

    getModule: function(){
        return this._modules[0];
    }
};