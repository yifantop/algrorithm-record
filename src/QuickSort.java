public class QuickSort {
    public static int[] sortArray(int[] nums) {
        quickSort(nums, 0, nums.length - 1);
        return nums;
    }

    public static void quickSort(int[] nums, int low, int high) {
        if (low >= high) {
            return;
        }
        int center = partition(nums, low, high);
        quickSort(nums, low, center - 1);
        quickSort(nums, center + 1, high);
    }

    public static int partition(int[] nums, int low, int high) {
        int val = nums[low];
        while (low < high) {
            while (low < high && nums[high] >= val) {
                high--;
            }
            nums[low] = nums[high];
            while (low < high && nums[low] < val) {
                low++;
            }
            nums[high] = nums[low];
        }
        nums[low] = val;
        return low;
    }
}
