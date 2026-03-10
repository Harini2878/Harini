import java.util.*;
public class Datatypes{
    public static void main (String[]args){

        Scanner sc=new Scanner(System.in);
        string name=sc.next();
        int age=sc.nextInt();
        double cgpa=sc.nextDouble();
        char grade=sc.next().charAt(0);

        System.out.println(name);
        System.out.println(age);
        System.out.println(cgpa);
        System.out.println(grade);

        TYPE CASTING PROBLEMS

        1. char ch='A';
        int num=ch;
        System.out.println(num);

        2.double b=5.5;
        int a=(int) (b);
        System.out.println(a);

        3.int a=5;
        int b=10;
        System.out.println(a/b);

    }
}
