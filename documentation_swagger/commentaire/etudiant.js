/**
 * /etudiant-cours:
 *   post:
 *     summary: Récuperer tout le cours de la promotion de l'étudiant
 *     tags: [Etudiant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               matricule:
 *                 type: string
 *                 example: 20mk001
 *     responses:
 *       200:
 *         description: la liste de tout les cours de la promotion de l'étudiant
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       intitule:
 *                         type: string
 *                         example: algorithmique
 *                       idPromotion:
 *                         type: integer
 *                         example: 2
 *       400:
 *         description: Requête invalide (si l'étudiant n'existe pas, ou données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   anyOf:
 *                     - type: string
 *                       example: étudiant n'existe pas
 *                     - type: string
 *                       example: vide
 *       403:
 *         description: Accès non autorisé (si les champs sont manquant)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: interdit
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: erreur serveur
 */

//==============================================================================================================================================

/**
 * /soumettre-demande:
 *   post:
 *     summary: Soumet la démande d'encadrement d'un étudiant
 *     tags: [Etudiant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               difficulte:
 *                 type: string
 *                 example: j'ai une difficulté au niveau avec les pointeurs
 *               matricule:
 *                 type: string
 *                 example: 21im242
 *               idCours:
 *                 type: integer
 *                 example: 12
 *     responses:
 *       200:
 *         description: si la soumission de la demande réussie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: succès
 *       400:
 *         description: Requête invalide (si l'étudiant a une demande encours pour le même cours; si l'étudiant n'existe pas; si le cours est déjà lancé; si il y à des données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   anyOf:
 *                      - type: string
 *                        example: vous avez déjà soumis une demande pour ce cours
 *                      - type: string
 *                        example: étudiant n'existe pas
 *                      - type: string
 *                        example: le cours est déjà lancé
 *                      - type: string
 *                        example: vide          
 * 
 *       403:
 *         description: Accès non autorisé (si les champs sont manquant)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: interdit
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: erreur serveur
 */

//==============================================================================================================================================

/**
 * /envoyer-feedback:
 *   post:
 *     summary: Envoie le feedback d'un étudiant
 *     tags: [Etudiant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               avis:
 *                 type: string
 *                 example: j'ai trouvé très enrichissantes les séances que nous avions eu
 *               matricule:
 *                 type: string
 *                 example: 21im242
 *               idCours:
 *                 type: integer
 *                 example: 12
 *               idCategorie:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: si l'envoi du feedback réussie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: succès
 *       400:
 *         description: Requête invalide (si l'étudiant n'avait pas soumis de demande; si le cours est non clôturé; si il y à des données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   anyOf:
 *                      - type: string
 *                        example: Vous n'avait pas soumis de demande
 *                      - type: string
 *                        example: Cours non clôturé
 *                      - type: string
 *                        example: vide          
 * 
 *       403:
 *         description: Accès non autorisé (si les champs sont manquant; si l'étudiant n'existe pas)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   anyOf:
 *                      - type: string
 *                        example: interdit
 *                      - type: string
 *                        example: étudiant n'existe pas
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: erreur serveur
 */

//==============================================================================================================================================

/**
 * /check-etudiant:
 *   post:
 *     summary: Vérifie si l'étudiant qui s'authentifie est dans la base de données
 *     tags: [Etudiant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               matricule:
 *                 type: string
 *                 example: 21im242
 *     responses:
 *       200:
 *         description: si l'envoi du feedback réussie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: succès
 *       400:
 *         description: Requête invalide (si l'étudiant n'existe pas)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                    type: string
 *                    example: étudiant n'existe pas          
 * 
 *       403:
 *         description: Accès non autorisé (si les champs sont manquant)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                    type: string
 *                    example: interdit
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: erreur serveur
 */

//==============================================================================================================================================

/**
 * /get-seance:
 *   post:
 *     summary: Récuperer toutes les séances d'un cours
 *     tags: [Etudiant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idCours:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: la liste de tout les cours de la promotion de l'étudiant
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       date:
 *                         type: date
 *                         example: 2024-11-26T09:26:00.000Z
 *                       idCoursLance:
 *                         type: integer
 *                         example: 2
 *       400:
 *         description: Requête invalide (si il n'y à aucune séance; si le cours est non lancé; si il y'à des données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   anyOf:
 *                     - type: string
 *                       example: Aucune séance
 *                     - type: string
 *                       example: Cours non lancé
 *                     - type: string
 *                       example: vide
 *       403:
 *         description: Accès non autorisé (si les champs sont manquant)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: interdit
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: erreur serveur
 */

//==============================================================================================================================================

/**
 * /categorie-feedback:
 *   get:
 *     summary: Récuperer les catégories des feedback
 *     tags: [Etudiant]
 *     responses:
 *       200:
 *         description: la liste des catégories des feedback
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       type:
 *                         type: string
 *                         example: positif
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: erreur serveur
 */
