// fs Module : used to perform operation regarding file handling file handling /file Input Output Operations
    // 1. Creating a new file or folder
    // 2. Writting  data into a file.
    // 3. Appending data into a file 
    // 4. Rename a file
    // 5. Delete a file
    // 6. Delete a folder

// mkdirSync() : used to create a folder in sync mode  if folder  already exist it thorw an exception.
const  fs=require('fs')

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

// rmdirSync() : used to delete a folder in sync mode  if folder  already exist it thorw an exception.

try {
    fs.rmdirSync("teyt")
    console.log("Deleted successfully");
} catch (error) {
    console.log("path is invailid");
}

// writeFileSync() : used to create  a new file if file doen't exist, file  already exist it delete all content of file and re-write data into it .
