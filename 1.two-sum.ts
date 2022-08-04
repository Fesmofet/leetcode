function twoSum(nums: number[], target: number): number[] {
    if(nums.length === 2) return [0, 1];
    const hash = {}

    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (diff in hash) {
            return [hash[diff], i];
        }

        hash[nums[i]] = i;
    }

}
