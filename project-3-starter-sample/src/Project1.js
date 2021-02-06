/**
 *
 * Get the contents for this file from Assignment 1
 * You dont have to add new logic
 *
 * We dont want any DOM manipulation here, because we
 * are using ReactJS now, so remove any document.getElementById
 * or any other DOM related code.
 *
 * Modify your previous functions so that they return
 * string(or any other data type) values so that we
 * can then use them in our components
 *
 * You have to export the function so that you can
 * import it in app.js
 * */

 
export function caesarEncrypt(clearText, shiftNum, shiftLeft) {

  let result = "";
  for (var i = 0; i < clearText.length; i++) {
    let num = clearText.charCodeAt(i);
    if (shiftLeft === true) {
      if (num >= 65 && num <= 90) {
        var newNum = num - shiftNum;
      } else if (num >= 97 && num <= 122) {
        var newNum = num - shiftNum;
      } else if (num >= 48 && num <= 57) {
        var newNum = num - shiftNum;
      } else {
        var newNum = num;
      }
    }

    if (shiftLeft === false) {
      if (num >= 65 && num <= 90) {
        var newNum = num + shiftNum;
      } else if (num >= 97 && num <= 122) {
        var newNum = num + shiftNum;
      } else if (num >= 48 && num <= 57) {
        var newNum = num + shiftNum;
      } else {
        newNum = num;
      }
    }
    if (newNum < 48 && num >= 48 && num <= 57) {
      newNum += 10;
    }
    if (newNum > 57 && num >= 48 && num <= 57) {
      newNum -= 10;
    }
    if (newNum < 65 && num >= 65 && num <= 90) {
      newNum += 26;
    }
    if (newNum > 90 && num >= 65 && num <= 90) {
      newNum -= 26;
    }
    if (newNum < 97 && num >= 97 && num <= 122) {
      newNum += 26;
    }
    if (newNum > 122 && num >= 97 && num <= 122) {
      newNum -= 26;
    }
    var newChar = String.fromCharCode(newNum);
    result += newChar;
  }
  return result;

}
