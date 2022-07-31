function fourSum(nums, target) {
    nums.sort((a,b) => a-b)
    let ans = []
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            let k = j+1
            let x = nums.length-1
            let sum = target - (nums[i]+nums[j])
            while(k < x) {
                if(nums[k]+nums[x] == sum) {
                    ans.push([nums[i],nums[j],nums[k],nums[x]])
                    while(nums[k] == nums[k+1]) k++
                    while(nums[x] == nums[x-1]) x--
                    k++
                    x--
                } else if(nums[k]+nums[x] > sum) {
                    x--
                } else {
                    k++
                }
            }
            while(j+1 < nums.length && nums[j+1] == nums[j]) ++j
        }
        while(i+1 < nums.length && nums[i+1] == nums[i]) ++i
    }
    return ans
}

console.log(fourSum([1, 4, 3, 9, 10, 23, 3 ,7], 31))