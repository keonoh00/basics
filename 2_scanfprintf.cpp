#include <stdio.h>

int main(void)
{
  // Table of variables that can be used in printf

  // Type    | Format
  // -----------------
  // Integer | %d
  // Float   | %f
  // Double  | %lf
  // Char    | %c
  // String  | %s
  // Exponent| %e
  // Hex     | %x
  // -----------------

  // Example of using integer
  int i = 12;
  printf("This is an integer example\t%d\n", i);

  // Example of using float
  float f = 3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862;
  printf("This is a float with rounding at 2nd digit\t%.2f\n", f);

  // Example of using double
  double d = 3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862;
  printf("This is a double with rounding at 5th digit\t%.5f\n", d);

  // Example of using char
  char c = 'a';
  printf("This is a single charcter(string)\t%c\n", c);

  // Example of using string
  char s[] = "Hello World!";
  printf("This is multiple characters(string)\t%s\n", s);

  // Example of using constant values
  const int NUMBER = 10;
  printf("This is a constant(immutable) variable\t%d\n", NUMBER);
  // x = 100; -> Error: assignment of read-only variable 'x'

  // Example of using scanf
  int x;
  printf("Enter an integer: ");
  scanf("%d", &x);
  printf("You entered: %d\n", x);

  // Example of using scanf with multiple variables
  int y;
  float z;
  char w;
  printf("Enter an integer, float, and character: ");
  scanf("%d %f %c", &y, &z, &w);
  printf("You entered: %d, %.2f, %c\n", y, z, w);

  // Example of using scanf with string
  char str[100];
  printf("Enter a string: ");
  scanf("%s", str);
  printf("You entered: %s\n", str);

  return 0;
}