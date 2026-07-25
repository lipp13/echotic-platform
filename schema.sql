-- MySQL Database Schema for EchoTic Concert Ticket Booking Platform
-- Suitable for direct import in MySQL Workbench

CREATE DATABASE IF NOT EXISTS echotic_db;
USE echotic_db;

-- -----------------------------------------------------
-- Table `venues`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `venues` (
  `id` VARCHAR(50) NOT NULL,
  `name` VARCHAR(150) NOT NULL,
  `city` VARCHAR(50) NOT NULL,
  `address` TEXT NOT NULL,
  `map_url` TEXT NULL,
  `capacity` INT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `events` (
  `id` VARCHAR(50) NOT NULL,
  `title` VARCHAR(150) NOT NULL,
  `genre` VARCHAR(30) NOT NULL,
  `subtitle` VARCHAR(255) NOT NULL,
  `date` DATE NOT NULL,
  `time` VARCHAR(20) NOT NULL,
  `venue_id` VARCHAR(50) NOT NULL,
  `image_url` TEXT NOT NULL,
  `featured` TINYINT(1) DEFAULT 0,
  `trending` TINYINT(1) DEFAULT 0,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_events_venues`
    FOREIGN KEY (`venue_id`)
    REFERENCES `venues` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `ticket_categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ticket_categories` (
  `id` VARCHAR(50) NOT NULL,
  `event_id` VARCHAR(50) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `price` DECIMAL(12,2) NOT NULL,
  `capacity` INT NOT NULL,
  `sold` INT DEFAULT 0,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_categories_events`
    FOREIGN KEY (`event_id`)
    REFERENCES `events` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orders` (
  `id` VARCHAR(50) NOT NULL, -- E.g. ORD-123456
  `ticket_code` VARCHAR(50) NOT NULL UNIQUE,
  `user_id` INT NULL, -- Can be NULL for guest checkout
  `event_id` VARCHAR(50) NOT NULL,
  `category_name` VARCHAR(100) NOT NULL,
  `quantity` INT NOT NULL,
  `total_price` DECIMAL(12,2) NOT NULL,
  `attendee_name` VARCHAR(100) NOT NULL,
  `attendee_email` VARCHAR(100) NOT NULL,
  `attendee_id` VARCHAR(50) NOT NULL, -- NIK / Passport
  `purchase_date` DATE NOT NULL,
  `status` ENUM('active', 'used', 'expired') DEFAULT 'active',
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_orders_events`
    FOREIGN KEY (`event_id`)
    REFERENCES `events` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_orders_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `users` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `seats`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `seats` (
  `id` VARCHAR(100) NOT NULL, -- E.g. VIP-A-RowA-Seat1
  `order_id` VARCHAR(50) NOT NULL,
  `section_id` VARCHAR(50) NOT NULL,
  `row_label` VARCHAR(10) NOT NULL,
  `seat_number` INT NOT NULL,
  `price` DECIMAL(12,2) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_seats_orders`
    FOREIGN KEY (`order_id`)
    REFERENCES `orders` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Sample Seed Data (Based on EchoTic's Mock Database)
-- -----------------------------------------------------

-- Insert Venues
INSERT INTO `venues` (`id`, `name`, `city`, `address`, `map_url`, `capacity`) VALUES
('jiexpo', 'JIExpo Kemayoran Hall D2', 'Jakarta', 'Jl. Haji Benyamin Sueb, Kemayoran, Jakarta Pusat 10620', 'https://maps.google.com/maps?q=JIExpo%20Kemayoran&t=&z=13&ie=UTF8&iwloc=&output=embed', 8000),
('tennis_indoor', 'Tennis Indoor Senayan', 'Jakarta', 'Jl. Pintu Satu Senayan, Gelora, Jakarta Pusat 10270', 'https://maps.google.com/maps?q=Tennis%20Indoor%20Senayan&t=&z=13&ie=UTF8&iwloc=&output=embed', 4000),
('jiexpo_theatre', 'JIExpo Theatre', 'Jakarta', 'Pusat Niaga Building, JIExpo, Kemayoran, Jakarta 10620', 'https://maps.google.com/maps?q=JIExpo%20Theatre&t=&z=13&ie=UTF8&iwloc=&output=embed', 2500),
('stadiun_siliwangi', 'Stadion Siliwangi', 'Bandung', 'Jl. Lombok No.10, Merdeka, Sumur Bandung, Bandung 40113', 'https://maps.google.com/maps?q=Stadion%20Siliwangi%20Bandung&t=&z=13&ie=UTF8&iwloc=&output=embed', 15000);

-- Insert Events
INSERT INTO `events` (`id`, `title`, `genre`, `subtitle`, `date`, `time`, `venue_id`, `image_url`, `featured`, `trending`, `description`) VALUES
('evt-neon-future-2026', 'NEON FUTURE MASSIVE: VOL. II', 'edm', 'Steve Aoki & Alesso Live in Jakarta', '2026-08-25', '20:00 WIB', 'jiexpo', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop', 1, 1, 'Prepare yourself for Jakarta\'s biggest indoor electronic dance music spectacle of 2026. Featuring world-renowned producers Steve Aoki and Alesso. Expect a hybrid set of progressive house euphoria, electro house drops, state-of-the-art laser installations, and pure non-stop neon energy.'),
('evt-retrograde-2026', 'RETROGRADE ECLIPSE', 'rock', 'The Sigit & Barasuara Co-Headlining Tour', '2026-09-12', '19:00 WIB', 'tennis_indoor', 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop', 1, 1, 'Two forces of Indonesian rock collide in an explosive asymmetric double-bill concert. Witness the vintage fuzzy garage tones of The Sigit combined with the polyrhythmic, high-octane indie fire of Barasuara. Sweat, lights, and screaming guitars await you.'),
('evt-soul-senses-2026', 'SOUL & SENSES SESSIONS', 'jazz', 'Laufey & Maliq & D\'Essentials Orchestral Jazz Night', '2026-10-05', '20:00 WIB', 'jiexpo_theatre', 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop', 0, 1, 'An elegant, cozy night of breathtaking vocals and irresistible grooves. Grammys winner Laufey performs her symphonic jazz-pop repertoire, followed by a high-spirit performance from Maliq & D\'Essentials playing their chart-topping classic hits with a live brass band. Perfect acoustics, intimate seating, pure magic.'),
('evt-sabotage-2026', 'SABOTAGE PROTOCOL: RAMPAGE', 'rock', 'Burgerkill & Deadsquad Live', '2026-10-18', '17:00 WIB', 'stadiun_siliwangi', 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1200&auto=format&fit=crop', 0, 0, 'Get ready to hit the pit. Indonesian heavy metal icons Burgerkill and Deadsquad are taking over Siliwangi Stadium for a monstrous metal feast. With custom visual staging, pyro shows, and special collaboration sets where both bands perform on stage together, this is metal history in the making.');

-- Insert Ticket Categories
INSERT INTO `ticket_categories` (`id`, `event_id`, `name`, `price`, `capacity`, `sold`) VALUES
('cat-vip-neon', 'evt-neon-future-2026', 'VIP Backstage Access', 2750000.00, 150, 124),
('cat-presale-neon', 'evt-neon-future-2026', 'Presale Festival', 950000.00, 1500, 1420),
('cat-regular-neon', 'evt-neon-future-2026', 'General Admission (Standing)', 1350000.00, 3000, 1250),
('cat-vip-retro', 'evt-retrograde-2026', 'VIP Rock Pit', 1250000.00, 200, 195),
('cat-regular-retro', 'evt-retrograde-2026', 'Festival (Standing)', 650000.00, 1800, 1100),
('cat-tribune-retro', 'evt-retrograde-2026', 'Tribune Seated', 450000.00, 1500, 850);
