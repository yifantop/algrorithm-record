class Solution {
    public static int[] bubbleSort(int[] nums) {
        for (int i = 0; i < nums.length - 1; i++) {
            boolean flag = false;
            for (int j = nums.length - 1; j > i; j--) {
                if (nums[j - 1] > nums[j]) {
                    flag = true;
                    int temp = nums[j - 1];
                    nums[j - 1] = nums[j];
                    nums[j] = temp;
                }
            }
            if (!flag) {
                return nums;
            }
        }
        return nums;
    }

    public static void main(String[] args) {
        int[] nums = new int[]{5, 6, 9, 7, 4, 1, 2, 3, 6, 8, 5};
        int[] result = bubbleSort(nums);
        for (int e : result) {
            System.out.print(e + " ");
        }
    }
}