CREATE DATABASE SAPS; /*Creates the SAPS database*/

USE SAPS; /*Select and work in this database*/

/*Creates a table of students requesting a course permission*/
CREATE TABLE STUDENTS(STUDENT_ID INT(9), STUDENT_NAME CHAR(20), MAJOR CHAR(40), DATE_REQUEST DATETIME, SEMESTER_UNITS TINYINT(25), COURSE_REQUESTED INT(5), TIME_REQUESTED TIMESTAMP, PRIMARY KEY(STUDENT_ID));

/*Creates a table of administrators*/
CREATE TABLE ADMINISTRATORS(ADMIN_ID INT(9), ADMIN_NAME CHAR(20), LEVELA TINYINT(3), DATE_LOGIN DATETIME, PRIMARY KEY(ADMIN_ID));

/*Creates a table of courses that are available*/
CREATE TABLE COURSE(COURSE_ID INT(5), COURSE_NAME CHAR(50), COURSE_CODE VARCHAR(50), SEMESTER YEAR(4), INSTRUCTOR CHAR(50), SECTION INT(10), PERIOD VARCHAR(20),PRIMARY KEY(COURSE_ID));

/*Creating a table of requirements*/
CREATE TABLE DEPENDENCIES(DEP_ID INT(5), SHORT_CODE VARCHAR(10),COURSE_NAME CHAR(50), COURSE_CODE VARCHAR(50), PRIMARY KEY(DEP_ID));

/*Places a student record into the STUDENTS table*/
INSERT INTO STUDENTS(STUDENT_ID, STUDENT_NAME, MAJOR, SEMESTER_UNITS, COURSE_REQUESTED)
VALUES  (109151807, 'ROBERTO GONZALEZ', 'COMPUTER SCIENCE', 17, 16622),
        (133245182, 'ERIN VASQUEZ', 'COMPUTER SCIENCE', 14, 15232),
        /*
        *   LIST STUDENTS WHO SUBMITTED A REQUEST FOR ADDING COURSES.
        */
        (185259204, 'LESLIE HYDE', 'COMPUTER SCIENCE', 15, 12474);


/*Inserts a administrator*/
INSERT INTO ADMINISTRATORS(ADMIN_ID, ADMIN_NAME, LEVELA)
VALUES  (102942539, 'LUCAS LEPTON', 3),
        (113452349, 'HALEY YOUNG', 2);

/*Adds a course available to request*/
INSERT INTO COURSE(COURSE_ID, COURSE_NAME, COURSE_CODE, SEMESTER, INSTRUCTOR, SECTION, PERIOD)
VALUES  (16622, 'ADVANCE CALCULUS', 'CALC 150A', 2019, 'DR. CHARLES', 17323, '09:00 AM - 10:00 PM'),
        (15232, 'LINEAR ALGEBRA', 'MATH 262', 2019, 'DR. KLEIN', 17257, '11:00 AM - 12:15O PM'),
        /*
        *   ONLY ADD COURSES THAT ARE AVAILABLE...
        */
        (16649, 'SENIOR DESIGN PROJECT I', 'COMP 491', 2019, 'DR. WEIGLEY', 15362, '09:30 AM - 10:45 AM');

/*INSERTING VALUES INTO COURSE DEPENDENCY*/
INSERT INTO DEPENDENCIES(DEP_ID, SHORT_CODE,COURSE_NAME, COURSE_CODE)
VALUES  (15342, 'PHIL 230', 'INTRODUCTION TO LOGICAL THOUGHT', 45623),
        (17482, 'COMP 380', 'INTRODUCTION TO SOFTWARE ENGINEERING', 53563),
        /*
        *   CONTINUE ADDING COURSES HERE...
        */
        (18394, 'COMP 322', 'INTRODUCTION TO OPERATING SYSTEM DESIGN', 48482);