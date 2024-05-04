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
  `playerName` VARCHAR(75) NULL,
  `tounamentName` VARCHAR(75) NULL,
  `tournamentDate` DATETIME NULL,
  `league` VARCHAR(45) NULL,
  `tournamentResult` VARCHAR(45) NULL,
  `nationalRanking` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `player_name_UNIQUE` (`playerName` ASC))
ENGINE = InnoDB;

USE `pgdadb` ;

-- -----------------------------------------------------
-- Placeholder table for view `view1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `view1` (`id` INT);

-- -----------------------------------------------------
-- Placeholder table for view `view2`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `view2` (`id` INT);

-- -----------------------------------------------------
-- View `view1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `view1`;
DROP VIEW IF EXISTS `view1` ;
USE `pgdadb`;


-- -----------------------------------------------------
-- View `view2`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `view2`;
DROP VIEW IF EXISTS `view2` ;
USE `pgdadb`;

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
INSERT INTO `pgda_score` (`id`, `score`, `playerName`, `tounamentName`, `tournamentDate`, `league`, `tournamentResult`, `nationalRanking`) VALUES (1, 56, 'Calvin Heimburg', 'Music City Open', '2024/04/19', 'MPO', '-23', '7');
INSERT INTO `pgda_score` (`id`, `score`, `playerName`, `tounamentName`, `tournamentDate`, `league`, `tournamentResult`, `nationalRanking`) VALUES (DEFAULT, 57, 'Gannon Buhr', 'Music City Open', '2024/04/19', 'MPO', '-21', '2');
INSERT INTO `pgda_score` (`id`, `score`, `playerName`, `tounamentName`, `tournamentDate`, `league`, `tournamentResult`, `nationalRanking`) VALUES (DEFAULT, 54, 'Richard Wysocki', 'Music City Open', '2024/04/19', 'MPO', '-22', '4');
INSERT INTO `pgda_score` (`id`, `score`, `playerName`, `tounamentName`, `tournamentDate`, `league`, `tournamentResult`, `nationalRanking`) VALUES (DEFAULT, 58, 'Niklas Anttila', 'Music City Open', '2024/04/19', 'MPO', '-26', '3');
INSERT INTO `pgda_score` (`id`, `score`, `playerName`, `tounamentName`, `tournamentDate`, `league`, `tournamentResult`, `nationalRanking`) VALUES (DEFAULT, 53, 'Simon Lizotte', 'Music City Open', '2024/04/19', 'MPO', '-30 ', '16');
INSERT INTO `pgda_score` (`id`, `score`, `playerName`, `tounamentName`, `tournamentDate`, `league`, `tournamentResult`, `nationalRanking`) VALUES (DEFAULT, 54, 'Anthony Barrela', 'Music City Open', '2024/04/19', 'MPO', '-28', '1');
INSERT INTO `pgda_score` (`id`, `score`, `playerName`, `tounamentName`, `tournamentDate`, `league`, `tournamentResult`, `nationalRanking`) VALUES (DEFAULT, 71, 'Kriston Tattar', 'Music City Open', '2024/04/19', 'FPO', '-12', '2');
INSERT INTO `pgda_score` (`id`, `score`, `playerName`, `tounamentName`, `tournamentDate`, `league`, `tournamentResult`, `nationalRanking`) VALUES (DEFAULT, 73, 'Evaliina Salonen', 'Music City Open', '2024/04/19', 'FPO', '-10', '1');
INSERT INTO `pgda_score` (`id`, `score`, `playerName`, `tounamentName`, `tournamentDate`, `league`, `tournamentResult`, `nationalRanking`) VALUES (DEFAULT, 75, 'Ohn Scoggins', 'Music City Open', '2024/04/19', 'FPO', '-9', '3');
INSERT INTO `pgda_score` (`id`, `score`, `playerName`, `tounamentName`, `tournamentDate`, `league`, `tournamentResult`, `nationalRanking`) VALUES (DEFAULT, 76, 'Holyn Handley', 'Music City Open', '2024/04/19', 'FPO', '-6', '4');
INSERT INTO `pgda_score` (`id`, `score`, `playerName`, `tounamentName`, `tournamentDate`, `league`, `tournamentResult`, `nationalRanking`) VALUES (DEFAULT, 79, 'Missy Gannon', 'Music City Open', '2024/04/19', 'FPO', '-4', '5');

COMMIT;

