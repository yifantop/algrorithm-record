public class ShellSort {
    public static int[] sortArray(int[] nums) {
        int len = nums.length;
        for (int distance = len / 2; distance >= 1; distance = distance / 2) {
            for (int grp = 0; grp < distance; grp++) {
                for (int i = grp + distance; i < len; i += distance) {
                    int temp = nums[i];
                    int j;
                    for (j = i - distance; j >= 0; j -= distance) {
                        if (nums[j] > temp) {
                            nums[j + distance] = nums[j];
                        } else {
                            break;
                        }
                    }
                    nums[j + distance] = temp;
                }
            }
        }
        return nums;
    }
}
