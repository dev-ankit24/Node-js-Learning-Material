const  os= require("os")

// os.totalmem(): return total memory in ram
console.log("total memory:", os.totalmem()/1024/1024/1024, "GB");

// os.freemem(): return total free memory in ram
console.log("free memory :", os.freemem()/1024/1024/1024,"GB");


// os.freemem(): return total free memory in ram
console.log("home directory:",os.homedir());

// os.plateform(): return  window plateform
console.log("Window Plateform:",os.platform());

// os.arch(): return Architecture in os
console.log("OS Architecture:",os.arch());

// return time  window on
console.log("computer in since:",os.uptime()/60,"Min");

// return user information
console.log("user information:",os.userInfo());

//return os version
console.log("os version:",os.version());

//return about processser information
console.log("information processer", os.cpus());

//return os  realese version
console.log("os realese version ",os.release());

//return os  version type
console.log("os type",os.type());
