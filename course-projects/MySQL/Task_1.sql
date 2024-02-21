##########################################################
##########################################################

-- SECTION: Combining SQL and Tableau - Task 1

##########################################################
########################################################## 

## Task 1

SELECT 
    emp_no, from_date, to_date
FROM
    t_dept_emp;
    
SELECT DISTINCT
    emp_no, from_date, to_date
FROM
    t_dept_emp;

SELECT 
	YEAR(from_date) AS calendar_year,
    gender,
    COUNT(e.emp_no) AS num_of_employees
FROM
	t_employees e
    JOIN
	t_dept_emp d ON d.emp_no = e.emp_no
GROUP BY calendar_year, e.gender
HAVING calendar_year >= 1990;