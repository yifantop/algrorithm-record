public class MergeSort {
    public static int[] sortArray(int[] nums) {
        int[] arr = new int[nums.length];
        mergeSort(nums, arr, 0, nums.length - 1);
        return nums;
    }

    public static void mergeSort(int[] nums, int[] arr, int low, int high) {
        if (low == high) {
            return;
        }
        int middle = (low + high) / 2;
        mergeSort(nums, arr, low, middle);
        mergeSort(nums, arr, middle + 1, high);
        merge(nums, arr, low, middle, middle + 1, high);
    }

    public static void merge(int[] nums, int[] arr, int start1, int end1, int start2, int end2) {
        int i = start1;
        int j = start2;
        int count = start1;
        while (i <= end1 && j <= end2) {
            if (nums[i] <= nums[j]) {
                arr[count++] = nums[i++];
            } else {
                arr[count++] = nums[j++];
            }
        }
        while (i <= end1) {
            arr[count++] = nums[i++];
        }
        while (j <= end2) {
            arr[count++] = nums[j++];
        }
        while (start1 <= end2) {
            nums[start1] = arr[start1];
            start1++;
        }
    }
}
