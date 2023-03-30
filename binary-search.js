

const binarySearch = (arr, num, start, end) => {

    if(start > end) return -1;

    const mid = Math.floor((start + end)/2);
    if(arr[mid] === num) return mid;

    if(arr[mid] > num) {
        return binarySearch(arr, num, start, mid - 1)
    }
    return binarySearch(arr, num, mid + 1, end)
}

const nums = [1]
console.log(binarySearch(nums, 1, 0, nums.length ))