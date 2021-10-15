       IDENTIFICATION DIVISION.
       PROGRAM-ID. "CALCBMI".
       AUTHOR. ALAN GARCIA.

       ENVIRONMENT DIVISION.

       DATA DIVISION.
       WORKING-STORAGE SECTION.
      *If you add another 9 it will be 3 digits 100,200 but I need 2
       01 HEIGHT_INCH PIC 999.
       01 WEIGHT PIC 9999.
       01 BMI PIC 99V99.

       PROCEDURE DIVISION.
           0100-START-HERE.
           DISPLAY "CALCULATOR OF BMI".
           DISPLAY "Please enter your height (inches): ".
           ACCEPT HEIGHT_INCH.
           DISPLAY "Please enter your weight in pounds: "
           ACCEPT WEIGHT.
           COMPUTE BMI = WEIGHT * 703 / (HEIGHT_INCH * HEIGHT_INCH)
           DISPLAY "Here is BMI: ", BMI, "%".
       STOP RUN.
       END PROGRAM "CALCBMI".
