function selectSort(arr){
    var len=arr.length
    var temp,minIndex
    for(let i =0;i<len-1;i++){
        minIndex=i
        for(let j= i;j<len;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        temp=arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex]=temp;
    }
    return arr
}
var ceshi=[15,60,40,58,48,79,11,3,16,49,33,199];

console.log(selectSort(ceshi));

//在for循环中 i=1，j=1，将arr[1]设置为minIndex j循环j=2时，minInex与arr[j]
//作比较并将最小的数赋给minIndex,循环找出最小的数
//将arr[1]中的元素暂时赋给一个空值-->再将minIndex的元素值赋给arr[1]-->再将原先的arr[1]作为minIndex再次循环比较找出最小的值