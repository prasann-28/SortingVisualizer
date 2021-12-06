export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

export function getQuickSortAnimations(array){
  const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();

    quickSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

  function quickSortHelper(mainArray,
    low,
    high,
    auxiliaryArray,
    animations,){
      if(low < high){
        var partition_idx = partition(mainArray, low, high, auxiliaryArray, animations);

        quickSortHelper(mainArray, low, partition_idx - 1, auxiliaryArray, animations);
        quickSortHelper(mainArray, partition_idx + 1, high, auxiliaryArray, animations);
      }

    }

    function partition(array, low, high,auxiliaryArray, animations){
      var pivot = array[high];
      var i = low - 1 ;

      for (var j = low; j <= high-1; j++){
        if(array[j] < pivot){
          
          i++;
          animations.push([i,j]);
          animations.push([i,j]);
          animations.push([i, array[j]]);
          animations.push([j,i]);
          animations.push([j,i]);
          animations.push([j,array[i]]);
          
          var temp = array[j];
          array[j] = array[i];
          array[i] = temp;
          
          animations.push([i,j]);
          animations.push([i,j]);
          animations.push([i, array[j]]);
          animations.push([j,i]);
          animations.push([j,i]);
          animations.push([j,array[i]]);
        }
      
      // animations.push([i,i]);
      // animations.push([i,i]);
      // animations.push([i,array[i]]);

      // animations.push([j,j]);
      // animations.push([j,j]);
      // animations.push([j,array[j]]);
      }
      animations.push([high,i+1]);
      animations.push([high,i+1]);
      animations.push([high,array[i+1]]);
      animations.push([i+1,high]);
      animations.push([i+1,high]);
      animations.push([i+1,array[high]]);

      var temp1 = array[high];
      array[high] = array[i+1];
      array[i+1] = temp1;

      animations.push([high,i+1]);
      animations.push([high,i+1]);
      animations.push([high,array[i+1]]);
      animations.push([i+1,high]);
      animations.push([i+1,high]);
      animations.push([i+1,array[high]]);


      return i+1;

    }

    function doQuick(mainArray,
      startIdx,
      middleIdx,
      endIdx,
      auxiliaryArray,
      animations,){
        
      }

export function getBubbleSortAnimations(array){

}

  function bubbleSortHelper(mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,){

    }

    function doBubble(mainArray,
      startIdx,
      middleIdx,
      endIdx,
      auxiliaryArray,
      animations,){
        
      }

export function getHeapSortAnimations(array){

}

  function heapSortHelper(mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,){

    }

    function doHeap(mainArray,
      startIdx,
      middleIdx,
      endIdx,
      auxiliaryArray,
      animations,){
        
      }