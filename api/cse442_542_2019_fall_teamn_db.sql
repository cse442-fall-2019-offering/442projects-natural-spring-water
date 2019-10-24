-- MySQL dump 10.13  Distrib 8.0.17, for Linux (x86_64)
--
-- Host: localhost    Database: cse442_542_2019_fall_teamn_db
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `title` varchar(64) DEFAULT NULL,
  `summary` varchar(512) DEFAULT NULL,
  `code` char(7) DEFAULT NULL,
  `associated_courses` varchar(2048) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES ('Introduction to Computer Science I','Provides the fundamentals of computer science with an emphasis on applying programming skills to solve problems and increase human efficiency. No previous programming experience required.','CSE 115',NULL),('Introduction to Computer Science II','Students will continue to develop the skills introduced in CSE 115 while exploring the details of program execution and the structure of large programs. Emphasizes design decisions that affect the efficiency, expandability, and maintainability of code while analyzing the differences amongst a variety of approaches. Design decisions analyzed include choice of data structures and object-oriented techniques such as encapsulation, polymorphism, and inheritance.','CSE 116','CSE 115'),('Introduction to Discrete Structures','Foundational material for further studies in computer science. Topics include logic, proofs, sets, functions, relations, recursion, recurrence relations, mathematical induction, graphs, trees, basic counting theory, regular languages, and context free grammars.','CSE 191','CSE 115'),('Systems Programming','This course is an introductory course on computer systems. It introduces computer systems from a programmer\'s perspective, rather than a system implementer\'s perspective, which prepares students for more advanced topics that discuss the internals of a computer system (e.g., operating systems or computer architecture). As a result, the focus of the course is teaching programmable interfaces of a computer system as well as how to use them correctly and effectively when writing a program.','CSE 220','CSE 116'),('Data Structures','Provides a rigorous analysis of the design, implementation, and properties of advanced data structures. Surveys library implementations of basic data structures in a high-level language. Advanced data structure implementations are studied in detail. Illustrates the importance of choosing appropriate data structures when solving a problem by programming projects in a high-level language.','CSE 250','CSE 116;CSE 191'),('Computer Organization','Basic hardware and software issues of computer organization.','CSE 341','CSE 220;CSE 241'),('Algorithms and Complexity','Introduces paradigms for designing algorithms and fundamental limitations to what algorithms can do. Covers basic algorithm design paradigms of greedy algorithms, divide and conquer algorithms and dynamic programming, as well as a selection of advanced algorithmic topics, such as randomized algorithms, algorithms for distributed systems and basic algorithms for machine learning. Coverage includes analyzing algorithms via proofs and programming assignments to implement algorithms.','CSE 331','CSE 250;CSE 191'),('Software Engineering','Examines in detail the software development process. Students in this course participate in a real-world project from conception to implementation.','CSE 442','CSE 250'),('Introduction to Programming Languages','Examines concepts and constructs found in programming languages. The major programming paradigms (procedural, object-oriented, functional, and logic) will be studied and compared. The course will also provide an introduction to syntax and semantics, compilation vs. interpretation, and storage management.','CSE 305','CSE 250'),('Introduction to Computer Security','This is an undergraduate-level course intended for junior and senior-level students and will teach them introductory concepts of computer security. The main foci of this course will be network, web security, and application security. Part of the work will be dedicated to ethical aspects of security, and online privacy. The course will be heavily hands-on, as opposed to theoretical teaching.','CSE 365','CSE 250'),('Introduction to Operating Systems','Covers the principles and techniques in the design of operating systems. Describes concepts of operating systems in terms of functions, structure, and implementation, particularly emphasizing multiprogramming. Illustrates concepts with examples from existing operating systems.','CSE 421','CSE 250'),('Digital Systems','A course in digital principles which includes the following topics: fundamentals of digital logic, number systems, codes, computer arithmetic, Boolean algebra, minimization techniques, basic components of digital circuits such as logic gates and flip-flops, design of combinational and sequential circuits, memory devices, and programming logic. Recommended for sophomore-level students.','CSE 241',NULL);
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-20 18:20:29
