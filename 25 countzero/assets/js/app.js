let cl = console.log;

console.time("first")

function countzero(x,y){
  let outercount =0
  for(let i=x;i<=y; i++){
    let number = i;
    let innercount = 0;
    while(number>0){
      if(number% 10 === 0){
        innercount++
        number = number /10
      }else{
        number = Math.floor(number/10)
      }
    }
    outercount +=innercount
  }
  return outercount
}

cl(countzero(1,1000))

console.timeEnd("first")


let str = "1245302154502365";


cl(str.split("0").length-1)


console.time("second");

function countzero1(x,y){
let result = ''
for(let i = x;i<=y;i++){
  result += i;
}
return result.split("0").length-1;
}


cl(countzero1(1,100))

console.timeEnd("second")