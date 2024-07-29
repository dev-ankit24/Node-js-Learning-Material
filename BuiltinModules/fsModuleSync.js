        // fs Module : used to perform operation regarding file handling file handling /file Input Output Operations
            // 1. Creating a new file or folder
            // 2. Writting  data into a file.
            // 3. Appending data into a file 
            // 4. Rename a file
            // 5. Delete a file
            // 6. Delete a folder

        // fs.mkdirSync() : used to create a folder in sync mode  if folder  already exist it thorw an exception.
        const  fs=require('fs')
const { log } = require('util')

        //   try {
        //     fs.mkdirSync("test")
        //   console.log("Folder is Created ");
        //   } catch (error) {
        //     console.log("File is alredy Exist");
        //   }

        // path in valid dene pr
        // try {
        //         fs.mkdirSync(".samo/test")
        //       console.log("Folder is Created ");
        //       } catch (error) {    
        //     if(error.code==="ENOENT")
        //         console.log("Path is inVailid");
        //     else
        //         console.log(("File is alredy Exist"));
        //       }

        // fs.rmdirSync() : used to delete a folder in sync mode  if folder  already exist it thorw an exception.

        // try {
        //     fs.rmdirSync("teyt")
        //     console.log("Deleted successfully");
        // } catch (error) {
        //     console.log("path is invailid");
        // }

        // writeFileSync() : used to create  a new file if file doen't exist, file  already exist it delete all content of file and re-write data into it .
        //  try {
        // fs.writeFileSync("test/sample.txt","hello world 1")
        // fs.writeFileSync("test/sample.txt","hello world 2")
        // fs.writeFileSync("test/sample.txt","hello world 3")
        // fs.writeFileSync("test/sample.txt","hello world 4")
        // fs.writeFileSync("test/sample.txt","hello world 5")
        // console.log("Done");
        //  } catch (error) {
        //     console.log("Path InVailid")
        //  }

        // fs.appendFileSync() : used to create  a new file if file doen't exist, file  already exist it write data after old data.
        // try {
        //     fs.appendFileSync("test/sample2.txt", "Hello World 1 \n")
        //     fs.appendFileSync("test/sample2.txt", "Hello World 2 \n")
        //     fs.appendFileSync("test/sample2.txt", "Hello World 3 \n")
        //     fs.appendFileSync("test/sample2.txt", "Hello World 4 \n")
        //     console.log("Done Appending File");
        // } catch (error) {
        //     console.log("Path is Invailid");
        // }

        // fs.readFileSync(): read a file and data if we not any encoding then data id return id buffer format to encode use 'utf-8' thorw execption if file dono't exist or invailid path.
        // try {
        // let data=fs.readFileSync("test/sample2.txt",'utf-8')
        // console.log(data);
        // } catch (error) {
        //     console.log("Path is Invaild "); 
        // }

        // fs.renameSync(): used the rename the file 
        // try {
        //     fs.renameSync("test/sample.txt", "test/sample1.txt")
        //     console.log("Rename file");
        // } catch (error) {
        //   console.log("Path is InVailid");   
        // }

        // fs.unlinkSync(): used the DELETE file.
        // try {
        //   fs.unlinkSync("test/sample.txt")
        //   console.log("Delete");  
        // } catch (error) {
        //     console.log("Path is invalid");
        // }

        