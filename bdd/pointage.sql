-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 31 jan. 2025 à 19:52
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pointage`
--

-- --------------------------------------------------------

--
-- Structure de la table `agent`
--

CREATE TABLE `agent` (
  `id` int(11) NOT NULL,
  `Nom` varchar(191) NOT NULL,
  `PostNom` varchar(191) NOT NULL,
  `Prenom` varchar(191) NOT NULL,
  `Matricule` varchar(191) NOT NULL,
  `idDepartement` int(11) NOT NULL,
  `idTitre` int(11) NOT NULL,
  `Mdp` varchar(191) NOT NULL DEFAULT '1234',
  `Status` tinyint(1) NOT NULL DEFAULT 1,
  `Telehone` varchar(191) NOT NULL DEFAULT '0000000000'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `agent`
--

INSERT INTO `agent` (`id`, `Nom`, `PostNom`, `Prenom`, `Matricule`, `idDepartement`, `idTitre`, `Mdp`, `Status`, `Telehone`) VALUES
(1, 'ilunga', 'kayembe', 'raph', '2025IKR1', 2, 1, '1234', 1, '+243831564828');

-- --------------------------------------------------------

--
-- Structure de la table `agentmatin`
--

CREATE TABLE `agentmatin` (
  `id` int(11) NOT NULL,
  `idAgent` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `agentsoiree`
--

CREATE TABLE `agentsoiree` (
  `id` int(11) NOT NULL,
  `idAgent` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `departement`
--

CREATE TABLE `departement` (
  `id` int(11) NOT NULL,
  `Nom` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `departement`
--

INSERT INTO `departement` (`id`, `Nom`) VALUES
(1, 'production'),
(2, 'gestion');

-- --------------------------------------------------------

--
-- Structure de la table `presence`
--

CREATE TABLE `presence` (
  `id` int(11) NOT NULL,
  `idAgent` int(11) NOT NULL,
  `Date` datetime(3) NOT NULL,
  `HeureArrivee` datetime(3) NOT NULL,
  `HeureSortie` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `salaireheure`
--

CREATE TABLE `salaireheure` (
  `id` int(11) NOT NULL,
  `Montant` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `salaireheure`
--

INSERT INTO `salaireheure` (`id`, `Montant`) VALUES
(1, 1000),
(2, 300),
(3, 500),
(4, 3000);

-- --------------------------------------------------------

--
-- Structure de la table `titre`
--

CREATE TABLE `titre` (
  `id` int(11) NOT NULL,
  `Intitule` varchar(191) NOT NULL,
  `idSalaire` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `titre`
--

INSERT INTO `titre` (`id`, `Intitule`, `idSalaire`) VALUES
(1, 'rh', 1),
(2, 'simple', 2),
(3, 'maitrise', 3),
(4, 'dg', 4);

-- --------------------------------------------------------

--
-- Structure de la table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('1a354126-1245-4d69-b212-0ba24b999289', '1c0d01c5a8eb5b7b01e6c087f863c6828d44615683f1c35c553f2b2d94aa158a', '2025-01-31 07:59:40.887', '20250131075939_ajout_status_dans_table_agent', NULL, NULL, '2025-01-31 07:59:39.834', 1),
('2a83ab98-ef98-4230-b24f-a31fec5d49e9', '7e97d37c8da8c4e94f15a5b2a5633d59dfad79f96996e425d58d4f9fe8dc41b5', '2025-01-30 19:17:45.562', '20250130191737_creation', NULL, NULL, '2025-01-30 19:17:37.194', 1),
('3f0c2ac0-1ecc-4760-91c1-d45fe8b574cc', '50207e07631740a021ff1c83a6c5a2960919fe9df3bbf675800bfcdb4b92e13d', '2025-01-30 20:20:00.405', '20250130201959_ajout_mdp_dans_table_agent', NULL, NULL, '2025-01-30 20:19:59.840', 1),
('433c2401-4b8d-4e8e-bfee-2198f59a4dae', '34bab3234a8fac835897094a1316c25e28a2bb6f77194a2a33bd346cc34cc0de', '2025-01-31 18:19:56.587', '20250131181955_ajout_telephone_dans_table_agent', NULL, NULL, '2025-01-31 18:19:55.612', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `agent`
--
ALTER TABLE `agent`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Agent_idDepartement_fkey` (`idDepartement`),
  ADD KEY `Agent_idTitre_fkey` (`idTitre`);

--
-- Index pour la table `agentmatin`
--
ALTER TABLE `agentmatin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `AgentMatin_idAgent_fkey` (`idAgent`);

--
-- Index pour la table `agentsoiree`
--
ALTER TABLE `agentsoiree`
  ADD PRIMARY KEY (`id`),
  ADD KEY `AgentSoiree_idAgent_fkey` (`idAgent`);

--
-- Index pour la table `departement`
--
ALTER TABLE `departement`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `presence`
--
ALTER TABLE `presence`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Presence_idAgent_fkey` (`idAgent`);

--
-- Index pour la table `salaireheure`
--
ALTER TABLE `salaireheure`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `titre`
--
ALTER TABLE `titre`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Titre_idSalaire_fkey` (`idSalaire`);

--
-- Index pour la table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `agent`
--
ALTER TABLE `agent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `agentmatin`
--
ALTER TABLE `agentmatin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `agentsoiree`
--
ALTER TABLE `agentsoiree`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `departement`
--
ALTER TABLE `departement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `presence`
--
ALTER TABLE `presence`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `salaireheure`
--
ALTER TABLE `salaireheure`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `titre`
--
ALTER TABLE `titre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `agent`
--
ALTER TABLE `agent`
  ADD CONSTRAINT `Agent_idDepartement_fkey` FOREIGN KEY (`idDepartement`) REFERENCES `departement` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Agent_idTitre_fkey` FOREIGN KEY (`idTitre`) REFERENCES `titre` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `agentmatin`
--
ALTER TABLE `agentmatin`
  ADD CONSTRAINT `AgentMatin_idAgent_fkey` FOREIGN KEY (`idAgent`) REFERENCES `agent` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `agentsoiree`
--
ALTER TABLE `agentsoiree`
  ADD CONSTRAINT `AgentSoiree_idAgent_fkey` FOREIGN KEY (`idAgent`) REFERENCES `agent` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `presence`
--
ALTER TABLE `presence`
  ADD CONSTRAINT `Presence_idAgent_fkey` FOREIGN KEY (`idAgent`) REFERENCES `agent` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `titre`
--
ALTER TABLE `titre`
  ADD CONSTRAINT `Titre_idSalaire_fkey` FOREIGN KEY (`idSalaire`) REFERENCES `salaireheure` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
