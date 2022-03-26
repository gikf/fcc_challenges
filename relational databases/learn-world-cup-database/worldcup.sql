--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE worldcup;
--
-- Name: worldcup; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE worldcup WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE worldcup OWNER TO freecodecamp;

\connect worldcup

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: games; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.games (
    game_id integer NOT NULL,
    year integer NOT NULL,
    round character varying NOT NULL,
    winner_id integer NOT NULL,
    opponent_id integer NOT NULL,
    winner_goals integer NOT NULL,
    opponent_goals integer NOT NULL
);


ALTER TABLE public.games OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.games_game_id_seq OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.games_game_id_seq OWNED BY public.games.game_id;


--
-- Name: teams; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.teams (
    team_id integer NOT NULL,
    name character varying(20) NOT NULL
);


ALTER TABLE public.teams OWNER TO freecodecamp;

--
-- Name: teams_team_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.teams_team_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teams_team_id_seq OWNER TO freecodecamp;

--
-- Name: teams_team_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.teams_team_id_seq OWNED BY public.teams.team_id;


--
-- Name: games game_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_game_id_seq'::regclass);


--
-- Name: teams team_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams ALTER COLUMN team_id SET DEFAULT nextval('public.teams_team_id_seq'::regclass);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.games VALUES (164, 2018, 'Final', 79, 80, 4, 2);
INSERT INTO public.games VALUES (165, 2018, 'Third Place', 81, 82, 2, 0);
INSERT INTO public.games VALUES (166, 2018, 'Semi-Final', 80, 82, 2, 1);
INSERT INTO public.games VALUES (167, 2018, 'Semi-Final', 79, 81, 1, 0);
INSERT INTO public.games VALUES (168, 2018, 'Quarter-Final', 80, 83, 3, 2);
INSERT INTO public.games VALUES (169, 2018, 'Quarter-Final', 82, 84, 2, 0);
INSERT INTO public.games VALUES (170, 2018, 'Quarter-Final', 81, 85, 2, 1);
INSERT INTO public.games VALUES (171, 2018, 'Quarter-Final', 79, 86, 2, 0);
INSERT INTO public.games VALUES (172, 2018, 'Eighth-Final', 82, 87, 2, 1);
INSERT INTO public.games VALUES (173, 2018, 'Eighth-Final', 84, 88, 1, 0);
INSERT INTO public.games VALUES (174, 2018, 'Eighth-Final', 81, 89, 3, 2);
INSERT INTO public.games VALUES (175, 2018, 'Eighth-Final', 85, 90, 2, 0);
INSERT INTO public.games VALUES (176, 2018, 'Eighth-Final', 80, 91, 2, 1);
INSERT INTO public.games VALUES (177, 2018, 'Eighth-Final', 83, 92, 2, 1);
INSERT INTO public.games VALUES (178, 2018, 'Eighth-Final', 86, 93, 2, 1);
INSERT INTO public.games VALUES (179, 2018, 'Eighth-Final', 79, 94, 4, 3);
INSERT INTO public.games VALUES (180, 2014, 'Final', 95, 94, 1, 0);
INSERT INTO public.games VALUES (181, 2014, 'Third Place', 96, 85, 3, 0);
INSERT INTO public.games VALUES (182, 2014, 'Semi-Final', 94, 96, 1, 0);
INSERT INTO public.games VALUES (183, 2014, 'Semi-Final', 95, 85, 7, 1);
INSERT INTO public.games VALUES (184, 2014, 'Quarter-Final', 96, 97, 1, 0);
INSERT INTO public.games VALUES (185, 2014, 'Quarter-Final', 94, 81, 1, 0);
INSERT INTO public.games VALUES (186, 2014, 'Quarter-Final', 85, 87, 2, 1);
INSERT INTO public.games VALUES (187, 2014, 'Quarter-Final', 95, 79, 1, 0);
INSERT INTO public.games VALUES (188, 2014, 'Eighth-Final', 85, 98, 2, 1);
INSERT INTO public.games VALUES (189, 2014, 'Eighth-Final', 87, 86, 2, 0);
INSERT INTO public.games VALUES (190, 2014, 'Eighth-Final', 79, 99, 2, 0);
INSERT INTO public.games VALUES (191, 2014, 'Eighth-Final', 95, 100, 2, 1);
INSERT INTO public.games VALUES (192, 2014, 'Eighth-Final', 96, 90, 2, 1);
INSERT INTO public.games VALUES (193, 2014, 'Eighth-Final', 97, 101, 2, 1);
INSERT INTO public.games VALUES (194, 2014, 'Eighth-Final', 94, 88, 1, 0);
INSERT INTO public.games VALUES (195, 2014, 'Eighth-Final', 81, 102, 2, 1);


--
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.teams VALUES (79, 'France');
INSERT INTO public.teams VALUES (80, 'Croatia');
INSERT INTO public.teams VALUES (81, 'Belgium');
INSERT INTO public.teams VALUES (82, 'England');
INSERT INTO public.teams VALUES (83, 'Russia');
INSERT INTO public.teams VALUES (84, 'Sweden');
INSERT INTO public.teams VALUES (85, 'Brazil');
INSERT INTO public.teams VALUES (86, 'Uruguay');
INSERT INTO public.teams VALUES (87, 'Colombia');
INSERT INTO public.teams VALUES (88, 'Switzerland');
INSERT INTO public.teams VALUES (89, 'Japan');
INSERT INTO public.teams VALUES (90, 'Mexico');
INSERT INTO public.teams VALUES (91, 'Denmark');
INSERT INTO public.teams VALUES (92, 'Spain');
INSERT INTO public.teams VALUES (93, 'Portugal');
INSERT INTO public.teams VALUES (94, 'Argentina');
INSERT INTO public.teams VALUES (95, 'Germany');
INSERT INTO public.teams VALUES (96, 'Netherlands');
INSERT INTO public.teams VALUES (97, 'Costa Rica');
INSERT INTO public.teams VALUES (98, 'Chile');
INSERT INTO public.teams VALUES (99, 'Nigeria');
INSERT INTO public.teams VALUES (100, 'Algeria');
INSERT INTO public.teams VALUES (101, 'Greece');
INSERT INTO public.teams VALUES (102, 'United States');


--
-- Name: games_game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.games_game_id_seq', 195, true);


--
-- Name: teams_team_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.teams_team_id_seq', 102, true);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);


--
-- Name: teams teams_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_name_key UNIQUE (name);


--
-- Name: teams teams_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (team_id);


--
-- Name: games games_opponent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_opponent_id_fkey FOREIGN KEY (opponent_id) REFERENCES public.teams(team_id);


--
-- Name: games games_winner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_winner_id_fkey FOREIGN KEY (winner_id) REFERENCES public.teams(team_id);


--
-- PostgreSQL database dump complete
--

