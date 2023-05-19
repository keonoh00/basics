#include <stdio.h>

int main(void)
{
  char name[256];
  printf("Enter your name: ");
  scanf("%s", name);

  int age;
  printf("Enter your age: ");
  scanf("%d", &age);

  // The main difference between double and float is that double has 2x more precision than float.
  // In other words, double has 15 decimal digits of precision, while float has 7.
  double height;
  printf("Enter your height(cm): ");
  scanf("%lf", &height);

  float weight;
  printf("Enter your weight(kg): ");
  scanf("%f", &weight);

  char what_do_you_do[256];
  printf("What did you do? ");
  scanf("%s", what_do_you_do);

  printf("\n\n----------------- Your Information -----------------\n");
  printf("Name  : %s\n", name);
  printf("Age   : %d\n", age);
  printf("Height: %lf\n", height);
  printf("Weight: %f\n", weight);
  printf("Done  : %s\n", what_do_you_do);
}
