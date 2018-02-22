--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.11
-- Dumped by pg_dump version 9.5.11

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Addresses; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE "Addresses" (
    id integer NOT NULL,
    street character varying(255),
    city character varying(255),
    zip_code character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Addresses" OWNER TO admin;

--
-- Name: Addresses_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE "Addresses_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Addresses_id_seq" OWNER TO admin;

--
-- Name: Addresses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE "Addresses_id_seq" OWNED BY "Addresses".id;


--
-- Name: Contacts; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE "Contacts" (
    id integer NOT NULL,
    name character varying(255),
    email character varying(255),
    phone character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Contacts" OWNER TO admin;

--
-- Name: Contacts_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE "Contacts_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Contacts_id_seq" OWNER TO admin;

--
-- Name: Contacts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE "Contacts_id_seq" OWNED BY "Contacts".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE "SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE "SequelizeMeta" OWNER TO admin;

--
-- Name: id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY "Addresses" ALTER COLUMN id SET DEFAULT nextval('"Addresses_id_seq"'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY "Contacts" ALTER COLUMN id SET DEFAULT nextval('"Contacts_id_seq"'::regclass);


--
-- Data for Name: Addresses; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY "Addresses" (id, street, city, zip_code, "createdAt", "updatedAt") FROM stdin;
1	711-2880 Nulla St	 Mississippi	 96522	2018-02-22 14:16:17.685+07	2018-02-22 14:16:17.685+07
2	8562 Fusce Rd	 Nebraska	 20620	2018-02-22 14:16:17.685+07	2018-02-22 14:16:17.685+07
3	606-3727 Ullamcorper Street	 Roseville	 11523	2018-02-22 14:16:17.685+07	2018-02-22 14:16:17.685+07
4	867-859 Sit Rd	 New York	 39531	2018-02-22 14:16:17.685+07	2018-02-22 14:16:17.685+07
5	7292 Dictum Av	 San Antonio	 47096	2018-02-22 14:16:17.685+07	2018-02-22 14:16:17.685+07
6	651-8679 Sodales Av	 Tamuning	 10855	2018-02-22 14:16:17.685+07	2018-02-22 14:16:17.685+07
7	191-103 Integer Rd	 Corona New Mexico	 08219	2018-02-22 14:16:17.685+07	2018-02-22 14:16:17.685+07
8	2508 Dolor. Av	 Muskegon KY	 12482	2018-02-22 14:16:17.685+07	2018-02-22 14:16:17.685+07
9	666-4366 Lacinia Avenue	 Ohio	 19253	2018-02-22 14:16:17.685+07	2018-02-22 14:16:17.685+07
10	Lacinia Road	 San Bernardino	 09289	2018-02-22 14:16:17.685+07	2018-02-22 14:16:17.685+07
11	Jl. Margacinta	Bandung	40287	2018-02-22 15:53:26.886+07	2018-02-22 15:53:26.886+07
12	Jl. Binong	Bandung	40286	2018-02-22 15:53:48.036+07	2018-02-22 15:53:48.036+07
\.


--
-- Name: Addresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('"Addresses_id_seq"', 13, true);


--
-- Data for Name: Contacts; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY "Contacts" (id, name, email, phone, "createdAt", "updatedAt") FROM stdin;
2	Lani Rollins	blandit@quam.com	1-633-389-7173	2018-02-22 14:09:10.838+07	2018-02-22 14:09:10.838+07
3	McKenzie Burris	mauris.Morbi.non@nequeNullam.com	1-906-235-0832	2018-02-22 14:09:10.838+07	2018-02-22 14:09:10.838+07
4	Amethyst Morgan	dui@magnis.ca	1-548-366-6273	2018-02-22 14:09:10.838+07	2018-02-22 14:09:10.838+07
5	Lamar Hardin	pharetra.felis.eget@mattisInteger.com	1-519-693-8091	2018-02-22 14:09:10.838+07	2018-02-22 14:09:10.838+07
6	Keegan Coleman	leo.Cras.vehicula@musProinvel.edu	1-998-626-8896	2018-02-22 14:09:10.838+07	2018-02-22 14:09:10.838+07
7	Lani Rollins	blandit@quam.com	1-633-389-7173	2018-02-22 14:11:25.997+07	2018-02-22 14:11:25.997+07
8	McKenzie Burris	mauris.Morbi.non@nequeNullam.com	1-906-235-0832	2018-02-22 14:11:25.997+07	2018-02-22 14:11:25.997+07
9	Amethyst Morgan	dui@magnis.ca	1-548-366-6273	2018-02-22 14:11:25.997+07	2018-02-22 14:11:25.997+07
10	Lamar Hardin	pharetra.felis.eget@mattisInteger.com	1-519-693-8091	2018-02-22 14:11:25.997+07	2018-02-22 14:11:25.997+07
11	Keegan Coleman	leo.Cras.vehicula@musProinvel.edu	1-998-626-8896	2018-02-22 14:11:25.997+07	2018-02-22 14:11:25.997+07
12	Lani Rollins	blandit@quam.com	1-633-389-7173	2018-02-22 14:13:04.083+07	2018-02-22 14:13:04.083+07
13	McKenzie Burris	mauris.Morbi.non@nequeNullam.com	1-906-235-0832	2018-02-22 14:13:04.083+07	2018-02-22 14:13:04.083+07
14	Amethyst Morgan	dui@magnis.ca	1-548-366-6273	2018-02-22 14:13:04.083+07	2018-02-22 14:13:04.083+07
15	Lamar Hardin	pharetra.felis.eget@mattisInteger.com	1-519-693-8091	2018-02-22 14:13:04.083+07	2018-02-22 14:13:04.083+07
16	Keegan Coleman	leo.Cras.vehicula@musProinvel.edu	1-998-626-8896	2018-02-22 14:13:04.083+07	2018-02-22 14:13:04.083+07
17	Lani Rollins	blandit@quam.com	1-633-389-7173	2018-02-22 14:16:17.574+07	2018-02-22 14:16:17.574+07
18	McKenzie Burris	mauris.Morbi.non@nequeNullam.com	1-906-235-0832	2018-02-22 14:16:17.574+07	2018-02-22 14:16:17.574+07
19	Amethyst Morgan	dui@magnis.ca	1-548-366-6273	2018-02-22 14:16:17.574+07	2018-02-22 14:16:17.574+07
20	Lamar Hardin	pharetra.felis.eget@mattisInteger.com	1-519-693-8091	2018-02-22 14:16:17.574+07	2018-02-22 14:16:17.574+07
21	Keegan Coleman	leo.Cras.vehicula@musProinvel.edu	1-998-626-8896	2018-02-22 14:16:17.574+07	2018-02-22 14:16:17.574+07
22	Agung Prabowo	agungp@pindad.com	087822171172	2018-02-22 15:11:36.805+07	2018-02-22 15:47:43.072+07
23	Agung Prabowo	agung.caproex@gmail.com	087822171172	2018-02-22 15:13:19.755+07	2018-02-22 15:48:30.299+07
\.


--
-- Name: Contacts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('"Contacts_id_seq"', 27, true);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY "SequelizeMeta" (name) FROM stdin;
20180222054711-create-contact.js
20180222054920-create-address.js
\.


--
-- Name: Addresses_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY "Addresses"
    ADD CONSTRAINT "Addresses_pkey" PRIMARY KEY (id);


--
-- Name: Contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY "Contacts"
    ADD CONSTRAINT "Contacts_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY "SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

