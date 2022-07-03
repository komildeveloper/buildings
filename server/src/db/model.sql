-- CREATE DATABASE
CREATE DATABASE buildings;

-- CREATE UUID EXTENSION
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CREATE TABLES
CREATE TABLE company(
  company_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_logo TEXT NOT NULL,
  company_name VARCHAR(64) NOT NULL
);

CREATE TABLE complex(
  complex_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  complex_name VARCHAR(64) NOT NULL,
  company_id UUID,
    FOREIGN KEY (company_id)
    REFERENCES company(company_id)
    ON DELETE CASCADE
);

CREATE TABLE complex_address(
  complex_address_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  complex_address_name VARCHAR(64) NOT NULL,
  company_id UUID,
    FOREIGN KEY (company_id)
    REFERENCES company(company_id)
    ON DELETE CASCADE,
  complex_id UUID,
    FOREIGN KEY (complex_id)
    REFERENCES complex(complex_id)
    ON DELETE CASCADE
);

CREATE TABLE rooms(
  room_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  room_number NUMERIC NOT NULL,
  company_id UUID,
    FOREIGN KEY (company_id)
    REFERENCES company(company_id)
    ON DELETE CASCADE,
  complex_id UUID,
    FOREIGN KEY (complex_id)
    REFERENCES complex(complex_id)
    ON DELETE CASCADE,
  complex_address_id UUID,
    FOREIGN KEY (complex_address_id)
    REFERENCES complex_address(complex_address_id)
    ON DELETE CASCADE
);

CREATE TABLE mortage(
  mortage_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  mortage_year VARCHAR(64) NOT NULL
);

CREATE TABLE banks(
  bank_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  bank_name VARCHAR(255) NOT NULL,
  bank_price NUMERIC NOT NULL,
  bank_payment NUMERIC NOT NULL
);

-- INSERT COMPANY
INSERT INTO company(company_name, company_logo) VALUES('Murad Buildings', 'https://www.mbc.uz/includes/images/new_layout/logo.svg');
INSERT INTO company(company_name, company_logo) VALUES('Tashkent City', 'https://cim.uz/sites/default/files/unnamed.jpg');
INSERT INTO company(company_name, company_logo) VALUES('Akay City', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkefBYLdVdGrKJhxI_h6i7K-ZV3aomwTlN0A&usqp=CAU');

-- INSERT COMPLEX
INSERT INTO complex(complex_name, company_id) VALUES('Nest One', 'd0271cf2-c217-4661-b6e4-cd15b4f6f2be');
INSERT INTO complex(complex_name, company_id) VALUES('Yakkasaroy', '7a6ad318-a07b-442c-8a53-f2bb344e4fa7');
INSERT INTO complex(complex_name, company_id) VALUES('Chilonzor', 'f5d7ff68-7c63-46e8-9f36-f5d05d1dfa9b');

-- INSERT ADDRESS
INSERT INTO complex_address(complex_address_name, company_id, complex_id) VALUES('Farobiy', 'd0271cf2-c217-4661-b6e4-cd15b4f6f2be', 'e703fd2a-d5e7-44fe-8eb4-5e4079adafc3');
INSERT INTO complex_address(complex_address_name, company_id, complex_id) VALUES('Farovon', '7a6ad318-a07b-442c-8a53-f2bb344e4fa7', '66a8d220-96d9-4462-92b5-6b6e113d4bbc');
INSERT INTO complex_address(complex_address_name, company_id, complex_id) VALUES('Shota Rustaveli', 'f5d7ff68-7c63-46e8-9f36-f5d05d1dfa9b', 'e1c8a996-7aca-4d07-8f36-ce006f3b8469');

-- INSERT ROOMS
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(2, 'd0271cf2-c217-4661-b6e4-cd15b4f6f2be', 'e703fd2a-d5e7-44fe-8eb4-5e4079adafc3', '62552af4-2df6-4262-88df-cecbed021ae2');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(4, 'd0271cf2-c217-4661-b6e4-cd15b4f6f2be', 'e703fd2a-d5e7-44fe-8eb4-5e4079adafc3', '62552af4-2df6-4262-88df-cecbed021ae2');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(6, 'd0271cf2-c217-4661-b6e4-cd15b4f6f2be', 'e703fd2a-d5e7-44fe-8eb4-5e4079adafc3', '62552af4-2df6-4262-88df-cecbed021ae2');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(8, 'd0271cf2-c217-4661-b6e4-cd15b4f6f2be', 'e703fd2a-d5e7-44fe-8eb4-5e4079adafc3', '62552af4-2df6-4262-88df-cecbed021ae2');

INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(2, '7a6ad318-a07b-442c-8a53-f2bb344e4fa7', '66a8d220-96d9-4462-92b5-6b6e113d4bbc', 'e399e9e7-7bd3-42cc-af7d-b653c83cb767');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(4, '7a6ad318-a07b-442c-8a53-f2bb344e4fa7', '66a8d220-96d9-4462-92b5-6b6e113d4bbc', 'e399e9e7-7bd3-42cc-af7d-b653c83cb767');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(6, '7a6ad318-a07b-442c-8a53-f2bb344e4fa7', '66a8d220-96d9-4462-92b5-6b6e113d4bbc', 'e399e9e7-7bd3-42cc-af7d-b653c83cb767');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(8, '7a6ad318-a07b-442c-8a53-f2bb344e4fa7', '66a8d220-96d9-4462-92b5-6b6e113d4bbc', 'e399e9e7-7bd3-42cc-af7d-b653c83cb767');

INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(2, 'f5d7ff68-7c63-46e8-9f36-f5d05d1dfa9b', 'e1c8a996-7aca-4d07-8f36-ce006f3b8469', 'fd4f9a83-4cec-41c1-b118-3f927caeee3e');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(4, 'f5d7ff68-7c63-46e8-9f36-f5d05d1dfa9b', 'e1c8a996-7aca-4d07-8f36-ce006f3b8469', 'fd4f9a83-4cec-41c1-b118-3f927caeee3e');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(6, 'f5d7ff68-7c63-46e8-9f36-f5d05d1dfa9b', 'e1c8a996-7aca-4d07-8f36-ce006f3b8469', 'fd4f9a83-4cec-41c1-b118-3f927caeee3e');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(8, 'f5d7ff68-7c63-46e8-9f36-f5d05d1dfa9b', 'e1c8a996-7aca-4d07-8f36-ce006f3b8469', 'fd4f9a83-4cec-41c1-b118-3f927caeee3e');

-- INSERT MORTAGE
INSERT INTO mortage(mortage_year) VALUES(10);
INSERT INTO mortage(mortage_year) VALUES(15);
INSERT INTO mortage(mortage_year) VALUES(20);

-- INSERT BANKS
INSERT INTO banks(bank_name, bank_price, bank_payment) VALUES('SQB', 800000000, 15);
INSERT INTO banks(bank_name, bank_price, bank_payment) VALUES('Davr Bank', 700000000, 8);
INSERT INTO banks(bank_name, bank_price, bank_payment) VALUES('NBU', 900000000, 37);

-- SELECT
SELECT * FROM company;
SELECT * FROM complex;
SELECT * FROM complex_address;
SELECT * FROM rooms;
SELECT * FROM banks;
SELECT * FROM mortage;

-- company, complex
SELECT
  com.company_name,
  cmpx.complex_name
FROM
  company com
NATURAL JOIN
  complex cmpx

-- company, complex, complex_address
SELECT
  com.company_name,
  cmpx.complex_name,
  cmpxa.complex_address_name
FROM
  company com
NATURAL JOIN
  complex cmpx
NATURAL JOIN
  complex_address cmpxa;

-- company, complex, complex_address, rooms
SELECT
  com.company_name,
  cmpx.complex_name,
  cmpxa.complex_address_name,
  rm.room_number
FROM
  company com
NATURAL JOIN
  complex cmpx
NATURAL JOIN
  complex_address cmpxa
NATURAL JOIN
  rooms rm;
