let cl = console.log;

let arr = [12,2,15,16,20];

let arr1 = [12,2,15,16,20];


function checkSameArray(arr,arr1){
  if(arr.length !== arr1.length){
    return 'Not a same lenth';
  }

  for(let i=0;i<arr.length;i++){
    let output = arr1.some(ele => ele === arr[i])
    if(output === false){
      return 'two array are not equal';
    }else{
      return 'two array are equal'
    }
  }
}

cl(checkSameArray(arr,arr1))


function usingSortJoin(a,b){
if(a.length !== b.length){
  return 'Given array length is not same'
}
let aSort = a.sort((a,b)=> a>b ? 1:-1);
let bSort = b.sort((a,b)=> a>b ? 1: -1);
let firstArr = aSort.join(" ");
let secondArr = bSort.join(" ");
if(firstArr === secondArr){
  return "Given array is same";
}else{
  return "Given array is not same"
}
}

cl(usingSortJoin(arr,arr1))