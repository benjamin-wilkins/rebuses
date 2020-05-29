# Rebuses

A simple rebus game - live demo [here](https://benjamin-wilkins.github.io/rebuses/).

## Add a new rebus

To do this you don't even need to know how to code.

Step 1 - Make sure you have a github account. If not, press [here](https://github.com/join)

Step 2 - Fork the repository by pressing the Fork button in the top right. The repository should now be forked to your own github account. Then press 'Branch: **master**' and type `AddNewRebus` before pressing 'Create branch: **AddNewRebus** from master'

Step 3 - Clone the repostitory. Press 'Clone or Download' and copy the link. Then open the terminal, and type:

```shell
git clone LINK THAT YOU COPIED
git checkout AddNewRebus
```

where `LINK THAT YOU COPIED` is the link that you copied. This also creates a new branch.

Step 4 - Add a new rebus:
  - Open script.js (inside the rebuses folder)
  - Look for the bit saying `var hint = document.getElementById("hint");`
  - Before the `];` and after the last `}` insert this:
    ```javascript
     ,
    {
      "rebus" : "YOUR REBUS",
      "answer" : "ANSWER",
      "hint" : "YOUR HINT"
    }
    ```
    Replace `YOUR REBUS` with symbols and emoji to show what the answer is without saying what the answer is, `ANSWER` with the answer (All uppercase) and `YOUR HINT` with a hint.

Step 5 - Take a look! Open index.hml in your web browser.

Step 6 - Commit and push:
  - Open the terminal and type: `git add script.js` - this adds script.js to the lish of files to be commited.
  - Type: `git commit -am "COMMIT MESSAGE"` - this commits the file.
  - Type: `git push origin AddNewRebus` - This puts it on to github.

Step 7 - Create a pull request:
  - Back on github, press **New pull request**
  - Press 'compare across forks'
  - In the base fork menu, select **benjamin-wilkins/rebuses** and base **master**
  - In the head fork menu, select ***username*/rebuses** where *username* is your github username and compare **AddNewRebus**.
  - Add a title and a description of the changes you have made.
  - **Press Create Pull Request**
  - I will merge your pull request.
