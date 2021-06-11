public class SelectionSort {
    public static int[] sortArray(int[] nums) {
        for (int i = 0; i < nums.length - 1; i++) {
            int min = nums[i];
            int position = i;
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[j] < min) {
                    min = nums[j];
                    position = j;
                }
            }
            if (position != i) {
                nums[position] = nums[i];
                nums[i] = min;
            }
        }
        return nums;
    }
}
