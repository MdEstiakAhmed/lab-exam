-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2020 at 10:58 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online_computer_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` int(3) NOT NULL,
  `company_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `company_name`) VALUES
(300, 'dell'),
(301, 'asus');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `p_id` int(3) NOT NULL,
  `p_name` varchar(20) NOT NULL,
  `price` int(10) NOT NULL,
  `company_id` int(3) NOT NULL,
  `p_sub_category_id` int(3) NOT NULL,
  `p_category_id` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`p_id`, `p_name`, `price`, `company_id`, `p_sub_category_id`, `p_category_id`) VALUES
(400, 'd5200 1080p', 10000, 300, 501, 600),
(401, 'A800 QHD', 8000, 301, 502, 600),
(403, 'A525 QHD', 7500, 301, 502, 600);

-- --------------------------------------------------------

--
-- Table structure for table `product_category`
--

CREATE TABLE `product_category` (
  `p_category_id` int(3) NOT NULL,
  `p_category_name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_category`
--

INSERT INTO `product_category` (`p_category_id`, `p_category_name`) VALUES
(600, 'monitor');

-- --------------------------------------------------------

--
-- Table structure for table `product_sub_category`
--

CREATE TABLE `product_sub_category` (
  `p_sub_category_id` int(3) NOT NULL,
  `p_sub_category_name` varchar(20) NOT NULL,
  `p_category_id` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_sub_category`
--

INSERT INTO `product_sub_category` (`p_sub_category_id`, `p_sub_category_name`, `p_category_id`) VALUES
(501, 'lcd', 600),
(502, 'qhd', 600);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `type`) VALUES
(1, 'admin', 'admin@hotmail.com', 'admin', 'admin'),
(2, 'user', 'user@hotmail.com', 'user', 'user'),
(3, 'Dr. Enoch Beahan', 'Ansel.Breitenberg11@gmail.com', 'test', 'user'),
(4, 'Cielo Dickens', 'Gustave.Waelchi7@yahoo.com', 'test', 'user'),
(5, 'Hector Marks', 'Lysanne91@yahoo.com', 'test', 'user'),
(6, 'Jerald Kunze', 'Kelvin98@gmail.com', 'test', 'user'),
(7, 'Karson Heaney', 'Sibyl22@gmail.com', 'test', 'user'),
(8, 'Aisha Halvorson', 'Kylee.Powlowski@gmail.com', 'test', 'user'),
(9, 'Danyka Effertz', 'Jordi_Casper31@yahoo.com', 'test', 'user'),
(10, 'Casey Conn', 'Valentina38@hotmail.com', 'test', 'user'),
(11, 'Coty Marvin', 'Sallie61@hotmail.com', 'test', 'user'),
(12, 'Helena Beier', 'Earl.Tromp@hotmail.com', 'test', 'user'),
(13, 'Fannie Walker', 'Jermaine59@yahoo.com', 'test', 'user'),
(14, 'Sharon Lebsack', 'Elmira_Price@hotmail.com', 'test', 'user'),
(15, 'Mrs. Jacinthe Schamberger', 'Donato.Schimmel@yahoo.com', 'test', 'user'),
(16, 'Rosanna Schiller', 'Muriel_Will12@hotmail.com', 'test', 'user'),
(18, 'estiak', 'estiak@gmail.com', 'test', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`p_category_id`);

--
-- Indexes for table `product_sub_category`
--
ALTER TABLE `product_sub_category`
  ADD PRIMARY KEY (`p_sub_category_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=303;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `p_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=404;

--
-- AUTO_INCREMENT for table `product_category`
--
ALTER TABLE `product_category`
  MODIFY `p_category_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=601;

--
-- AUTO_INCREMENT for table `product_sub_category`
--
ALTER TABLE `product_sub_category`
  MODIFY `p_sub_category_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=504;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
