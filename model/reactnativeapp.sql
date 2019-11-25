-- React Native App Database
-- Copyright Shakal Bears

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema app
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema app
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `app` DEFAULT CHARACTER SET latin1 ;
USE `app` ;

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS journey;
DROP TABLE IF EXISTS journeyline;

-- -----------------------------------------------------
-- Table `app`.`journey`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `app`.`journey` (
  `journey_id` INT(11) NOT NULL AUTO_INCREMENT,
  `journey_checkin` TIMESTAMP(6) NULL DEFAULT NULL,
  `journey_checkout` TIMESTAMP(6) NULL DEFAULT NULL,
  `journey_longtitudestart` DOUBLE NULL DEFAULT NULL,
  `journey_latitudestart` DOUBLE NULL DEFAULT NULL,
  `journey_longtitudeend` DOUBLE NULL DEFAULT NULL,
  `journey_latitudeend` DOUBLE NULL DEFAULT NULL,
  PRIMARY KEY (`journey_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `app`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `app`.`user` (
  `user_id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_firstname` VARCHAR(50) CHARACTER SET 'utf8' NOT NULL,
  `user_lastname` VARCHAR(50) CHARACTER SET 'utf8' NOT NULL,
  `user_email` VARCHAR(50) CHARACTER SET 'utf8' NOT NULL,
  `user_image` VARCHAR(50) CHARACTER SET 'utf8' NOT NULL,
  `user_balance` DOUBLE NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `app`.`journeyline`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `app`.`journeyline` (
  `journeyline_price` DOUBLE NOT NULL,
  `fk_journey_journeyline_id` INT(11) NOT NULL,
  `fk_user_journeyline_id` INT(11) NOT NULL,
  PRIMARY KEY (`fk_journey_journeyline_id`, `fk_user_journeyline_id`),
  INDEX `fk_journeyline_user1_idx` (`fk_user_journeyline_id` ASC),
  CONSTRAINT `fk_journeyline_journey`
    FOREIGN KEY (`fk_journey_journeyline_id`)
    REFERENCES `app`.`journey` (`journey_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_journeyline_user1`
    FOREIGN KEY (`fk_user_journeyline_id`)
    REFERENCES `app`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

-- -----------------------------------------------------
-- Table `app`.`key`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `app`.`key` (
  `key_id` INT(11) NOT NULL AUTO_INCREMENT,
  `key_key` VARCHAR(100) CHARACTER SET 'utf8' NOT NULL,
  PRIMARY KEY (`key_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- User
INSERT INTO `app`.`user` (`user_firstname`, `user_lastname`, `user_email`, `user_image`, `user_balance`) VALUES ('Posemand', 'Eriksen', 'posemand@gmail.com', 'no.png', '100.00');
INSERT INTO `app`.`user` (`user_firstname`, `user_lastname`, `user_email`, `user_image`, `user_balance`) VALUES ('Lone', 'Vikke', 'lvikke@gmail.com', 'no.png', '69.00');
INSERT INTO `app`.`user` (`user_firstname`, `user_lastname`, `user_email`, `user_image`, `user_balance`) VALUES ('Lars', 'Graevlingsen', 'beskidt@gmail.com', 'no.png', '50.00');

-- Journey
INSERT INTO `app`.`journey` (`journey_checkin`, `journey_checkout`, `journey_longtitudestart`, `journey_latitudestart`, `journey_longtitudeend`, `journey_latitudeend`) VALUES ('2019-07-01 00:00:10', '2019-07-01 00:30:00', '20.00', '30.00', '40.00', '60.00');
INSERT INTO `app`.`journey` (`journey_checkin`, `journey_checkout`, `journey_longtitudestart`, `journey_latitudestart`, `journey_longtitudeend`, `journey_latitudeend`) VALUES ('2019-07-01 00:00:20', '2019-07-01 00:30:00', '20.00', '30.00', '40.00', '60.00');
INSERT INTO `app`.`journey` (`journey_checkin`, `journey_checkout`, `journey_longtitudestart`, `journey_latitudestart`, `journey_longtitudeend`, `journey_latitudeend`) VALUES ('2019-07-01 00:00:30', '2019-07-01 00:30:00', '20.00', '30.00', '40.00', '60.00');

-- Journeyline
INSERT INTO `app`.`journeyline` (`fk_user_journeyline_id`, `fk_journey_journeyline_id`, `journeyline_price`) VALUES ('1', '1', '20.00');
INSERT INTO `app`.`journeyline` (`fk_user_journeyline_id`, `fk_journey_journeyline_id`, `journeyline_price`) VALUES ('2', '2', '20.00');
INSERT INTO `app`.`journeyline` (`fk_user_journeyline_id`, `fk_journey_journeyline_id`, `journeyline_price`) VALUES ('3', '3', '20.00');

-- Key
INSERT INTO `app`.`key` (`key_key`) VALUES ('testkey1');
INSERT INTO `app`.`key` (`key_key`) VALUES ('testkey2');