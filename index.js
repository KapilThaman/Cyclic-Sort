// Cyclic Sort questions are basically identified by an array of 0 to n numbers with given range and we will be asked to do something with these numbers

function SortThem (arr){
    let i = 0;
    while(i<arr.length){
        let correctIndex = arr[i] -1;
        if(arr[i] != arr[correctIndex] ){ debugger
            swap(arr,i,correctIndex);
        }
        else{
            i++;
        }

    }
    console.log(arr);
}

function swap(arr,first,second){
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

SortThem([4,3,6,1,5,2])