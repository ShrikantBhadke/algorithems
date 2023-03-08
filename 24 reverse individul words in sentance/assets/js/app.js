let cl = console.log;

function reveseWord(string){
  let tempWord = '';
  let reverseStr = '';
  for(let i=0;i<string.length;i++){
    let char = string[i];
    if(char !== " "){
      tempWord = char + tempWord;
    }else{
      reverseStr = reverseStr +tempWord + " ";
      tempWord = "";
    }
  }

  reverseStr = reverseStr + tempWord;
  return reverseStr;
}

cl(reveseWord("hallo world"))



let str = 'hallo world';



function reverseString(str){
return str.split("").reverse().join("").split(" ").reverse().join(" ")
}

cl(reverseString(str))