package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
	// write your code here
        System.out.println("Enter two digits");
        Scanner sc = new Scanner(System.in);
        int number1 = sc.nextInt();
        int number2 = sc.nextInt();

        findPerimeter(number1,number2);
    }

    public static int findPerimeter(int length, int width){
        int res = (length + length) + (width + width);
        System.out.println(res);
        return res;
    }
}
