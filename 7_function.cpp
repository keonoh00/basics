#include <stdio.h>

// How to declare the function
// returntype functionname(parameterType parameter)

// Eg)
// Declare a function which has float return value and
// two parameters "num1" and "num2" with both having integer type
double multiply(int num1, int num2);

// When nothingis returned then void
void noReturnPrint(int num1, int num2, int multiplied);

void main(void)
{
  for (int i = 0; i < 5; i++)
  {
    int multiplied = multiply(i, i + 1);
    noReturnPrint(i, i + 1, multiplied);
  }
}

// Define the function which has been declared
// The return type and parameters should match the declaration
double multiply(int num1, int num2)
{
  double calculation = num1 * num2;
  return calculation;
}

void noReturnPrint(int num1, int num2, int multiplied)
{
  printf("%d multiplied by %d is %d\n", num1, num2, multiplied);
}