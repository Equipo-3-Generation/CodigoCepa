-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema hermediadb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hermediadb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hermediadb` DEFAULT CHARACTER SET utf8 ;
USE `hermediadb` ;

-- -----------------------------------------------------
-- Table `hermediadb`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hermediadb`.`Usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nombre_usuario` VARCHAR(70) NOT NULL,
  `apellido_usuario` VARCHAR(60) NOT NULL,
  `numero_telefono` VARCHAR(15) NOT NULL,
  `email` VARCHAR(60) NOT NULL,
  `password` VARCHAR(15) NOT NULL,
  `direccion` VARCHAR(160) NOT NULL,
  `pais` VARCHAR(50) NOT NULL,
  `region` VARCHAR(50) NOT NULL,
  `ciudad` VARCHAR(50) NOT NULL,
  `codigo_postal` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE INDEX `idUsuario_UNIQUE` (`id_usuario` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `numeroTelefono_UNIQUE` (`numero_telefono` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hermediadb`.`Pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hermediadb`.`Pedido` (
  `id_Pedido` INT NOT NULL AUTO_INCREMENT,
  `fecha_pedido` DATE NOT NULL,
  `fecha_entrega` DATE NOT NULL,
  `status` VARCHAR(20) NOT NULL,
  `Usuario_id_usuario` INT NOT NULL,
  PRIMARY KEY (`id_Pedido`, `Usuario_id_usuario`),
  UNIQUE INDEX `id_Pedido_UNIQUE` (`id_Pedido` ASC) VISIBLE,
  INDEX `fk_Pedido_Usuario_idx` (`Usuario_id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_Pedido_Usuario`
    FOREIGN KEY (`Usuario_id_usuario`)
    REFERENCES `hermediadb`.`Usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hermediadb`.`Pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hermediadb`.`Pago` (
  `id_pago` VARCHAR(50) NOT NULL,
  `forma_pago` VARCHAR(45) NOT NULL,
  `fecha_pago` DATE NOT NULL,
  `total_pago` DECIMAL(15,2) NOT NULL,
  `Usuario_id_usuario` INT NOT NULL,
  PRIMARY KEY (`id_pago`, `Usuario_id_usuario`),
  UNIQUE INDEX `id_pago_UNIQUE` (`id_pago` ASC) VISIBLE,
  INDEX `fk_Pago_Usuario1_idx` (`Usuario_id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_Pago_Usuario1`
    FOREIGN KEY (`Usuario_id_usuario`)
    REFERENCES `hermediadb`.`Usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hermediadb`.`Categoria_producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hermediadb`.`Categoria_producto` (
  `categoria_producto` VARCHAR(50) NOT NULL,
  `material` VARCHAR(50) NOT NULL,
  `dimensiones` VARCHAR(45) NOT NULL,
  `peso` DECIMAL(15,2) NOT NULL,
  `imagen` BLOB NOT NULL,
  PRIMARY KEY (`categoria_producto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hermediadb`.`Producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hermediadb`.`Producto` (
  `id_producto` INT NOT NULL AUTO_INCREMENT,
  `nombre_producto` VARCHAR(100) NOT NULL,
  `descripcion_producto` TEXT NOT NULL,
  `precio_venta` DECIMAL(15,2) NOT NULL,
  `stock` INT NOT NULL,
  `dimensiones` VARCHAR(45) NOT NULL,
  `Categoria_producto_categoria_producto` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_producto`),
  UNIQUE INDEX `id_producto_UNIQUE` (`id_producto` ASC) VISIBLE,
  UNIQUE INDEX `nombre_producto_UNIQUE` (`nombre_producto` ASC) VISIBLE,
  INDEX `fk_Producto_Categoria_producto1_idx` (`Categoria_producto_categoria_producto` ASC) VISIBLE,
  CONSTRAINT `fk_Producto_Categoria_producto1`
    FOREIGN KEY (`Categoria_producto_categoria_producto`)
    REFERENCES `hermediadb`.`Categoria_producto` (`categoria_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hermediadb`.`Detalle_pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hermediadb`.`Detalle_pedido` (
  `cantidad` INT NOT NULL,
  `precio_unitario` DECIMAL(15,2) NOT NULL,
  `Pedido_id_Pedido` INT NOT NULL,
  `Pedido_Usuario_id_usuario` INT NOT NULL,
  `Producto_id_producto` INT NOT NULL,
  PRIMARY KEY (`Pedido_id_Pedido`, `Pedido_Usuario_id_usuario`, `Producto_id_producto`),
  INDEX `fk_Detalle_pedido_Producto1_idx` (`Producto_id_producto` ASC) VISIBLE,
  CONSTRAINT `fk_Detalle_pedido_Pedido1`
    FOREIGN KEY (`Pedido_id_Pedido` , `Pedido_Usuario_id_usuario`)
    REFERENCES `hermediadb`.`Pedido` (`id_Pedido` , `Usuario_id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Detalle_pedido_Producto1`
    FOREIGN KEY (`Producto_id_producto`)
    REFERENCES `hermediadb`.`Producto` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- Scripts
-- 5 productos
-- 5 categorias
ALTER TABLE `producto`
MODIFY `descripcion_producto` TEXT;
		
        -- Insertar categoria
INSERT INTO `categoria_producto` (`categoria_producto`, `material`, `dimensiones`, `peso`, `imagen`) VALUES 
("Accesorios", "PLA", "10x5x5", 100.0, 0);

INSERT INTO `Categoria_producto_categoria_producto` (`categoria_producto`, `material`, `dimensiones`, `peso`, `imagen`) VALUES 
("Papeleria", "PLA", "15x4x4", 100.0, 0);

-- Insertar productos
INSERT INTO `hermediadb`.`Producto` (`nombre_producto`, `descripcion_producto`, `precio_venta`, `stock`, `dimensiones`,`Categoria_producto_categoria_producto`)
VALUES ("Soporte para Celular", "Base ajustable para sostener el celular en escritorio.", 150, 50, "10x5x5 cm","tecnologia" );

SELECT * FROM `producto`;

-- Insertar un usuario
INSERT INTO `Usuario` (`nombre_usuario`, `apellido_usuario`, `numero_telefono`, `email`, `password`, `direccion`, `pais`, `region`, `ciudad`, `codigo_postal`)
VALUES ('Peppa', 'Martínez', '5551234567', 'peppa@example.com', 'pass1234', 'Calle mole 123', 'México', 'CDMX', 'Ciudad de México', '01000');
SELECT * FROM `usuario`;

-- Insertar pedido
INSERT INTO `Pedido` (`fecha_pedido`, `fecha_entrega`, `status`, `Usuario_id_usuario`)
VALUES ('2025-04-08', '2025-04-15', 'Pendiente', 1);
SELECT * FROM `pedido`;

-- Insertar pago
INSERT INTO `Pago` (`id_pago`, `forma_pago`, `fecha_pago`, `total_pago`, `Usuario_id_usuario`)
VALUES ('PAG001', 'Tarjeta de crédito', '2025-04-08', 750.00, 1);
SELECT * FROM `pago`;

-- Insertar detalle pedido
INSERT INTO `Detalle_pedido` (`cantidad`, `precio_unitario`, `Pedido_id_Pedido`, `Pedido_Usuario_id_usuario`, `Producto_id_producto`)
VALUES (1, 750.00, 1, 1, 1);

SELECT * FROM `Detalle_pedido`;
SELECT * FROM `Pedido` WHERE `Usuario_id_usuario` = 1;







