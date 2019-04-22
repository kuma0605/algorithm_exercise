function pickSort (arr){
  if(arr.length===1){
    return arr;
  }

  let min = arr[0];
  let minIndex = 0;
  let len = arr.length;
  for(let i =1; i<len; i++){
    if(min-0>arr[i]-0){
      min=arr[i];
      minIndex=i;
    }
  }
  if(minIndex!==0){
    let first = arr[0];
    arr.splice(minIndex, 1, first);
    arr.splice(0, 1, min);
  }
  // console.log(arr)
  return [min].concat(pickSort(arr.slice(1)))
}

export default pickSort;