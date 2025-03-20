CREATE TABLE ciudadano (
id INTEGER NOT NULL AUTO_INCREMENT,
dni VARCHAR(50),
contraseña VARCHAR(100),
nombre VARCHAR(500),
PRIMARY KEY( id )
)

CREATE TABLE parking (
id INTEGER NOT NULL AUTO_INCREMENT,
direccion VARCHAR(50),
maxBicis INTEGER,
PRIMARY KEY(id),
)

CREATE TABLE bicicleta (
id INTEGER NOT NULL AUTO_INCREMENT,
kilometros INTEGER,
id_ciudadano INTEGER,
id_parking INTEGER,
FOREIGN KEY(id_ciudadano) REFERENCES ciudadano(id),
FOREIGN KEY(id_parking) REFERENCES parking(id),
PRIMARY KEY(id)
)

INSERT INTO ciudadano(dni,contraseña,nombre)
VALUES('52111111A', 'joshua', 'Marta Costa Boix'),
  ('52222222B','rosebud','Pere Janquera Flix'),
  ('52333333C', 'dadada','Marcos Sucre Montaña'),
  ('52444444D','0451','Laura Sentis Aguilar');

INSERT INTO parking
