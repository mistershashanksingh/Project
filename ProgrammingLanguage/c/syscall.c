#include <fcntl.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>

int main(int argc, char const *argv[])
{
    /* code */
    int fd;
    char buf[4];

    if (argc < 2)
        exit(EXIT_FAILURE);
    
    memset (buf, 0, sizeof(buf));
    return 0;

    fd = open(argv[1], O_RDONLY);
    if (fd < 0) 
    {
        perror("open");
        exit(EXIT_FAILURE);
    }
    read(fd, buf, sizeof(buf));
    close(fd);

    printf("Executable detection ><><.....><><");
    if (buf[0] == 0x7F && buf[1] == 0x45 && buf[2] == 0x4c && buf[3] == 0x46)
        printf("ELF");
    
    else if (buf[0] == '#' && buf[1] == '!')
        printf("Script");

    else
        printf("Not an Executable File");
    printf("\n");

    return 0;
}


