#include <stdio.h>

int main(void)
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
}