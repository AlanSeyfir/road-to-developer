       IDENTIFICATION DIVISION.
       PROGRAM-ID. "OBTAININPUT".
       AUTHOR.     ALAN GARCIA.
      *Comment in COBOL
       ENVIRONMENT DIVISION.

       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 NAME PIC A(20).
     
       PROCEDURE DIVISION.
           0100-START-HERE.
               DISPLAY "Enter your name: ".
               ACCEPT NAME.
               DISPLAY "Nice to meet you ", NAME.
       STOP RUN.
       END PROGRAM OBTAININPUT.
