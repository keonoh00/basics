#include <stdio.h>

int main(void)
{
  // Assume that three people are living in a same building
  // Person A: Room 101 -> Door Lock Password: 123
  // Person B: Room 201 -> Door Lock Password: 234
  // Person C: Room 301 -> Door Lock Password: 345

  // Set each person's door lock password
  int PersonA = 123;
  int PersonB = 234;
  int PersonC = 345;

  // %p is the printf type for pointer address
  printf("PersonA Memory Address: %p\t Password: %d\n", &PersonA, PersonA);
  printf("PersonB Memory Address: %p\t Password: %d\n", &PersonB, PersonB);
  printf("PersonC Memory Address: %p\t Password: %d\n", &PersonC, PersonC);

  // Assume Security Guard needs to collect all address and password of each person

  int *SecurityGuard; // Declaring Pointer Variable
  printf("-------------------------------------------------------------------------------------\n");
  SecurityGuard = &PersonA; // Security Guard visits PersonA's Address
  printf("Security Guard visits %p and collects password(%d)\n", SecurityGuard, *SecurityGuard);
  printf("-------------------------------------------------------------------------------------\n");

  SecurityGuard = &PersonB; // Security Guard visits PersonB's Address
  printf("Security Guard visits %p and collects password(%d)\n", SecurityGuard, *SecurityGuard);
  printf("-------------------------------------------------------------------------------------\n");

  SecurityGuard = &PersonC; // Security Guard visits PersonC's Address
  printf("Security Guard visits %p and collects password(%d)\n", SecurityGuard, *SecurityGuard);
  printf("-------------------------------------------------------------------------------------\n\n\n");

  printf("-------------------------------------------------------------------------------------\n");
  printf("Theif hacked the SecurityGuard's phone\n");
  printf("-------------------------------------------------------------------------------------\n\n\n");
  int **Thief;

  Thief = &SecurityGuard;
  SecurityGuard = &PersonA; // Security Guard revisits PersonA's Address
  printf("-------------------------------------------------------------------------------------\n");
  printf("Security Guard revisits %p and collects password(%d)\n", SecurityGuard, *SecurityGuard);
  printf("Theif hiijacks the pasword of PersonA's Address%p and Password: %d\n", *Thief, **Thief);
  printf("-------------------------------------------------------------------------------------\n");

  SecurityGuard = &PersonB; // Security Guard revisits PersonB's Address
  printf("Security Guard revisits %p and collects password(%d)\n", SecurityGuard, *SecurityGuard);
  printf("Theif hiijacks the pasword of PersonB's Address%p and Password: %d\n", *Thief, **Thief);
  printf("-------------------------------------------------------------------------------------\n");

  SecurityGuard = &PersonC; // Security Guard revisits PersonC's Address
  printf("Security Guard revisits %p and collects password(%d)\n", SecurityGuard, *SecurityGuard);
  printf("Theif hiijacks the pasword of PersonC's Address%p and Password: %d\n", *Thief, **Thief);
  printf("-------------------------------------------------------------------------------------\n");

  PersonA = 1212;
  PersonB = 2323;
  PersonC = 3434;

  if (PersonA == *SecurityGuard and PersonA == **Thief)
  {
    printf("All PersonA, Security Guard, and Thief know's the password\n");
    printf("Theif or Security Guard can also change the password\n");
  }
  if (PersonB == *SecurityGuard and PersonB == **Thief)
  {
    printf("All PersonB, Security Guard, and Thief know's the password\n");
    printf("Theif or Security Guard can also change the password\n");
  }
  if (PersonC == *SecurityGuard and PersonC == **Thief)
  {
    printf("All PersonC, Security Guard, and Thief know's the password\n");
    printf("Theif or Security Guard can also change the password\n");
  }

  printf("-------------------------------------------------------------------------------------\n");

  return 0;
}
