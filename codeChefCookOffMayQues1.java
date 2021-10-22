import java.util.Scanner;

class pract {
     public static void main(String[] args) {
         Scanner sc =new Scanner(System.in);
         int t= sc.nextInt();
         while (t-->0){
             int D= sc.nextInt();
             int d= sc.nextInt();
             int a= sc.nextInt();
             int b= sc.nextInt();
             int c= sc.nextInt();
              int e=D*d;
             int count = 0;
             if (e >= 10 && e >= 21 && e >= 42)
             System.out.println(c);
             else if (e >= 10 && e >= 21)
             System.out.println(b);
             else if (e >= 10)
             System.out.println(a);
             else{
                 System.out.println(0);}
         }
     }
}
