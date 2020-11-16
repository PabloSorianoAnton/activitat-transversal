-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Temps de generació: 16-11-2020 a les 23:23:35
-- Versió del servidor: 10.1.38-MariaDB
-- Versió de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dades: `bd_cursa`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `nombre_categoria` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `sexo_categoria` enum('Hombre','Mujer','Discapacidad','') COLLATE utf8_unicode_ci NOT NULL,
  `edad_minima` int(2) NOT NULL,
  `edad_maxima` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Bolcament de dades per a la taula `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `nombre_categoria`, `sexo_categoria`, `edad_minima`, `edad_maxima`) VALUES
(1, '0-6 años Hombre', 'Hombre', 0, 6),
(2, '7-14 años Hombre', 'Hombre', 7, 14),
(3, '15-20 años Hombre', 'Hombre', 15, 20),
(4, '21-30 años Hombre', 'Hombre', 21, 30),
(5, '31-60 años Hombre', 'Hombre', 31, 60),
(6, '61-99 años Hombre', 'Hombre', 61, 99),
(7, '0-6 años Mujer', 'Mujer', 0, 6),
(8, '7-14 años Mujer', 'Mujer', 7, 14),
(9, '15-20 años Mujer', 'Mujer', 15, 20),
(10, '21-30 años Mujer', 'Mujer', 21, 30),
(11, '31-60 años Mujer', 'Mujer', 31, 60),
(12, '61-99 años Mujer', 'Mujer', 61, 99),
(14, '0-6 años Discapacidad', 'Discapacidad', 0, 6),
(15, '7-14 años Discapacidad', 'Discapacidad', 7, 14),
(16, '15-20 años Discapacidad', 'Discapacidad', 15, 20),
(17, '21-30 años Discapacidad', 'Discapacidad', 21, 30),
(18, '31-60 años Discapacidad', 'Discapacidad', 31, 60),
(19, '61-99 años Discapacidad', 'Discapacidad', 61, 99);

-- --------------------------------------------------------

--
-- Estructura de la taula `cursa`
--

CREATE TABLE `cursa` (
  `id_cursa` int(11) NOT NULL,
  `km_cursa` int(5) NOT NULL,
  `lugar_cursa` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `dorsal_inscripcion` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de la taula `inscripcion`
--

CREATE TABLE `inscripcion` (
  `dorsal_inscripcion` int(10) NOT NULL,
  `pagado_o_no` enum('Sí','No','','') COLLATE utf8_unicode_ci NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `dni_participante` varchar(9) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Bolcament de dades per a la taula `inscripcion`
--

INSERT INTO `inscripcion` (`dorsal_inscripcion`, `pagado_o_no`, `id_categoria`, `dni_participante`) VALUES
(32, '', 1, '27463281Q'),
(50, '', 1, '78779238Y'),
(51, '', 1, '63920419S');

-- --------------------------------------------------------

--
-- Estructura de la taula `participante`
--

CREATE TABLE `participante` (
  `dni_participante` varchar(9) COLLATE utf8_unicode_ci NOT NULL,
  `edad_participante` date NOT NULL,
  `nombre_participante` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `papellido` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `sapellido` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Bolcament de dades per a la taula `participante`
--

INSERT INTO `participante` (`dni_participante`, `edad_participante`, `nombre_participante`, `papellido`, `sapellido`, `email`) VALUES
('27463281Q', '2020-11-12', 'juan', '57656', 'trukruk', 'admin@admin.com'),
('45153526H', '2020-11-14', 'camarero1', 'QWRGWTH', 'QETHWETH', 'admin@admin.com'),
('48067875Z', '0000-00-00', 'camarero1', 'QWRGWTH', 'QETHWETH', 'admin@admin.com'),
('63920419S', '2020-11-05', 'camarero1', 'QWRGWTH', 'QETHWETH', 'admin@admin.com'),
('78779238Y', '2020-11-12', 'camarero1', 'QWRGWTH', 'QETHWETH', 'random@random.com');

--
-- Índexs per a les taules bolcades
--

--
-- Índexs per a la taula `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Índexs per a la taula `cursa`
--
ALTER TABLE `cursa`
  ADD PRIMARY KEY (`id_cursa`),
  ADD KEY `FK_inscripcion_cursa` (`dorsal_inscripcion`);

--
-- Índexs per a la taula `inscripcion`
--
ALTER TABLE `inscripcion`
  ADD PRIMARY KEY (`dorsal_inscripcion`),
  ADD KEY `FK_categoria_inscripcion` (`id_categoria`),
  ADD KEY `FK_participante_inscripcion` (`dni_participante`);

--
-- Índexs per a la taula `participante`
--
ALTER TABLE `participante`
  ADD PRIMARY KEY (`dni_participante`);

--
-- AUTO_INCREMENT per les taules bolcades
--

--
-- AUTO_INCREMENT per la taula `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT per la taula `cursa`
--
ALTER TABLE `cursa`
  MODIFY `id_cursa` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la taula `inscripcion`
--
ALTER TABLE `inscripcion`
  MODIFY `dorsal_inscripcion` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- Restriccions per a les taules bolcades
--

--
-- Restriccions per a la taula `cursa`
--
ALTER TABLE `cursa`
  ADD CONSTRAINT `FK_inscripcion_cursa` FOREIGN KEY (`dorsal_inscripcion`) REFERENCES `inscripcion` (`dorsal_inscripcion`);

--
-- Restriccions per a la taula `inscripcion`
--
ALTER TABLE `inscripcion`
  ADD CONSTRAINT `FK_categoria_inscripcion` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`),
  ADD CONSTRAINT `FK_participante_inscripcion` FOREIGN KEY (`dni_participante`) REFERENCES `participante` (`dni_participante`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
