const http = require("http")


const webServer = (req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("hello")
}

http.createServer(webServer).listen(3000)