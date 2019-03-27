-----------------------------------------------------------
-- Base de datos: `tiendavirtualdb`
-----------------------------------------------------------

-- --------------------------------------------------------
-----------------------------------------------------------
-- Estructura de tabla para la tabla `factura`
-----------------------------------------------------------
CREATE TABLE `factura`(
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--------------------------------------------------------------
-- Volcado de datos para la tabla `producto`
--------------------------------------------------------------

INSERT INTO `factura` (`id`, `fecha`, `total`) VALUES
(1, null, 25000),
(2, null, 35000);
-----------------------------------------------------------
-- Estructura de tabla para la tabla `factura`
-----------------------------------------------------------
CREATE TABLE `detalle_factura`(
  `id` int(11) NOT NULL,
  `id_factura` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-----------------------------------------------------------
-- Estructura de tabla para la tabla `categoria`
-----------------------------------------------------------

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `descripcion` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

---------------------------------------------------------------
-- Volcado de datos para la tabla `categoria`
---------------------------------------------------------------

INSERT INTO `categoria` (`id`, `nombre`, `estado`, `descripcion`) VALUES
(1, 'camisa', 1, 'ngociable con desceunto'),
(2, 'pantalon', 1, 'negociable');

-- --------------------------------------------------------

--------------------------------------------------------------
-- Estructura de tabla para la tabla `producto`
--------------------------------------------------------------

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `precio` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `foto` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--------------------------------------------------------------
-- Estructura de tabla para la tabla `comentario`
--------------------------------------------------------------

CREATE TABLE `mensaje` (
  `id` int(11) NOT NULL,
  `mensaje` varchar(50) COLLATE utf8_spanish_ci NULL,
  `valoracion` varchar(100) COLLATE utf8_spanish_ci NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;


--------------------------------------------------------------
-- Volcado de datos para la tabla `mensaje`
--------------------------------------------------------------

INSERT INTO `mensaje` (`id`, `mensaje`,`valoracion`) VALUES
(1, 'Muy buenos los productos',4),
(2, 'Tienen garantia?', 6),
(3, 'No me gustan de segunda jejej', 10)





--------------------------------------------------------------
-- Estructura de tabla para la tabla `mis_productos`
--------------------------------------------------------------

CREATE TABLE `mis_productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `id_producto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
--------------------------------------------------------------
-- Volcado de datos para la tabla `producto`
--------------------------------------------------------------

INSERT INTO `mis_productos` (`id`, `nombre`, 1) VALUES
(1, 'Pantalon', 2),
(2, 'Camisa de hombre', 1);

---------------------------------------------------------------
-- Ã�ndices para tablas volcadas
---------------------------------------------------------------

---------------------------------------------------------------
-- Indices de la tabla `factura`
----------------------------------------------------------------
ALTER TABLE `factura`
  ADD PRIMARY KEY (`id`);
  
  -- Indices de la tabla `factura`
----------------------------------------------------------------
ALTER TABLE `detalle_factura`
  ADD PRIMARY KEY (`id`);
  
  ----------------------------------------------------------------
-- Indices de la tabla `producto`
----------------------------------------------------------------
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_catetoria` (`id_catetoria`);
---------------------------------------------------------------
-- Indices de la tabla `categoria`
----------------------------------------------------------------
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);
  
  ---------------------------------------------------------------
-- Indices de la tabla `comentario`
----------------------------------------------------------------
ALTER TABLE `mensaje`
  ADD PRIMARY KEY (`id`);
  
  ---------------------------------------------------------------
-- Indices de la tabla `mis_productos`
----------------------------------------------------------------
ALTER TABLE `mis_productos`
  ADD PRIMARY KEY (`id`);
  



------------------------------------------------------------
-- AUTO_INCREMENT de las tablas volcadas
--------------------------------------------------------------

  -----------------------------------------------------------
-- AUTO_INCREMENT de la tabla `factura`
-----------------------------------------------------------
ALTER TABLE `factura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

    -----------------------------------------------------------
-- AUTO_INCREMENT de la tabla `detalle_factura`
-----------------------------------------------------------
ALTER TABLE `detalle_factura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;


-----------------------------------------------------------
-- AUTO_INCREMENT de la tabla `categoria`
-----------------------------------------------------------
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
  
  -----------------------------------------------------------
-- AUTO_INCREMENT de la tabla `categoria`
-----------------------------------------------------------
ALTER TABLE `mensaje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `mis_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

  
  alter table detalle_factura
add CONSTRAINT FOREIGN KEY
    fk_detalle_factura (id_factura)
    REFERENCES factura (id);
    
    
   alter table detalle_factura
add CONSTRAINT FOREIGN KEY
    fk_detalle_producto (id_producto)
    REFERENCES producto (id);
    
    
  
alter table producto
add CONSTRAINT FOREIGN KEY
    fk_producto_categoria (id_categoria)
    REFERENCES categoria (id);
