/**
 * @swagger
 * /authentification:
 *   post:
 *     summary: Authentifier les agents
 *     tags: [RH]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               matricule:
 *                 type: string
 *                 example: 2024IKR1
 *               mdp:
 *                 type: string
 *                 example: 1234
 *     responses:
 *       200:
 *         description: Si l'authentification réussie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 titre:
 *                  anyOf:
 *                    - type: string
 *                      example: rh
 *                    - type: string
 *                      exemple: simple
 *                    - type: string
 *                      exemple: maitrise
 *                    - type: string
 *                      exemple: dg
 *                 agent:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     Nom:
 *                       type: string
 *                       example: ilunga
 *                     PostNom:
 *                       type: string
 *                       example: kayembe
 *                     Prenom:
 *                       type: string
 *                       example: raph
 *                     Matricule:
 *                       type: string
 *                       example: 2025IKR1
 *                     Mdp:
 *                       type: string
 *                       example: 1234
 *                     idDepartement:
 *                       type: Integer
 *                       example: 2
 *                     idTitre:
 *                       type: Integer
 *                       example: 1
 *       400:
 *         description: Requête invalide (échec de l'authentification ou données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: vide
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
 * @swagger
 * /departement-titre:
 *   get:
 *     summary: Récuperer tout le département et titres
 *     tags: [RH]
 *     responses:
 *       200:
 *         description: la liste de tout département et titres
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 departement:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       Nom:
 *                         type: string
 *                         example: production
 *                 titre:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       Intitule:
 *                         type: string
 *                         example: rh
 *                       idSalaire:
 *                         type: integer
 *                         example: 1
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
 * @swagger
 * /ajouter-agent:
 *   post:
 *     summary: Upload d'un agent avec sa photo
 *     tags: [RH]
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: nom
 *         type: string
 *         required: true
 *         description: Le nom de l'agent.
 *       - in: formData
 *         name: postNom
 *         type: string
 *         required: true
 *         description: Le post-nom de l'agent.
 *       - in: formData
 *         name: prenom
 *         type: string
 *         required: true
 *         description: Le prénom de l'agent.
 *       - in: formData
 *         name: idDepartement
 *         type: Integer
 *         required: true
 *         description: l'id du département.
 *       - in: formData
 *         name: idTitre
 *         type: Integer
 *         required: true
 *         description: l'id du titre.
 *       - in: formData
 *         name: photo
 *         type: file
 *         required: true
 *         description: La photo de l'agent à uploader.
 *     responses:
 *       200:
 *         description: si le cours est ajouté
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: success
 *       400:
 *         description: Requête invalide (si il y à des données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   anyOf:
 *                      - type: string
 *                        example: vide       
 *                      - type: string
 *                        example: l'agent existe   
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
 * @swagger
 * /agent-departement/{idDepartement}:
 *   get:
 *     summary: Récuperer tout les agents d'un département
 *     tags: [RH]
 *     parameters:
 *       - in: path
 *         name: idDepartement
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: L'ID du département pour lequel les agents seront retourné
 *     responses:
 *       200:
 *         description: la liste de tout les agents du département et titres
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 departement:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       Nom:
 *                         type: string
 *                         example: kipata
 *                       PostNom:
 *                         type: string
 *                         example: mulubwe
 *                       Prenom:
 *                         type: string
 *                         example: Elie
 *                       Matricule:
 *                         type: string
 *                         example: 2024KME34
 *       400:
 *         description: Requête invalide (données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: vide
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
 * @swagger
 * /shift-jour/{idAgent}:
 *   put:
 *     summary: Ajout un agent au groupe de nuit
 *     tags: [RH]
 *     parameters:
 *       - in: path
 *         name: idAgent
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: L'ID de l'agent
 *     responses:
 *       200:
 *         description: si l'agent est ajouté
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: SUCCESS
 *       400:
 *         description: Requête invalide (données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: vide
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
 * @swagger
 * /shift-nuit/{idAgent}:
 *   put:
 *     summary: Ajout un agent au groupe de nuit
 *     tags: [RH]
 *     parameters:
 *       - in: path
 *         name: idAgent
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: L'ID de l'agent
 *     responses:
 *       200:
 *         description: si l'agent est ajouté
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: SUCCESS
 *       400:
 *         description: Requête invalide (données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: vide
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
 * @swagger
 * /shift-agent/{idAgent}:
 *   get:
 *     summary: Retourne le shift de l'agent
 *     tags: [Agent]
 *     parameters:
 *       - in: path
 *         name: idAgent
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: L'ID de l'agent
 *     responses:
 *       200:
 *         description: si les données sont trouvées
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 jour:
 *                   type: boolean
 *                   example: true
 *                 nuit:
 *                   type: boolean
 *                   example: false
 *       400:
 *         description: Requête invalide (données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: vide
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
 * /user/statistique/{idPromotion}:
 *   get:
 *     summary: Récuperer le statistique pour une promotion
 *     tags: [Responsable tutorat et Décanat]
 *     parameters:
 *       - in: path
 *         name: idPromotion
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: l'ID de la promotion pour laquelle on récupère les stastiques
 *     responses:
 *       200:
 *         description: les données statistiques
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
 *                       nombreDemande:
 *                         type: integer
 *                         example: 3
 *       400:
 *         description: Requête invalide (données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: vide
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

/**
 * @swagger
 * /rapport-pointage/{idDepartement}/{mois}:
 *   get:
 *     summary: Récuperer les rapports d'un departement
 *     tags: [RH]
 *     parameters:
 *       - in: path
 *         name: idDepartement
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: path
 *         name: mois
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: le mois en entier pour lequel récupérer le rapport
 *     responses:
 *       200:
 *         description: la liste de présences et absences
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 rapport:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       agent:
 *                         type: object
 *                         properties:
 *                           Nom:
 *                             type: integer
 *                             example: 1
 *                           PostNom:
 *                             type: string
 *                             example: kipata
 *                           Prenom:
 *                             type: string
 *                             example: mulubwe
 *                           Matricule:
 *                             type: string
 *                             example: Elie
 *                       HeureArrivee:
 *                         type: string
 *                         exemple: 08h00
 *                       HeureSortie:
 *                         type: string
 *                         exemple: 16h00   
 *       400:
 *         description: Requête invalide (données manquantes; le departement n'existe pas)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: vide
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
 * @swagger
 * /rapport-pointage-agent/{idAgent}/{mois}:
 *   get:
 *     summary: Récuperer les rapports d'un agent
 *     tags: [RH]
 *     parameters:
 *       - in: path
 *         name: idAgent
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: L'ID de l'agent pour lequel on veux récupérer les rapports
 *       - in: path
 *         name: mois
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: le mois en entier pour lequel récupérer le rapport
 *     responses:
 *       200:
 *         description: la liste de présences et absences
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 rapport:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       agent:
 *                         type: object
 *                         properties:
 *                           Nom:
 *                             type: integer
 *                             example: 1
 *                           PostNom:
 *                             type: string
 *                             example: kipata
 *                           Prenom:
 *                             type: string
 *                             example: mulubwe
 *                           Matricule:
 *                             type: string
 *                             example: Elie
 *                       HeureArrivee:
 *                         type: string
 *                         exemple: 08h00
 *                       HeureSortie:
 *                         type: string
 *                         exemple: 16h00   
 *       400:
 *         description: Requête invalide (données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: vide
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