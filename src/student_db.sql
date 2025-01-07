-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 06, 2025 at 03:37 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `student_db`
---
----------------------------------------------------------------

---table student attributes--

CREATE TABLE `student` (
  `id` int(13) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `enrollmentdate` date NOT NULL DEFAULT current_timestamp(),
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
COMMIT;
--data for table student from student_db-----
INSERT INTO `student` (`id`, `firstName`, `lastName`, `email`, `enrollmentDate`, `createdAt`, `updatedAt`) VALUES
(4, 'Wednesday', 'Addams', 'fridayaddams@nevermore.com', '2024-11-13', '2024-11-13 12:00:13.446562', '2024-11-15 18:00:00.000000'),
(18, '', '', '', '0000-00-00', '2024-12-28 18:20:55.788779', '2024-12-28 18:21:12.000000');

---table subjects------