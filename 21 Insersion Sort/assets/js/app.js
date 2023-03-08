let cl = console.log;

let arr = [12,2,15,16,20];

cl(arr)

const sorted=(arr)=>{
  for(let i=1; i<arr.length; i++){
    let curr = arr[i];

    let j = i-1;
    while(j>=0 && arr[j]>curr){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = curr
  }
  return arr
}


let r = sorted(arr)
cl(r)