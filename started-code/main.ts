import { StringManipulationService } from "./main-service";
import { NumberManipulationService } from "./main-service";

class StringManipulations implements StringManipulationService {
  print(word: string): void {
    console.log("Original : " + word);

    console.log("lowercase : " + word.toLowerCase());

    console.log("uppercase : " + word.toUpperCase());

    console.log("Character At 5 : " + word.charAt(4));
    let str: string = "FACEPrep";
    console.log("Concatenation : " + word.concat(str));

    console.log("Length of " + word + ": " + word.length);

    console.log("Sliced String : " + word.slice(2, 5));
  }

  printWithSpace(sentence: string): void {
    console.log(sentence.split(" ").join(" "));
  }

  findVowel(str: string): void {
    var vowelCount = 0;

    for (var i = 0; i <= str.length - 1; i++) {
      if (
        str.charAt(i) == "a" ||
        str.charAt(i) == "e" ||
        str.charAt(i) == "i" ||
        str.charAt(i) == "o" ||
        str.charAt(i) == "u"
      )
        vowelCount++;
    }
    console.log(" Vowels : " + vowelCount);
  }
}

class NumbersManipulations implements NumberManipulationService {
  findPrime(num: number): void {
    let n: number = 1,
      factor_count: number = 0;
    while (n <= num) {
      {
        if (num % n == 0) factor_count++;
      }
      n++;
    }
    if (factor_count == 2) {
      console.log(num + " is a prime number");
    } else {
      console.log(num + " is non-prime number");
    }
  }

  findMagic(num: number): void {
    if (num % 9 == 1) {
      console.log(num + " is a Magic Number");
    } else {
      console.log(num + "is Not a Magic Number");
    }
  }
}

var word = "ProGrad";
var stringMan = new StringManipulations();
stringMan.print(word);
stringMan.printWithSpace(word);
stringMan.findVowel(word);

var num = 3;
var numMan = new NumbersManipulations();
numMan.findPrime(num);
numMan.findMagic(199);
