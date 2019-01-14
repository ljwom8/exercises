function readLine() {
  return new Promise(resolve => {
    process.stdin.once('readable', () => {
      let chunk = process.stdin.read();
      resolve(chunk.toString().trimEnd());
    });
  });
}

async function main(){
  while(true) {
  process.stdout.write("I am ready to arithmatic ;]\n Please input number A\n")
  let inputA = await readLine();

    if (isNaN(inputA)){
      console.log("Not a number! \n")
      return 0;
    }

  process.stdout.write("\n Input an operator: + - / * \n")
  let inputX = await readLine();

  process.stdout.write("\n Please input number B\n")
  let inputB = await readLine();

    if (isNaN(inputB)){
      console.log("Not a number! \n")
      return 0;
    }

  process.stdout.write(inputA + inputX + inputB + "=\n")

  let numA = parseFloat(inputA)
  let numB = parseFloat(inputB)

  let oper = inputX
  switch(oper) {
    case "+":
      console.log(numA + numB)
      break;

    case "-":
      console.log(numA - numB)
      break;

    case "/":
      console.log(numA / numB)
      break;

    case "*":
    console.log(numA * numB)
    break;

    default:
      console.log("That doesn't make sense. I only know +, -, /, *.")
  }
}
}

main()
