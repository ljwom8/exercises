function readLine() {
  return new Promise(resolve => {
    process.stdin.once('readable', () => {
      let chunk = process.stdin.read();
      resolve(chunk.toString().trimEnd());
    });
  });
}

function reverseString(str) {
  let newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

async function main(){
  let input = await readLine();

  process.stdout.write(reverseString(input) + "\n");
  
}

main();
