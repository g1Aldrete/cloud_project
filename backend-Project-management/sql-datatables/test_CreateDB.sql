CREATE TABLE PROJ_MANG_APP_USER(
    U_ID VARCHAR(28) NOT NULL,
    U_First VARCHAR(20) NOT NULL,
    U_Middle CHAR,
    U_Last VARCHAR(20) NOT NULL,
    B_date DATE,
    U_gender CHAR,
	U_Bio VARCHAR(100),
    U_address VARCHAR(50),
    U_email VARCHAR(50) NOT NULL,
    U_cell_phone VARCHAR(13),
    PRIMARY KEY (U_ID)
);
