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

  struct StudentInfo student1;
  student1.name = "James Bradford";
  student1.birthday = "1987-03-23";
  student1.grade = 7;
  printf("%s\n", student1.name);
  printf("%s\n", student1.birthday);
  printf("%d\n", student1.grade);

  struct StudentInfo student2 = {"Harry Kane", "1999-01-01", 12};

  printf("%s\n", student2.name);
  printf("%s\n", student2.birthday);
  printf("%d\n", student2.grade);

  struct StudentInfo *pointerStudent1;
  pointerStudent1 = &student1;
  printf("%s\n", (*pointerStudent1).name);
  printf("%s\n", (*pointerStudent1).birthday);
  printf("%d\n", (*pointerStudent1).grade);

  struct StudentInfo *pointerStudent2;
  pointerStudent2 = &student2;
  pointerStudent2->bestFriend = &student1;
  printf("%s\n", pointerStudent2->name);
  printf("%s\n", pointerStudent2->birthday);
  printf("%d\n", pointerStudent2->grade);
  printf("%d\n", pointerStudent2->bestFriend->grade);

  return 0;
}
