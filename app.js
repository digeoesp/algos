let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let target = 8
//Two Num Sum
function twoNumberSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        firstNum = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            secondNum = nums[j];
            if (firstNum + secondNum === target) {
                return [firstNum, secondNum];
            } else {

            }
        }
    }
    return []
}

console.log(twoNumberSum(` ${nums}, ${target}`));

