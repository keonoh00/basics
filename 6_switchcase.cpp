#include <stdio.h>
#include <time.h>
#include <stdlib.h>

int main(void)
{
  srand(time(NULL));
  int rockPaperScissor = rand() % 3;

  switch (rockPaperScissor)
  {
  case 0:
    printf("Rock");
    break;

  case 1:
    printf("Paper");
    break;

  case 2:
    printf("Scissor");
    break;

  default:
    printf("There is an unexpected argument");
    break;
  }
}