#include <stdio.h>

void swapUsingIndex(int *array, int swapIndexOne, int swapIndexTwo);

int main(void)
{
  int array[3] = {10, 20, 30};
  int arrayLength = sizeof(array) / sizeof(array[0]);

  printf("Before Swaping:\n");
  for (int i = 0; i < arrayLength; i++)
  {
    printf("%d\n", array[i]);
  }

  swapUsingIndex(array, 1, 2);
  printf("After Swaping:\n");
  for (int i = 0; i < arrayLength; i++)
  {
    printf("%d\n", array[i]);
  }

  // You can also send pointer of first element to swapUsingIndex
  swapUsingIndex(array, 1, 2);
  printf("Re-Swaping Back:\n");
  for (int i = 0; i < arrayLength; i++)
  {
    printf("%d\n", array[i]);
  }
}

void swapUsingIndex(int *array, int swapIndexOne, int swapIndexTwo)
{
  int temp = array[swapIndexOne];

  array[swapIndexOne] = array[swapIndexTwo];
  array[swapIndexTwo] = temp;
}