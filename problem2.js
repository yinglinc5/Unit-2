function getLetterGrade(score) {
    if (score < 0) console.log("Invalid score")
    else if (score > 100) console.log("Invalid score")
    else if (score < 60 ) console.log("F");
    else if (score >= 60 && score <= 69) console.log("D");
    else if (score >= 70 && score <= 79) console.log("C");
    else if(score >= 80 && score <= 89) console.log("B");
    else if(score >= 90) console.log("A");

}
getLetterGrade(95);
getLetterGrade(82);
getLetterGrade(59);
getLetterGrade(-5);
getLetterGrade();