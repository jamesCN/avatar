var PORT = 8080;

var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");

var mime = require("./mime").types;

var envs = require("./env").envs;

var server = http.createServer(function(request, response) {


    var query = url.parse(request.url).query;
    console.log("log::query::", query);

    var env = (query!=null) ? query : "dev";
    console.log("log::0_env::", env);

    var envPath = envs[env];
    console.log("log::0_envPath::", envPath);


    var pathname = url.parse(request.url).pathname;
    // 处理Domain访问
    (pathname == "/") ? pathname+="index.html": "";

    // 获取访问URL
    var realPath = envPath + pathname;
    console.log("log::1_realPath::", realPath);

    // 获取资源扩展名
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : "unknown";
    console.log("log::2_extname::", ext);

    // 获取资源类型
    var contentType = mime[ext] || "text/plain";
    console.log("log::3_contentType::", contentType);

    fs.exists(realPath, function (exists) {

        if (!exists) {

            response.writeHead(404, {"Content-Type": "text/plain"});

            response.write("This request URL " + pathname + " was not found on this server.");

            response.end();

        } else {

            fs.readFile(realPath, "binary", function(err, data) {

                console.log("wow::brower is multithreading!");

                if (err) {

                    console.log("err::", err);

                    response.writeHead(500, {"Content-Type": "text/plain"});

                    response.end(err.code);

                } else {

                    response.writeHead(200, {"Content-Type": contentType});

                    response.write(data, "binary");

                    response.end();

                }
             });

          }

      });

});

server.listen(PORT);

console.log("Server runing at port: " + PORT + ".");