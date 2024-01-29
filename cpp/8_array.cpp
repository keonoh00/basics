#include <stdio.h>

int main(void)
{
  // How to use array in C++
  int subway_array[3];
  subway_array[0] = 30;
  subway_array[1] = 50;
  subway_array[2] = 40;

  for (int i = 0; i < 3; i++)
  {
    printf("Subway number %d has %d number of people\n", i, subway_array[i]);
  }

  // Array can be initialized using curly braces
  int array[10] = {1, 2, 3, 4, 5, 6, 7};
  for (int i = 0; i < 10; i++)
  {
    printf("array[%d]: %d\n", i, array[i]);
  }

  // If none of the element is initialized then elements remains dummy value
  int random_array[10];
  for (int i = 0; i < 10; i++)
  {
    printf("random_array[%d]: %d\n", i, random_array[i]);
  }

  // If at least one of the element is initialized, the rest becomes "0(zero)"
  int partially_initialized_array[10];
  partially_initialized_array[0] = 10;
  for (int i = 0; i < 10; i++)
  {
    printf("partially_initialized_array[%d]: %d\n", i, partially_initialized_array[i]);
  }

  // Also, array can be initialized without specifying the size
  // And content of array can be string
  char character = 'C';
  char string[] = "This is String";
  printf("character: %c\n", character);
  printf("string: %s\n", string);

  // The string has "NULL" value at the end
  // Hence six length string can contain 5 characters
  char sixLengthString[6] = "12345";

  printf("Size of '12345': %ld\n", sizeof(sixLengthString));

  // For Korean, each lettter occupies 3 bytes for UTF-8
  // If encoding is euc-kr, each letter occupies 2 bytes
  char korean[] = "한글";
  printf("korean: %s\n", korean);
  printf("Size of '한글': %ld\n", sizeof(korean));

  return 0;
}
