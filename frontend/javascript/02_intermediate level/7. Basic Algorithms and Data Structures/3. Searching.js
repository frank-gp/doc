// Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  
  const index = linearSearch(numbers, 8);
  console.log("Index of 8:", index);
  
  // Binary Search (for sorted arrays)
  function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const midValue = arr[mid];
  
      if (midValue === target) {
        return mid;
      } else if (midValue < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return -1;
  }
  
  const indexBinary = binarySearch(numbers, 8);
  console.log("Index of 8 (Binary Search):", indexBinary);
  