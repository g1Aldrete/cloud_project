/* 5. Enter an EMPLOYEE last name and first name and retrieve a list of projects 
names/hours per week that the EMPLOYEE work on.
*/
SELECT * FROM PROJECT;
SELECT * FROM EMPLOYEE;
SELECT * FROM WORKS_ON;

SELECT Pname AS ProjectName, Hours AS hrsPerwk 
    FROM PROJECT AS P, EMPLOYEE AS E, WORKS_ON AS W
    WHERE E.Ssn= W.Essn AND W.Pno = P.Pnumber AND E.Fname = 'Johny' AND E.Lname = 'Smith';

/* 7. For each department, retrieve the departent name and
the number (count) of EMPLOYEES who work in that department. 
Order the results by number of EMPLOYEES in descending order  
*/  
SELECT Dname, COUNT(Dno) AS "Num of EMPLOYEES"
    FROM EMPLOYEE AS E, DEPARTMENT AS D
    WHERE E.Dno = D.Dnumber
    ORDER BY Dname;

