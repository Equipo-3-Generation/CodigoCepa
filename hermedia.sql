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
-- Table `hermediadb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hermediadb`.`usuario` (
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
-- Table `hermediadb`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hermediadb`.`pedido` (
  `id_Pedido` INT NOT NULL AUTO_INCREMENT,
  `fecha_pedido` DATE NOT NULL,
  `fecha_entrega` DATE NOT NULL,
  `status` VARCHAR(20) NOT NULL,
  `Usuario_id_usuario` INT NOT NULL,
  `usuario_id_usuario` INT NOT NULL,
  PRIMARY KEY (`id_Pedido`, `Usuario_id_usuario`, `usuario_id_usuario`),
  UNIQUE INDEX `id_Pedido_UNIQUE` (`id_Pedido` ASC) VISIBLE,
  INDEX `fk_pedido_usuario1_idx` (`usuario_id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_usuario1`
    FOREIGN KEY (`usuario_id_usuario`)
    REFERENCES `hermediadb`.`usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hermediadb`.`pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hermediadb`.`pago` (
  `id_pago` VARCHAR(50) NOT NULL,
  `forma_pago` VARCHAR(45) NOT NULL,
  `fecha_pago` DATE NOT NULL,
  `total_pago` DECIMAL(15,2) NOT NULL,
  `usuario_id_usuario` INT NOT NULL,
  PRIMARY KEY (`id_pago`, `usuario_id_usuario`),
  UNIQUE INDEX `id_pago_UNIQUE` (`id_pago` ASC) VISIBLE,
  INDEX `fk_pago_usuario1_idx` (`usuario_id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_pago_usuario1`
    FOREIGN KEY (`usuario_id_usuario`)
    REFERENCES `hermediadb`.`usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hermediadb`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hermediadb`.`categoria` (
  `nombre` VARCHAR(50) NOT NULL,
  `material` VARCHAR(50) NOT NULL,
  `dimensiones` VARCHAR(45) NOT NULL,
  `peso` DECIMAL(15,2) NOT NULL,
  `imagen` BLOB NOT NULL,
  PRIMARY KEY (`nombre`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hermediadb`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hermediadb`.`producto` (
  `id_producto` INT NOT NULL AUTO_INCREMENT,
  `nombre_producto` VARCHAR(100) NOT NULL,
  `descripcion_producto` TEXT NOT NULL,
  `precio_venta` DECIMAL(15,2) NOT NULL,
  `stock` INT NOT NULL,
  `categoria_nombre` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_producto`),
  UNIQUE INDEX `id_producto_UNIQUE` (`id_producto` ASC) VISIBLE,
  UNIQUE INDEX `nombre_producto_UNIQUE` (`nombre_producto` ASC) VISIBLE,
  INDEX `fk_producto_categoria1_idx` (`categoria_nombre` ASC) VISIBLE,
  CONSTRAINT `fk_producto_categoria1`
    FOREIGN KEY (`categoria_nombre`)
    REFERENCES `hermediadb`.`categoria` (`nombre`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `hermediadb`.`detalle_pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hermediadb`.`detalle_pedido` (
  `cantidad` INT NOT NULL,
  `precio_unitario` DECIMAL(15,2) NOT NULL,
  `producto_id_producto` INT NOT NULL,
  `pedido_id_Pedido` INT NOT NULL,
  `pedido_Usuario_id_usuario` INT NOT NULL,
  PRIMARY KEY (`producto_id_producto`, `pedido_id_Pedido`, `pedido_Usuario_id_usuario`),
  INDEX `fk_detalle_pedido_producto1_idx` (`producto_id_producto` ASC) VISIBLE,
  INDEX `fk_detalle_pedido_pedido1_idx` (`pedido_id_Pedido` ASC, `pedido_Usuario_id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_detalle_pedido_producto1`
    FOREIGN KEY (`producto_id_producto`)
    REFERENCES `hermediadb`.`producto` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detalle_pedido_pedido1`
    FOREIGN KEY (`pedido_id_Pedido` , `pedido_Usuario_id_usuario`)
    REFERENCES `hermediadb`.`pedido` (`id_Pedido` , `Usuario_id_usuario`)
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

-- hacer 5 categorias
INSERT INTO `hermediadb`.`categoria` (`nombre`, `material`, `dimensiones`, `peso`, `imagen`) VALUES
('Accesorios', 'Plástico', '10x5x5 cm', 0.20, ''),
('Oficina', 'Plástico', '5x5x2 cm', 0.10, ''),
('Hogar', 'Plástico', '30x15x10 cm', 1.00, ''),
('Cocina', 'Plástico', '3x5x2 cm', 0.05, ''),
('Ropa', 'Plástico', '8x4x2 cm', 0.15, '');

SELECT * FROM `categoria`;

-- insertar los productos a las 5 categorias
INSERT INTO `hermediadb`.`producto` (`nombre_producto`, `descripcion_producto`, `precio_venta`, `stock`, `categoria_nombre`) VALUES
('Soporte para Celular', 'Base ajustable para sostener el celular en escritorio.', 150.00, 50, 'Accesorios'),
('Organizador de Cables', 'Pequeño accesorio para mantener los cables ordenados.', 120.00, 100, 'Oficina'),
('Estante secreto', 'Estante flotante con cajón oculto.', 180.00, 30, 'Hogar'),
('Clip para Bolsas', 'Pinza reutilizable para cerrar bolsas herméticamente.', 90.00, 75, 'Cocina'),
('Ganchos para ropa paquete', 'Paquete de 60 ganchos para ropa', 100.00, 40, 'Hogar');

SELECT * FROM `producto`;

