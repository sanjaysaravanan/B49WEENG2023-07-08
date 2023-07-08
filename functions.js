// function - Group of statements combined together to form a task

// function definition
function doOperation(opr = "Running") {
  console.log("Started", opr);

  return 'Done with ' + opr;
}

// with parameter
// doOperation('Singing'); // invoking/executing the function

// function without parameter
doOperation('Singing'); // invoking