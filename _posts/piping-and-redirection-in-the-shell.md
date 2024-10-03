---
title: '|, >, >>, <, <<, <<<, <() Piping and Redirection in the Shell'
date: '2020-01-06T22:53:59.386Z'
---

Lately I've been learning Vim more in depth, beyond just Vim's modal editing. With that, I've been learning more about Unix and the shell. As they say, "Unix is an IDE", and Vim is just one of its tools. I'm going to keep it simple and use the terms input & output to refer to stdin & stdout, the more technically correct terms here.

`program > file` Redirects the output of a program to a file. If the file exists, it will be overwritten (be careful).

`program >> file` Redirects the output of a program to a file. If the file exists, it will be appended to (safer option).

`program < file` Redirects a file to be the input of a program. From what I can tell, this is rarely useful on its own, since nearly all programs which accept an input stream, also accept a file argument. Hence, these two are equivalent: `cat < file` & `cat file`. More details on that here:  
[How does input redirection work? - Ask Ubuntu](https://askubuntu.com/a/883822)

`output | program` Redirects the output of a program, to be the input of another program.  
Example: `echo $PATH | less`  
This is functionally equivalent to:  
`echo $PATH > temp_file && less < temp_file`

## Herestrings & Heredocs

[Here Strings - The Linux Documentation Project](https://tldp.org/LDP/abs/html/x17837.html)

`program <<< string` Redirects a string to be the input of a program (stdin).  
Example:  
`python <<< "print(len('Dude no way'))"
11`

`program << delimiter
multi-line string
delimiter` Redirects a multi-line string to be the input of a program (stdin).  
Example:  
```bash
python << EOF
heredoc> print('Sooo')
heredoc> print('Powerful')
heredoc> EOF
Sooo
Powerful
```
EOF (end of file) is just a convention here, the delimiter could be almost any sequence of characters.

## Process Substitution

`program <(output)` Redirects the output of a program to a temp file, to be treated as a file argument.  
Examples:  
```bash
$ ls -l <(echo hi)
lr-x------ 1 zach zach 64 Oct  3 07:35 /proc/self/fd/11 -> 'pipe:[23068]'

$ cat <(echo hi)
hi

$ echo foo | python3 <(echo "import sys; print('python stdin:', sys.stdin.read())")
python stdin: foo

# Useful for vim diffing outputs, since vimdiff only accepts file arguments
$ vimdiff <(/usr/local/bin/vim --version) <(/usr/bin/vim --version)
...
```
