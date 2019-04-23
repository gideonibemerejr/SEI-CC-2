# GA SEI Homework and Labs 

---

### Introduction

I've created this directory to make uploading homework and labs easier to do and easier to find.  Each week's deliverables will be uploaded here __unless otherwise instructed__.

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
4. Go ahead and `cd` into your /SEI-CC-22 directory and run the following:
   ```
   $ cd work
   ```
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
6. You are going to create a directory inside the work/ (on the same level as /w01) called */hw-01*. Run: 
   ```
   $ mkdir hw-w01 && cd hw-w01
   ```
   ```
   $ mkdir d1 && cd d1
   ```
7. Nice job! You've just made the first week's homework directory and the first day's directory. Now you can use the touch command to create the file(s) for d1 homework. If you run `$ tree` in your work directory you should see something like this:
    ```
    /work
        /hw-w01
            /d1
                <filename>
        /w01
            /d1
                /01-topic
                /02-topic
                /03-topic
                /04-topic
                /05-topic
                /hw-topic
            ...
    ```

8. When you want to create the next day's files, you'll just have to run:
   ```
   $ mkdir d<number> && cd d<number>
   $ touch // your homework deliverable file(s)
   ```
   Where instead of `<number>` you would use the day number. Here is an example of creating the fifth day's directory:
   ```
   $ mkdir d5 && cd d5
   $ touch index.html && touch someStyles.css
   ```
