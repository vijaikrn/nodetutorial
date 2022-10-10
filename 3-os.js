const os=require('os')   //built in modules - os

//info about user

console.log(os.userInfo())

//returns the system uptime in seconds

console.log(os.uptime())

//object

const osdetails={
    name:os.type(),
    freememory:os.freemem(),
    tmemory:os.totalmem(),
    releasedate:os.release()
}

console.log(osdetails)