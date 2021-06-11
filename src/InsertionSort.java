public class InsertionSort {
    public static int[] sortArray(int[] nums) {
        for (int i = 1; i < nums.length; i++) {
            int cur = nums[i];
            int j;
            for (j = i - 1; j >= 0; j--) {
                if (nums[j] > cur) {
                    nums[j + 1] = nums[j];
                } else {
                    break;
                }
            }
            nums[j + 1] = cur;
        }
        return nums;
    }
}
