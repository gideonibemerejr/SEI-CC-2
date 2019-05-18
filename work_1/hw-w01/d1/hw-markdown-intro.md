# Basic Bash Cheat Sheet

### Introduction
The sheet contains some basic `bash`

### Keyboard Shortcuts
**control + A**\
Move to beginning of line

**control + C**\
Halts current command

**control + D**\
Deletes one character backward or logs out of the current session, similar to exit

**control + E**\
Moves to the end of line

## Basic Commands
#### You will probably use these commands a million times

The `clear` command clears up the terminal. No worries, it won't delete anything.
```
$ clear
```

The `pwd` **P**rints the **W**orking **D**irectory
```
$ pwd
```

## File Commands
#### These commands are best used with/on files

The `ls` command lists all the files and directories of the current working directory
```
$ ls 
$ ls -a
```
The `touch` command creates or updates your file.
```
$ touch <filename>
```
The `mv` command moves a file
```
$ mv <filename1> <filename2>
```

The `rm` command deletes files. ***Caution*** this deletes files immediately. You will not be able to recover anything deleted with this command.
```
$ rm <filename>
```


The `gzip` command compresses files
```
$ gzip <filename>
```

## Directory Commads
#### These commands are best used with/on directories

The `cd` command changes directories to wherever you tell the terminal
```
$ cd <directoryname>
```

The `mkdir` command creates a new directory with the name you chose.
```
$ mkdir <directoryname>
```
## System Information + More
#### These commands will help you know more about your machine during your bash instance

The `whoami` command returns your username
```
$ whoami
```

The `date` and `cal` show the current date and months calendar
```
$ date
$ cal
```
