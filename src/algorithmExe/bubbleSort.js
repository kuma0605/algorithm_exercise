function bubbleSort(arr){
  // console.log("enter" ,arr)
  let len= arr.length;
  for(let i=len; i>1; i--){
    if(arr[i-1]-0<arr[i-2]-0){
      let mid=arr[i-2];
      arr[i-2]=arr[i-1];
      arr[i-1]=mid;
    }
  }
  // console.log('sort', arr)
  let sured = [arr[0]];
  let other =[]
  if(len!==1)other = bubbleSort(arr.slice(1));

  return sured.concat(other)
}

export default bubbleSort;