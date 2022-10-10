// path module

const path=require('path')

console.log(path.sep) //which separator

//filepath

const filepath=path.join('NODEBASICS','content','subfolder','demo')

console.log(filepath)

//base file name

const base=path.basename(filepath)

console.log(base)

//full file path

const absolute=path.resolve(__dirname,'NODEBASICS','content','subfolder','demo')

console.log(absolute);

//file system read filesync

const fs=require('fs')

const data1=fs.readFileSync('./zzz.txt',"utf8")

console.log(data1)

// write file sync
//const someone="vijay"

fs.writeFileSync('./write.txt','Iam trying to write a new file using node:')

//callback

const{readFile,writeFile}=require('fs')

readFile('./zzz.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err)
        return
    }
    else{
        console.log(result)
    }
})



