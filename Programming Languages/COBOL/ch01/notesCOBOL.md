## Execute the cobol file
1. `cd ..`
2. `cd ..`
3. `cd mnt`
4. `cd c`
5. `cd cobol` I created in C: a folder named "cobol" to easy access
6. `cobc -x obtaininput.cbl` Make an executable of the file, the name of he file as you can see I ignored the capital letters
7. `./obtaininput` To run the executable. No need to add the extension (.cbl)
8. Voila you run your code

## IDENTIFICATION DIVISION
`PROGRAM-ID. "project-name".` Is mandatory
Rest of the headers are optional

Apparently the order when you put the variables and when you put
the `ACCEPT name_variable` IT MATTERS. (see calcbmi.cbl)