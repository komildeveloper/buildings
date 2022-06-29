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
INSERT INTO company(company_name, company_logo) VALUES('Akay City', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkefBYLdVdGrKJhxI_h6i7K-ZV3aomwTlN0A&usqp=CAU');
INSERT INTO company(company_name, company_logo) VALUES('Tashkent City', 'https://cim.uz/sites/default/files/unnamed.jpg');

-- INSERT COMPLEX
INSERT INTO complex(complex_name, company_id) VALUES('Nest One', 'd0482287-4d33-4e00-8c1a-ca25cf3b92eb');
INSERT INTO complex(complex_name, company_id) VALUES('Chilonzor', '93c61cd8-c470-4b25-ab11-5e1972854992');
INSERT INTO complex(complex_name, company_id) VALUES('Yakkasaroy', 'd0470175-e33f-4e06-8763-629e6de54a1b');

-- INSERT ADDRESS
INSERT INTO complex_address(complex_address_name, company_id, complex_id) VALUES('Farobiy', 'd0482287-4d33-4e00-8c1a-ca25cf3b92eb', '372d7f17-8cdf-491a-9047-dc48e8e43cc5');
INSERT INTO complex_address(complex_address_name, company_id, complex_id) VALUES('Shota Rustaveli', '93c61cd8-c470-4b25-ab11-5e1972854992', 'd6debeaf-1f45-495f-a76c-917c2ed3f498');
INSERT INTO complex_address(complex_address_name, company_id, complex_id) VALUES('Farovon', 'd0470175-e33f-4e06-8763-629e6de54a1b', 'dbbec01c-12aa-4b94-a87c-15319433e243');

-- INSERT ROOMS
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(2, 'd0482287-4d33-4e00-8c1a-ca25cf3b92eb', '372d7f17-8cdf-491a-9047-dc48e8e43cc5', '46e52949-dad6-4b52-bbca-7c00a3e30312');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(4, 'd0482287-4d33-4e00-8c1a-ca25cf3b92eb', '372d7f17-8cdf-491a-9047-dc48e8e43cc5', '46e52949-dad6-4b52-bbca-7c00a3e30312');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(6, 'd0482287-4d33-4e00-8c1a-ca25cf3b92eb', '372d7f17-8cdf-491a-9047-dc48e8e43cc5', '46e52949-dad6-4b52-bbca-7c00a3e30312');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(8, 'd0482287-4d33-4e00-8c1a-ca25cf3b92eb', '372d7f17-8cdf-491a-9047-dc48e8e43cc5', '46e52949-dad6-4b52-bbca-7c00a3e30312');

INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(2, '93c61cd8-c470-4b25-ab11-5e1972854992', 'd6debeaf-1f45-495f-a76c-917c2ed3f498', 'a00fc58a-700d-4e87-b3a3-66032e382b74');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(4, '93c61cd8-c470-4b25-ab11-5e1972854992', 'd6debeaf-1f45-495f-a76c-917c2ed3f498', 'a00fc58a-700d-4e87-b3a3-66032e382b74');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(6, '93c61cd8-c470-4b25-ab11-5e1972854992', 'd6debeaf-1f45-495f-a76c-917c2ed3f498', 'a00fc58a-700d-4e87-b3a3-66032e382b74');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(8, '93c61cd8-c470-4b25-ab11-5e1972854992', 'd6debeaf-1f45-495f-a76c-917c2ed3f498', 'a00fc58a-700d-4e87-b3a3-66032e382b74');

INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(2, 'd0470175-e33f-4e06-8763-629e6de54a1b', 'dbbec01c-12aa-4b94-a87c-15319433e243', '9f4c705a-71c4-4ca7-a394-26b2e39b3b85');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(4, 'd0470175-e33f-4e06-8763-629e6de54a1b', 'dbbec01c-12aa-4b94-a87c-15319433e243', '9f4c705a-71c4-4ca7-a394-26b2e39b3b85');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(6, 'd0470175-e33f-4e06-8763-629e6de54a1b', 'dbbec01c-12aa-4b94-a87c-15319433e243', '9f4c705a-71c4-4ca7-a394-26b2e39b3b85');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(8, 'd0470175-e33f-4e06-8763-629e6de54a1b', 'dbbec01c-12aa-4b94-a87c-15319433e243', '9f4c705a-71c4-4ca7-a394-26b2e39b3b85');

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
