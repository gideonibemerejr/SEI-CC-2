# GA SEI Homework Area

---

### Introduction

I've created this directory to make uploading homework easier to do and easier to find.  Each week's deliverables will be uploaded here __unless otherwise instructed__.

### Documentation (How you can do it too)
#### macOS Setup
1. Instead of using homebrew and tree, you can also follow the **Repo Structure** section in our <a href="https://git.generalassemb.ly/gideonjr/SEI-CC-2 " target="_blank">SEI-CC-22 </a> README file, but thats no way to learn...

2. Make sure you have homebrew __and__ tree installed by running the following in your terminal: 
    ```
    $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```
3. Once hombrew is installed run:
    ```
    $ brew install tree
    ```
4. cd into your SEI-CC-22 directory, cd into the work directory and run:
   ```
   $ tree
   ```
5. You should see something similar to this:
    ```
    /work
      /w01
          /d1
            /01-topic
            /02-topic
            /03-topic
            /04-topic
            /05-topic
            /hw-topic
    ```
6. You are going to create a directory on the same level as /w01 called */hw-01*. Run: 
   ```
   $ mkdir hw-w01 && cd hw-w01
   ```
   ```
   $ mkdir d1 && cd d1
   ```
7. Nice job! You've just made the first week's homework directory and the first day's directory. Now you can use the touch command to create the file(s) for d1 homework. 
8. When you want to create the next day's files, you'll just have to run:
   ```
   $ mkdir d(num) && cd d(num)
   $ touch // your homework deliverable file(s)
   ```
   Where instead of (num) you would use the day number. Here is an example of creating the fifth day's directory:
   ```
   $ mkdir d5 && cd d5
   $ touch index.html && touch someStyles.css
   ```