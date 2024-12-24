#include <stdio.h>

void swap(int a, int b);

void swapUsingPointer(int *a, int *b);

int main(void)
{
  int a = 10;
  int b = 20;

  printf("Before swap\na: %d\nb: %d\n\n", a, b);

  // Swaping the value of a and b using function
  swap(a, b);

  // Below does not change because it is call by value
  // Parameter of a and b for swap is providing the value not actual a and b
  // Check by uncommenting printf inside swap function
  printf("After swap\na: %d\nb: %d\n\n", a, b);

  swapUsingPointer(&a, &b);

  printf("After swapUsingPointer\na: %d\nb: %d\n\n", a, b);

  return 0;
}

void swap(int a, int b)
{
  int temp = a;
  a = b;
  b = temp;

  // printf("Inside swaping function\na: %d\nb: %d\n\n", a, b);
}

void swapUsingPointer(int *a, int *b)
{
  int temp = *a;
  *a = *b;
  *b = temp;
}