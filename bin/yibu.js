function heavyCompute(n) {
    var count = 0,
        i, j;

    for (i = n; i > 0; --i) {
        for (j = n; j > 0; --j) {
            count  +=1;
        }
    }
    console.log(count);
}

var t = new Date();

setTimeout(function () {
    console.log(new Date() - t);
}, 1000);
heavyCompute(500);