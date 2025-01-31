/**
 * @swagger
 * /authentification:
 *   post:
 *     summary: Authentifier les agents
 *     tags: [Agent]
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
 *     tags: [Agent]
 *     responses:
 *       200:
 *         description: la liste de tout les promotions
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
 *     tags: [Agent]
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

/**
 *
 * /user/get-liste-cours:
 *   post:
 *     summary: Récuperer tout le cours d'une promotion
 *     tags: [Responsable tutorat et Décanat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idPromotion:
 *                 type: integer
 *                 example: 4
 *     responses:
 *       200:
 *         description: la liste de tout les cours d'une promotion
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
 *                         example: 4
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

