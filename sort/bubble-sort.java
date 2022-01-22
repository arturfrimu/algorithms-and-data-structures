public class BubbleSort {
    public int[] sort(int [] arr) {
        boolean noSwaps;
        for (int i = arr.length; i > 0; i--) {
            noSwaps = true;
            for (int j = 0; j < i - 1; j++) {
                if(arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    noSwaps = false;
                }
            }
        if(noSwaps) break;
        }
        return arr;
    }
}


 public static void main(String[] args) {
        BubbleSort bubbleSort = new BubbleSort();
        System.out.println(Arrays.toString(bubbleSort.sort(new int[]{37, 35, 29, 8})));
        System.out.println(Arrays.toString(bubbleSort.sort(new int[]{37, 35, 29, 8, 10, 12, 30, 127})));
        System.out.println(Arrays.toString(bubbleSort.sort(new int[]{8, 1, 2, 3, 4, 5, 6, 7})));
}