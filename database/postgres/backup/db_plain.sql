--
-- PostgreSQL database dump
--

-- Dumped from database version 17.0
-- Dumped by pg_dump version 17.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: users_gender_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.users_gender_enum AS ENUM (
    'woman',
    'man'
);


ALTER TYPE public.users_gender_enum OWNER TO postgres;

--
-- Name: users_role_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.users_role_enum AS ENUM (
    'user',
    'professional',
    'admin'
);


ALTER TYPE public.users_role_enum OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: email_templates; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.email_templates (
    id integer NOT NULL,
    "templateName" character varying NOT NULL,
    subject character varying NOT NULL,
    text text,
    "htmlContent" text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.email_templates OWNER TO postgres;

--
-- Name: email_templates_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.email_templates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.email_templates_id_seq OWNER TO postgres;

--
-- Name: email_templates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.email_templates_id_seq OWNED BY public.email_templates.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    "firstName" character varying(100) NOT NULL,
    "lastName" character varying(100),
    email character varying,
    whatsapp character varying,
    username character varying(100),
    password character varying,
    birthdate character varying(100),
    "nDni" character varying(100),
    image character varying DEFAULT 'https://bit.ly/fgpImg1'::character varying,
    role public.users_role_enum DEFAULT 'user'::public.users_role_enum NOT NULL,
    title character varying(255),
    specialization character varying(255),
    bio character varying(1000),
    gender public.users_gender_enum,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: email_templates id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_templates ALTER COLUMN id SET DEFAULT nextval('public.email_templates_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: email_templates; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.email_templates (id, "templateName", subject, text, "htmlContent", "createdAt") FROM stdin;
1	Registro de Usuario	¡Bienvenido a nuestro Centro de Fisioterapia!	¡Bienvenido a nuestro Centro de Fisioterapia!	<h1>¡Hola {{name}}! Bienvenido a <strong>CREFI</strong></h1><p>Nos alegra mucho que te hayas registrado en nuestro Centro de Fisioterapia. Estamos comprometidos con tu bienestar y salud.</p><p>Si tienes alguna consulta o necesitas ayuda, no dudes en <a href="mailto:crefi@frankgp.com" rel="noopener noreferrer" target="_blank">contactarnos</a>. Estamos aquí para apoyarte.</p><p>¡Bienvenido a nuestra familia!</p><p>Atentamente,</p><p>El equipo de tu Centro de Fisioterapia</p>	2025-01-03 18:25:18.579518
2	Cita Programada	Tu turno ha sido programado exitosamente	Hola {{name}},\n      \n      Tu turno ha sido programado exitosamente en el Centro de Fisioterapia:\n      \n      🗓 Fecha y hora: {{formattedDate}}\n      👩‍⚕️ Profesional: {{professionalName}}\n      📝 Motivo: {{description}}\n      📄 Estado: {{status}}\n      \n      Si tienes preguntas o necesitas reprogramar, por favor contáctanos.\n      \n      Gracias por confiar en nosotros.\n      \n      Centro de Fisioterapia [Nombre del Centro]\n      Teléfono: [Número de teléfono]\n      Correo: [Correo electrónico]	<p>Hola {{name}},</p><p>Tu turno ha sido programado exitosamente en el Centro de Fisioterapia:</p><ul><li>🗓 <strong>Fecha y hora:</strong> {{formattedDate}}</li><li>👩‍⚕️ <strong>Profesional:</strong> {{professionalName}}</li><li>📝 <strong>Motivo:</strong> {{description}}</li><li>📄 <strong>Estado:</strong> {{status}}</li></ul><p>Si tienes preguntas o necesitas reprogramar, por favor contáctanos.</p><p>Gracias por confiar en nosotros.</p><p><strong>Centro de Fisioterapia CREFI</strong></p><p>Correo: crefi@frankgp.com</p>	2025-01-03 18:25:18.589893
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, "firstName", "lastName", email, whatsapp, username, password, birthdate, "nDni", image, role, title, specialization, bio, gender, "createdAt") FROM stdin;
\.


--
-- Name: email_templates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.email_templates_id_seq', 2, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: email_templates PK_06c564c515d8cdb40b6f3bfbbb4; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_templates
    ADD CONSTRAINT "PK_06c564c515d8cdb40b6f3bfbbb4" PRIMARY KEY (id);


--
-- Name: users PK_a3ffb1c0c8416b9fc6f907b7433; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

