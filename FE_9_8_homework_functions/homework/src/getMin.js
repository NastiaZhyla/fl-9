function getMin(a) {
    var min = 0;
    for (var i = 1; i < a.length; i++) {
     if (a[i] < a[min]) min = i;
    }
    return min;
   }