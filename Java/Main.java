import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] arr = new int[5];  // array to store 5 integers

        System.out.println("Enter 5 numbers:");

        for (int i = 0; i < 5; i++) {
            arr[i] = sc.nextInt();  // read numbers one by one
        }

        System.out.println("You entered:");
        for (int i = 0; i < 5; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
