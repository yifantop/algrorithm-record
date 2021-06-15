

public class Test {
    public static void main(String[] args) {
        int[] nums = new int[]{5, 6, 9, 7, 4, 1, 2, 3, 6, 8, 5};
        int[] result = MergeSort.sortArray(nums);
        for (int e : result) {
            System.out.print(e + " ");
        }
    }
}
