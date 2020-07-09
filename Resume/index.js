const http=require('http');
const port=1000;
const fs=require('fs');
function requestHandler(request,result){

    console.log(request.url);
    result.writeHead(200,{'content-type':'text/html'});
    let filePath;
    switch(request.url){
        case '/profile':
            filePath='./index.html';
            break;
       
        
        
    }
    fs.readFile(filePath,function(err,data){
        if(err){
            console.log('error',err);
            return result.end('<h1>Error!</h1>');
        }
        else{
            return result.end(data);
        }
    });

}

const server=http.createServer(requestHandler);
server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('Server is running on this port number:',port);
    }
});
