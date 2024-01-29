#include <stdio.h>

int main(void)
{
  char example_char = 'A';

  // %c is for character
  // %d is for integer, which is ASCII code for character
  // Vice versa also works
  printf("example_char: %c and it's ASCII Code %d\n", example_char, example_char);

  // Print all ASCII Code
  for (int i = 0; i < 128; i++)
  {
    printf("ASCII Code: %d is for %c\n", i, i);
  }

  return 0;
}