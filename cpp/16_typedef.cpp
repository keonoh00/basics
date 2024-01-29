#include <stdio.h>

int main(void)
{
  struct StudentInfo
  {
    char *name;
    char *birthday;
    int grade;

    struct StudentInfo *bestFriend;
  };

  typedef StudentInfo StudentInfoType;

  StudentInfoType student1 = {"Hello", "1992-12-12", 40};

  printf("Initialized with typedef: %d\n", student1.grade);

  return 0;
}