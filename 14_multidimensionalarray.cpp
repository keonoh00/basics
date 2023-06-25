#include <stdio.h>

int main(void)
{
  // Integer
  int i;
  // @

  // 1-D Array
  int array[5];
  // @@@@@

  // 2-D Array
  int twoDimensionalArray[2][5];
  // @@@@@
  // @@@@@

  // 2-D Array
  int twoDimensionalArray2[5][2];
  // @@
  // @@
  // @@
  // @@
  // @@

  // 3-D Array
  int threeDimensionalArray[3][3][3];
  // @@@
  // @@@
  // @@@

  // Accessing Element in Multidimensional Array
  int randomArray[3][4][5] = {
      {{1, 2, 3, 4, 5}, {6, 7, 8, 9, 10}, {11, 12, 13, 14, 15}, {16, 17, 18, 19, 20}},
      {{21, 22, 23, 24, 25}, {26, 27, 28, 29, 30}, {31, 32, 33, 34, 35}, {36, 37, 38, 39, 40}},
      {{41, 42, 43, 44, 45}, {46, 47, 48, 49, 50}, {51, 52, 53, 54, 55}, {56, 57, 58, 59, 60}},
  };

  printf("First element %d\n", randomArray[0][0][0]);
  printf("Second element %d\n", randomArray[0][0][2]);
  printf("Last element %d\n", randomArray[2][3][4]);

  printf("Iterating through all elements: \n");
  int firstLayerLength = sizeof(randomArray) / sizeof(randomArray[0]);
  int secondLayerLength = sizeof(randomArray[0]) / sizeof(randomArray[0][0]);
  int thirdLayerLength = sizeof(randomArray[0][0]) / sizeof(int);

  for (int x = 0; x < firstLayerLength; x++)
  {
    for (int y = 0; y < secondLayerLength; y++)
    {
      for (int z = 0; z < thirdLayerLength; z++)
      {
        printf("Position (%d, %d, %d) - Value: %d\n", x + 1, y + 1, z + 1, randomArray[x][y][z]);
      }
    }
  }

  return 0;
}