const http=require('http')

const server=http.createServer(function(req,res)
{
   if(req.url==='/'){
    res.end("welcome to our home page")
   }
   if(req.url==='/about')
   {
    res.end("we are a growing firm with branches all over kerala")
   }
   res.end("oops the pag e you selected cannot be found", <a href="/"></a>)
   
})

server.listen(5000)


