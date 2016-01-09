var env = "test";

var count = {};

exports.count = function(name){
    if(count[name]){
        count[name]++;
    }else{
        count[name] = 1;
    }
    console.log(name + ' requested ' + count[name] + ' times!');
};

exports.getEnv = function() {
    return env;
}

exports.setEnv = function(envStr) {
    env = envStr
}