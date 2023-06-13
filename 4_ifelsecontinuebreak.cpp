#include <stdio.h>

void main(void)
{
  int age = 15;

  if (age >= 18)
  {
    printf("You are an adult\n");
  }
  else if (age >= 13)
  {
    printf("You are a teenager\n");
  }
  else
  {
    printf("You are a child\n");
  }

  // Operators
  // ==, !=, >, <, >=, <=
  // &&, ||, !

  if (age >= 13 && age <= 19)
  {
    printf("You are a teenager\n");
  }
  else if (age >= 18)
  {
    printf("You are an adult\n");
  }
  else
  {
    printf("You are a child\n");
  }

  // Break and Continue
  for (int i = 0; i <= 10; i++)
  {
    if (i == 5)
    {
      continue;
    }
    else if (i == 8)
    {
      break;
    }
    printf("Hello For Loop - %d\n", i);
  }
}
