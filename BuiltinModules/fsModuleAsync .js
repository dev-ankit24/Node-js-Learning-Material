        // fs Module : used to perform operation regarding file handling file handling /file Input Output Operations
            // 1. Creating a new file or folder
            // 2. Writting  data into a file.
            // 3. Appending data into a file 
            // 4. Rename a file
            // 5. Delete a file
            // 6. Delete a folder

   
            // fs.mkdirSync() : used to create a folder in sync mode  if folder  already exist it thorw an exception.
        const  fs=require('fs')

        // fs.mkdir("text",(error)=>{
        //         if(error && error.code==="ENOENT")
        //                 console.log("Invailid Message");
        //         else if(error){
        //                 console.log("file is aready");
        //         }
        //         else
        //           console.log("Create Folder");
        // })


        // fs.rmdirSync() : used to delete a folder in sync mode  if folder  already exist it thorw an exception.

        //  fs.rmdir("text",(error)=>{
        //         if(error){
        //                 console.log("Path is innalid");
        //         }
        //         else 
        //          console.log("file is delete");
        //  })
        // writeFileSync() : used to create  a new file if file doen't exist, file  already exist it delete all content of file and re-write data into it .
        //  fs.writeFile("test/sample.txt","hello Async" ,(error)=>{
        //         if(error){
        //                 console.log("Path Invalid");
        //         }
        //         else{
        //                 fs.writeFile("test/sample.txt", "hello,5\n" , (error)=>{})
        //                 fs.writeFile("test/sample.txt", "hello,7\n" , (error)=>{})
        //                 fs.writeFile("test/sample.txt", "hello,8\n" , (error)=>{})
        //                 fs.writeFile("test/sample.txt", "hello,9\n" , (error)=>{})
        //                 fs.writeFile("test/sample.txt", "hello,1\n" , (error)=>{})
        //                 console.log(" Done write file");
        //         }
        //  })
        // fs.appendFileSync() : used to create  a new file if file doen't exist, file  already exist it write data after old data.
        // fs.appendFile("test/sample.txt", "helloworld",(error)=>{
        //         if (error) 
        //            console.log("Path Invailid");
        //         else{
        //                 fs.appendFile("test/sample.txt","append file 1\n",(error)=>{})
        //                 fs.appendFile("test/sample.txt","append file 2\n",(error)=>{})
        //                 fs.appendFile("test/sample.txt","append file 3\n",(error)=>{})
        //                 fs.appendFile("test/sample.txt","append file 4\n",(error)=>{})
        //                 console.log("Append done");
        //         }
        // })

        // fs.readFileSync(): read a file and data if we not any encoding then data id return id buffer format to encode use 'utf-8' thorw execption if file dono't exist or invailid path.
        //  fs.readFile("test/sample.txt","utf-8",(error,data)=>{
        //         if(error)
        //                 console.log("Invailid path");
        //         else
        //                 console.log(data);
        //  })


        // fs.renameSync(): used the rename the file 
         fs.rename("test/sample1.txt","test/example.txt",(error)=>{
                if(error)
                        console.log("Path invailid");
                else
                console.log("File Name has been Changed");
         })


        // fs.unlinkSync(): used the DELETE file.
          fs.unlink("test/example.txt",(error)=>{
                if(error)
                        console.log("In vaildid Path");
                else 
                console.log("file Deleted");
          })

        