function getMin(a) {
    let min = 0;
    for (let i = 1; i < a.length; i++) {
     if (a[i] < a[min]){
        min = i;
     }
    return min;
   }
}
   console.log(getMin);
