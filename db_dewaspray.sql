-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 25, 2023 at 05:04 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_dewaspray`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_produk`
--

DROP TABLE IF EXISTS `tbl_produk`;
CREATE TABLE `tbl_produk` (
  `kode_barang` varchar(6) NOT NULL,
  `kelompok_barang` varchar(245) DEFAULT NULL,
  `nama_barang` varchar(254) DEFAULT NULL,
  `berat` double NOT NULL DEFAULT 0,
  `harga` bigint(20) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_produk`
--

INSERT INTO `tbl_produk` (`kode_barang`, `kelompok_barang`, `nama_barang`, `berat`, `harga`) VALUES
('B00001', 'Shoes', 'Geoff Max', 1, 235000);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_resi`
--

DROP TABLE IF EXISTS `tbl_resi`;
CREATE TABLE `tbl_resi` (
  `resi_id` varchar(254) NOT NULL,
  `nama_customer` varchar(245) DEFAULT NULL,
  `no_telp` varchar(15) DEFAULT NULL,
  `no_resi` varchar(35) NOT NULL,
  `kode_barang` varchar(6) NOT NULL,
  `harga` bigint(20) NOT NULL DEFAULT 0,
  `tanggal_pencatatan` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_resi`
--

INSERT INTO `tbl_resi` (`resi_id`, `nama_customer`, `no_telp`, `no_resi`, `kode_barang`, `harga`, `tanggal_pencatatan`) VALUES
('ajqweqwe1231231', 'Irwansyah', NULL, '18812131231', 'B00001', 235000, '2023-01-25 16:51:30');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_resi_activity`
--

DROP TABLE IF EXISTS `tbl_resi_activity`;
CREATE TABLE `tbl_resi_activity` (
  `resi_activity_id` varchar(254) NOT NULL,
  `resi_id` varchar(254) NOT NULL,
  `date` datetime NOT NULL,
  `description` text DEFAULT NULL,
  `location` varchar(254) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_resi_activity`
--

INSERT INTO `tbl_resi_activity` (`resi_activity_id`, `resi_id`, `date`, `description`, `location`) VALUES
('jhgjhgjh4535hgf', 'ajqweqwe1231231', '2023-01-25 17:00:41', 'RECEIVED AT INBOUND STATION [JAKARTA, ANGKE(DESP)]', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_produk`
--
ALTER TABLE `tbl_produk`
  ADD PRIMARY KEY (`kode_barang`);

--
-- Indexes for table `tbl_resi`
--
ALTER TABLE `tbl_resi`
  ADD PRIMARY KEY (`resi_id`),
  ADD UNIQUE KEY `no_resi` (`no_resi`),
  ADD KEY `kode_barang` (`kode_barang`);

--
-- Indexes for table `tbl_resi_activity`
--
ALTER TABLE `tbl_resi_activity`
  ADD PRIMARY KEY (`resi_activity_id`),
  ADD KEY `resi_id` (`resi_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_resi`
--
ALTER TABLE `tbl_resi`
  ADD CONSTRAINT `tbl_resi_ibfk_1` FOREIGN KEY (`kode_barang`) REFERENCES `tbl_produk` (`kode_barang`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_resi_activity`
--
ALTER TABLE `tbl_resi_activity`
  ADD CONSTRAINT `tbl_resi_activity_ibfk_1` FOREIGN KEY (`resi_id`) REFERENCES `tbl_resi` (`resi_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
