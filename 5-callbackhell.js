const x=require('fs') //fs module calling

x.readFile('./write.txt' ,'utf-8', function(err,result)
{
    if(err)
    {console.log(err);
    return }
   
        const first=result;
    

    x.readFile('./zzz.txt','utf-8',function(err,result){
if(err){console.log(err)
return}

    const second=result

   x.writeFile('.newtext.txt',`here is the result ${first},${second} `,function(err,result){
    if(err){console.log(err)
        return}
   })
 })
})