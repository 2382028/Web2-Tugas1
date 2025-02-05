function findTwoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let index = 0; index < nums.length; index++) {
        const diff = target - nums[index];

        if (map.has(diff)) {
            return [map.get(diff)!, index];
        }

        map.set(nums[index], index);
    }

    return [];
}

console.log(findTwoSum([3, 2, 4], 6));
