-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 03-02-2024 a las 14:45:22
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tareaMigSeedNode_dev`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Roles`
--

CREATE TABLE `Roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Roles`
--

INSERT INTO `Roles` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin', '2024-01-22 10:03:32', '2024-01-22 10:03:32'),
(2, 'Programador', '2024-01-22 10:03:32', '2024-01-22 10:03:32');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Rol_Asignados`
--

CREATE TABLE `Rol_Asignados` (
  `id` int(11) NOT NULL,
  `id_rol` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Rol_Asignados`
--

INSERT INTO `Rol_Asignados` (`id`, `id_rol`, `id_usuario`, `createdAt`, `updatedAt`) VALUES
(1, 2, 1, '2024-01-22 10:19:31', '2024-01-22 10:19:31'),
(2, 2, 4, '2024-01-22 10:19:31', '2024-01-22 10:19:31'),
(4, 1, 3, '2024-01-22 10:19:31', '2024-01-22 10:19:31'),
(5, 1, 6, '2024-01-22 10:19:31', '2024-01-22 10:19:31'),
(6, 2, 6, '2024-01-22 10:19:31', '2024-01-22 10:19:31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20240116185326-create-user.js'),
('20240121203206-create-roles.js'),
('20240121203217-create-rol-asignado.js'),
('20240121203253-create-tarea.js'),
('20240121203310-create-tarea-asignada.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Tareas`
--

CREATE TABLE `Tareas` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `dificultad` varchar(255) DEFAULT NULL,
  `horas_previstas` int(11) DEFAULT NULL,
  `horas_realizadas` int(11) DEFAULT NULL,
  `porcentaje_realizacion` int(11) DEFAULT NULL,
  `completada` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Tareas`
--

INSERT INTO `Tareas` (`id`, `descripcion`, `dificultad`, `horas_previstas`, `horas_realizadas`, `porcentaje_realizacion`, `completada`, `createdAt`, `updatedAt`) VALUES
(1, 'Tarea creada desde cliente 3', 'S', 10, 0, 0, 0, '2024-02-03 13:02:23', '2024-02-03 13:02:23'),
(2, 'Tarea 2 ', 'XL', 13, 10, 80, 0, '2024-02-02 19:52:34', '2024-02-03 13:12:00'),
(3, 'Tarea', 'XL', 13, 10, 80, 0, '2024-02-02 19:52:48', '2024-02-03 13:13:01'),
(4, 'Tarea 2', 'XL', 13, 10, 80, 1, '2024-02-02 19:52:49', '2024-02-02 19:52:49'),
(5, 'Tarea 2', 'XL', 13, 10, 80, 0, '2024-02-02 19:52:49', '2024-02-02 19:52:49'),
(6, 'Tarea 2', 'XL', 13, 10, 80, 0, '2024-02-02 19:52:49', '2024-02-02 19:52:49'),
(7, 'Tarea 2', 'XL', 13, 10, 80, 0, '2024-02-02 19:52:50', '2024-02-02 19:52:50'),
(8, 'Tarea 2', 'XL', 13, 10, 80, 0, '2024-02-02 19:52:50', '2024-02-02 19:52:50'),
(9, 'Tarea 2', 'XL', 13, 10, 80, 0, '2024-02-02 19:52:50', '2024-02-02 19:52:50'),
(40, 'Tarea creada y modificada desde cliente', 'XL', 20, 12, 40, 0, '2024-02-02 19:58:32', '2024-02-02 19:59:13'),
(42, 'Tarea creada desde cliente 2', 'XL', 10, 3, 20, 0, '2024-02-03 12:47:31', '2024-02-03 12:47:31'),
(45, 'Tarea', 'XL', 13, 10, 80, 0, '2024-02-03 13:13:17', '2024-02-03 13:13:17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Tarea_Asignadas`
--

CREATE TABLE `Tarea_Asignadas` (
  `id` int(11) NOT NULL,
  `id_tarea` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Tarea_Asignadas`
--

INSERT INTO `Tarea_Asignadas` (`id`, `id_tarea`, `id_usuario`, `createdAt`, `updatedAt`) VALUES
(1, 1, 6, '2024-02-02 20:55:06', '2024-02-02 20:55:06'),
(2, 2, 6, '2024-02-02 20:55:06', '2024-02-02 20:55:06'),
(3, 3, 4, '2024-02-02 20:56:41', '2024-02-02 20:56:41'),
(4, 4, 6, '2024-02-02 20:56:41', '2024-02-02 20:23:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Users`
--

INSERT INTO `Users` (`id`, `nombre`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Hailey', 'Homero_LongoriaPaez@yahoo.com', '$2b$10$btUQwbuIqF.KguigVLbGOeRI/sfdEpQPXUJEr/LTSbmTKz3hLvQa2', '2024-01-22 10:01:31', '2024-01-22 10:01:31'),
(3, 'Admin', 'admin@correo.com', 'admin1234', '2024-01-22 10:01:31', '2024-02-02 20:10:19'),
(4, 'Taylor Swift', 'correo@usuario.com', 'user1234', '2024-01-22 10:01:31', '2024-01-22 10:01:31'),
(6, 'Taylor Swift', 'correo@todosroles.com', 'admin1234', '2024-01-22 18:11:01', '2024-01-24 12:59:17');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Rol_Asignados`
--
ALTER TABLE `Rol_Asignados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `Tareas`
--
ALTER TABLE `Tareas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Tarea_Asignadas`
--
ALTER TABLE `Tarea_Asignadas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Roles`
--
ALTER TABLE `Roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `Rol_Asignados`
--
ALTER TABLE `Rol_Asignados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `Tareas`
--
ALTER TABLE `Tareas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT de la tabla `Tarea_Asignadas`
--
ALTER TABLE `Tarea_Asignadas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
