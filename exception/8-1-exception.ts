// java: Exception
// javascript : Error

function readFile(fileName: string): string {
  if(fileName === "not exist"){
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {

}

function run(){
  const fileName = "file";
  const fileName2 = "not exist";
  try {
    console.log(readFile(fileName2));
  } catch(error){
    console.log("catched")
  }
    closeFile(fileName2);
  //  finally {
  //   closeFile(fileName2);
  //   console.log("finally")
  // }
  console.log("closed!")
}

run();