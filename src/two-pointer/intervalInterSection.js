/**
 * 寻找两个区间集合的交集
 * @param {Array} firstList 数组，里面有多个区间 
 * @param {Array} secondList 
 * @returns 
 */
function intervalInterSection(firstList, secondList) {
    let p = 0;
    let q = 0;
    let a, b, m, n;
    let res = [];
    while (p < firstList.length && q < secondList.length) {
        a = firstList[p][0];
        b = firstList[p][1];
        m = secondList[q][0];
        n = secondList[q][1];
        if (b === n) {
            res.push([Math.max(a, m), b]);
            p++;
            q++;
        } else if (b < n) {
            if (m <= b) {
                res.push([m >= a ? m : a, b]);
            }
            p++;
        } else {
            if (a <= n) {
                res.push([a >= m ? a : m, n]);
            }
            q++;
        }
    }
    return res;
}
function test() {
    let firstList = [[0, 2], [5, 10], [13, 23], [24, 25]];
    let secondList = [[1, 5], [8, 12], [15, 24], [25, 26]];
    let res = intervalInterSection(firstList, secondList);
    console.log(res);
}
test();