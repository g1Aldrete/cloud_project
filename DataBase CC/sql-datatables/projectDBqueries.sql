
PROMPT -- Event coordinator needs to know the unit cost of cream color table clothes.

SELECT  TC_TYPE AS "TABLE CLOTH TYPE",color AS "TYPE OF COLOR",SUM(cleaning_cost) AS "Table Cleaning Cost"
from FALL22_004_6_TABLE_CLOTHES
GROUP BY color,TC_TYPE
HAVING color = 'cream';

PROMPT--This query display the employee first and last name, event id and count they are assinged to

SELECT e.Emp_ID, e.E_First, e.E_Last, eve.EVENT_ID, count(*) as "total_events"
FROM FALL22_004_6_EMPLOYEE e LEFT OUTER JOIN FALL22_004_6_SALARY sa on sa.SAL_ID = e.Emp_ID
LEFT OUTER JOIN FALL22_004_6_EVENT_STAFF es on es.ESTAFF_ID = sa.SAL_ID
JOIN FALL22_004_6_EVENT eve on eve.staff_ID = es.ESTAFF_ID
GROUP BY e.Emp_ID, e.E_First, e.E_Last, eve.EVENT_ID
HAVING eve.EVENT_ID = 'ES1000027' OR eve.EVENT_ID = 'EX1000006' OR eve.EVENT_ID = 'CV0000008';

PROMPT -- Give the revenue for the convention center for year 2022 

SELECT SUM(COST_PER_EVENT) AS TOTAL_REVENUE
FROM FALL22_004_6_EVENT E, FALL22_004_6_HALL_RENTS HR
WHERE  E.EVENT_ID=HR.EVENT_ID AND EXTRACT(YEAR FROM E_DATE) = '2022';

PROMPT -- Give the revenue for the convention center for years 2019 TO  2022 

SELECT SUM(COST_PER_EVENT) AS TOTAL_REVENUE
FROM FALL22_004_6_EVENT E, FALL22_004_6_HALL_RENTS HR
WHERE  E.EVENT_ID=HR.EVENT_ID;

PROMPT -- Using ROLLUP give the Revenue for all events listed by Event ID and the Hall and the total
PROMPT revenue for the years 2019-2022

SELECT EVENT_ID, HALL_ID, SUM(COST_PER_EVENT) AS REVENUE
FROM FALL22_004_6_HALL_RENTS
GROUP BY ROLLUP (EVENT_ID, HALL_ID);

PROMPT -- Event coordinator wants the names of all hourly employees

SELECT E1.E_FIRST, E1.E_LAST
FROM FALL22_004_6_EMPLOYEE E1
WHERE E1.EMP_ID IN (
	SELECT E2.EMP_ID
	FROM FALL22_004_6_EMPLOYEE E2, FALL22_004_6_HOURLY
	WHERE E2.EMP_ID = HOURLY_ID);

PROMPT--Event coordinator needs to know the cashiers, technicians and waiters available to allocate in an event.

SELECT count(HOURLY_ID) as Available#, work_type
FROM FALL22_004_6_HOURLY
GROUP BY work_type;

PROMPT -- Fetch the top 10 alcoholic drinks that the Convetion Center carries.

SELECT D_NAME, D_TYPE
FROM FALL22_004_6_DRINK_TYPE
WHERE D_TYPE = 'alcoholic'
ORDER BY D_NAME ASC
FETCH FIRST 10 ROWS ONLY;

