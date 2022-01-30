
CREATE TABLE category (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    animal_type VARCHAR(30) NOT NULL
)


CREATE TABLE animal (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    animal_type VARCHAR(30) NOT NULL,
    animal_name VARCHAR(30) UNIQUE NOT NULL,
    adopt_status VARCHAR(30) NOT NULL,
    extra_info VARCHAR(256),
    register_date VARCHAR(30) NOT NULL,
    adopt_date VARCHAR(30),
    category_id INT UNSIGNED NOT NULL,
    INDEX cat_ind (category_id),
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE
)

CREATE TABLE adopter (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    adopter_name VARCHAR(30) UNIQUE NOT NULL,
    phone_number VARCHAR(30) UNIQUE NOT NULL,
    adopter_address VARCHAR(100) UNIQUE NOT,
    animal_id INT UNSIGNED NOT NULL,
    INDEX ani_ind (animal_id),
    CONSTRAINT fk_animal FOREIGN KEY (animal_id) REFERENCES animal(id) ON DELETE CASCADE
)

-- I did not set the api's like this but if I were to build this out in MySQL I would first create a 'category' table with an animal_type being a cat or dog. 
-- I would then create an 'animal' table with all the animal info relating back to the category id whether its a cat or dog
-- Finally create an 'adopter' table with all the adopter's info relating back to the animal id 
