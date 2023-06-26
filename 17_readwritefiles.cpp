#include <stdio.h>

#define MAX 10000

int main(void)
{
  // Read and Write files using fputs and fgets
  char line[MAX];

  //////////////////////////////////////////////////////////////////////////////////
  //                                  Writing File                                //
  //////////////////////////////////////////////////////////////////////////////////

  // "r": Read, "w": Write, "a": Append
  // "t": Text, "b": Binary
  FILE *writingFile = fopen("./17_file.txt", "wb"); // "wb": Write Binary

  if (writingFile == NULL)
  {
    printf("Fail to open file");
    return 0;
  }

  fputs("Writing a file using fputs\n", writingFile);
  fputs("Writing Next Line\n", writingFile);

  // If file is not saved/closed before the program ends,
  // then there might be a data loss
  fclose(writingFile); // Save and close file

  //////////////////////////////////////////////////////////////////////////////////
  //                                  Reading File                                //
  //////////////////////////////////////////////////////////////////////////////////

  FILE *readingFile = fopen("./17_file.txt", "rb"); // "rb": Read Binary

  if (readingFile == NULL)
  {
    printf("Fail to open file");
    return 0;
  }

  while (fgets(line, MAX, readingFile) != NULL)
  {
    printf("%s", line);
  }

  fclose(readingFile);

  //////////////////////////////////////////////////////////////////////////////////
  //                          Writing File using fprintf                          //
  //////////////////////////////////////////////////////////////////////////////////

  int num[6] = {0, 0, 0, 0, 0, 0};
  int bonus = 0;

  char str1[MAX];
  char str2[MAX];

  FILE *fWritingFile = fopen("./17_file2.txt", "wb");

  if (fWritingFile == NULL)
  {
    printf("Fail to open file");
    return 0;
  }

  fprintf(fWritingFile, "%s %d %d %d %d %d %d\n", "추첨번호", 1, 2, 3, 4, 5, 6);
  fprintf(fWritingFile, "%s %d\n", "보너스번호", 7);

  fclose(fWritingFile);

  //////////////////////////////////////////////////////////////////////////////////
  //                          Reading File using fprintf                          //
  //////////////////////////////////////////////////////////////////////////////////

  FILE *fReadingFile = fopen("./17_file2.txt", "rb");

  fscanf(fReadingFile, "%s %d %d %d %d %d %d\n", str1, &num[0], &num[1], &num[2], &num[3], &num[4], &num[5]);
  printf("%s %d %d %d %d %d %d\n", str1, num[0], num[1], num[2], num[3], num[4], num[5]);

  fscanf(fReadingFile, "%s %d\n", str2, &bonus);
  printf("%s %d\n", str2, bonus);

  return 0;
}