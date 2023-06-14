#include <stdio.h>
#include <time.h>
#include <stdlib.h>

int main(void)
{

  int zeroToTwo = rand() % 3;      // 0, 1, 2
  int oneToThree = rand() % 3 + 1; // 1, 2, 3

  printf("zeroToTwo: %d\n", zeroToTwo);
  printf("oneToThree: %d\n", oneToThree);

  printf("Before seeding random number generator\n");
  for (int i = 0; i < 10; i++)
  {
    printf("%d", rand() % 10 + 1); // 1 - 100
  }

  srand(time(NULL)); // Seed the random number generator (Initializing the random number generator)
  printf("\n\nAfter seeding random number generator\n");
  for (int i = 0; i < 10; i++)
  {
    printf("%d", rand() % 10 + 1); // 1 - 100
  }

  return 0;
}