#include <stdio.h>

void printArray(int *arr, char *name);

int main(void)
{
  int array[3] = {5, 10, 15};
  int *pointer = array;

  char arrayName[6] = "array";
  char pointerName[8] = "pointer";

  //  Below prints same values of array
  printArray(array, arrayName);
  printArray(pointer, pointerName);

  pointer[0] = 100;
  pointer[1] = 200;
  pointer[2] = 300;

  printArray(array, arrayName);
  printArray(pointer, pointerName);

  // There are two ways to print specific element
  // array[i] is equal to *(array + i)
  // array returns the address of the first element of array == &arr[0]
  int random_i = 1;
  printf("First way is array[i]: %d\n", array[random_i]);
  printf("Second way is *(array + i): %d\n", *(array + random_i));
  printf("&array[0] is %d \nand array %d\n", &array[0], array);

  // *& is same as nothing
  printf("Value of *&*&*&*&*&*&*&*&*&array[0] is %d\n", *&*&*&*&*&*&*&*&*&array[0]);
  printf("Value of array[0] is %d\n", array[0]);

  return 0;
}

void printArray(int *arr, char *name)
{
  for (int i = 0; i < 3; i++)
  {
    printf("Value of %s[%d]: %d\n", name, i, arr[i]);
  }
};
