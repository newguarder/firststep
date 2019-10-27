function bubleSort (arr){
    let len= arr.length
    for(let i=0;i<=len;i++){
        for(let j=0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j+1]
                arr[j+1]=arr[j]
                arr[j]=temp;

            }
        }
    }
    return arr
}
var ceshi=[15,60,40,58,48,79,11,3,16,49,33,199];
//相邻两个元素比较，较大的值与较小的值交换，继续比较
    
console.log(bubleSort(ceshi));
