let cl = console.log;

function num(x,y){
  let first = [];
  let second = [];

  for(let i =1;i<=x  && i <= y; i++){
    if(x%i == 0){
      first.push(i);
      first = first.sort((c1,c2)=> c1>c2 ? -1:1)
    }
    if(y%i == 0){
      second.push(i);
      second = second.sort((c1,c2)=> c1>c2 ? -1:1)
    }
  }

  for(let n= 0;n<second.length ;n++){
    if(first.includes(second[n]) === true){
      return second [n]
    }
  }
}


cl(num(14,21))


function abc(x,y){
  let g=0;
  for(let i = 1;i<= x && i <=y ; i++){
    if(x%i == 0 && y%i == 0 && i>g){
      g=i;
    }
  }
  return g;
}

cl(abc(50,80))



function gcd(a,b){
  while (a!=b){
    if(a>b){
      a-=b;
    }else{
      b-=a;
    }
  }
  return a;
}

cl(gcd(17,34))