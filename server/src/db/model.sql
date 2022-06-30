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
INSERT INTO complex(complex_name, company_id) VALUES('Nest One', '985df002-f47f-4034-9345-b68791f6138e');
INSERT INTO complex(complex_name, company_id) VALUES('Yakkasaroy', 'f7c82436-bb41-4744-997d-5f21bb4e4a5c');
INSERT INTO complex(complex_name, company_id) VALUES('Chilonzor', '4b97c21a-b103-498f-9b64-af09cdf06461');

-- INSERT ADDRESS
INSERT INTO complex_address(complex_address_name, company_id, complex_id) VALUES('Farobiy', '985df002-f47f-4034-9345-b68791f6138e', '3905f5f7-7f98-4e1a-9a9d-6cd091198ac3');
INSERT INTO complex_address(complex_address_name, company_id, complex_id) VALUES('Farovon', '4b97c21a-b103-498f-9b64-af09cdf06461', 'ba038f2c-3710-4cd1-8831-42e8c6ef303a');
INSERT INTO complex_address(complex_address_name, company_id, complex_id) VALUES('Shota Rustaveli', 'f7c82436-bb41-4744-997d-5f21bb4e4a5c', 'a7783c4c-33f8-4ec0-8ba5-39f33879101d');

-- INSERT ROOMS
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(2, '985df002-f47f-4034-9345-b68791f6138e', '3905f5f7-7f98-4e1a-9a9d-6cd091198ac3', 'bc09ba12-77ac-4125-b5bb-0e878f802514');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(4, '985df002-f47f-4034-9345-b68791f6138e', '3905f5f7-7f98-4e1a-9a9d-6cd091198ac3', 'bc09ba12-77ac-4125-b5bb-0e878f802514');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(6, '985df002-f47f-4034-9345-b68791f6138e', '3905f5f7-7f98-4e1a-9a9d-6cd091198ac3', 'bc09ba12-77ac-4125-b5bb-0e878f802514');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(8, '985df002-f47f-4034-9345-b68791f6138e', '3905f5f7-7f98-4e1a-9a9d-6cd091198ac3', 'bc09ba12-77ac-4125-b5bb-0e878f802514');

INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(2, '4b97c21a-b103-498f-9b64-af09cdf06461', 'ba038f2c-3710-4cd1-8831-42e8c6ef303a', '71031eba-a7fb-4e3a-bf09-b8033b396237');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(4, '4b97c21a-b103-498f-9b64-af09cdf06461', 'ba038f2c-3710-4cd1-8831-42e8c6ef303a', '71031eba-a7fb-4e3a-bf09-b8033b396237');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(6, '4b97c21a-b103-498f-9b64-af09cdf06461', 'ba038f2c-3710-4cd1-8831-42e8c6ef303a', '71031eba-a7fb-4e3a-bf09-b8033b396237');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(8, '4b97c21a-b103-498f-9b64-af09cdf06461', 'ba038f2c-3710-4cd1-8831-42e8c6ef303a', '71031eba-a7fb-4e3a-bf09-b8033b396237');

INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(2, 'f7c82436-bb41-4744-997d-5f21bb4e4a5c', 'a7783c4c-33f8-4ec0-8ba5-39f33879101d'. 'a9835a58-4637-43bf-a8ab-a0db3cff517a');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(4, 'f7c82436-bb41-4744-997d-5f21bb4e4a5c', 'a7783c4c-33f8-4ec0-8ba5-39f33879101d'. 'a9835a58-4637-43bf-a8ab-a0db3cff517a');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(6, 'f7c82436-bb41-4744-997d-5f21bb4e4a5c', 'a7783c4c-33f8-4ec0-8ba5-39f33879101d'. 'a9835a58-4637-43bf-a8ab-a0db3cff517a');
INSERT INTO rooms(room_number, company_id, complex_id, complex_address_id) VALUES(8, 'f7c82436-bb41-4744-997d-5f21bb4e4a5c', 'a7783c4c-33f8-4ec0-8ba5-39f33879101d'. 'a9835a58-4637-43bf-a8ab-a0db3cff517a');

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
