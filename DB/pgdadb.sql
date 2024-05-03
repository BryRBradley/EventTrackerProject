-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pgdadb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `pgdadb` ;

-- -----------------------------------------------------
-- Schema pgdadb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pgdadb` DEFAULT CHARACTER SET utf8 ;
USE `pgdadb` ;

-- -----------------------------------------------------
-- Table `pgda_score`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pgda_score` ;

CREATE TABLE IF NOT EXISTS `pgda_score` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `score` INT NULL,
  `player_name` VARCHAR(75) NULL,
  `tounament_name` VARCHAR(75) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS PGDAAdmin@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'PGDAAdmin'@'localhost' IDENTIFIED BY 'admin';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'PGDAAdmin'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `pgda_score`
-- -----------------------------------------------------
START TRANSACTION;
USE `pgdadb`;
INSERT INTO `pgda_score` (`id`, `score`, `player_name`, `tounament_name`) VALUES (1, 34, 'gary', 'grand');

COMMIT;

