#include <stdio.h>

int main(void)
{
  // For Loop
  for (int i = 0; i <= 5; i++)
  {
    printf("Hello For Loop - %d\n", i);
  }

  // While Loop
  int j = 0;
  while (j <= 5)
  {
    printf("Hello While Loop %d\n", j);
    j++;
  }

  // Do While Loop
  int k = 0;
  do
  {
    printf("Hello Do While Loop %d\n", k);
    k++;
  } while (k <= 5);

  return 0;
}
