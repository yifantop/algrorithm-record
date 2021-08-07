/**
 * 盛最多的水
 * @param {*} height 
 * @returns 
 */
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let currentMaxArea = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            currentMaxArea = Math.max(height[left] * (right - left), currentMaxArea);
            left++;
        } else if (height[left] > height[right]) {
            currentMaxArea = Math.max(height[right] * (right - left), currentMaxArea);
            right--;
        } else {
            currentMaxArea = Math.max(height[left] * (right - left), currentMaxArea);
            left++;
            right--;
        }

    }
    return currentMaxArea;
}

function test() {
    let height = [1,8,6,2,5,4,8,3,7];
    let res = maxArea(height);
    console.log(res);
}
test();