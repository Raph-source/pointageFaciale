//==============================================================================================================================================

/**
 * @
 * /ajouter-cours:
 *   post:
 *     summary: ajoute une cours dans une promotion
 *     tags: [Responsable du tutorat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               intitule:
 *                 type: string
 *                 example: algorithmique II
 *               idPromotion:
 *                 type: integer
 *                 example: 2
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
 *                   example: succès
 *       400:
 *         description: Requête invalide (si le cours existe déjà; si la promotion n'existe pas; si il y à des données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   anyOf:
 *                      - type: string
 *                        example: le cours existe déjà
 *                      - type: string
 *                        example: la promotion n'existe pas
 *                      - type: string
 *                        example: vide          
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
 * @
 * /ajouter-tuteur:
 *   post:
 *     summary: ajoute un tuteur
 *     tags: [Responsable du tutorat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 example: Ilunga
 *               postNom:
 *                 type: string
 *                 example: Kayembe
 *               prenom:
 *                 type: string
 *                 example: Raph
 *               email:
 *                 type: string
 *                 example: example@esisalama.org
 *               numero:
 *                 type: string
 *                 example: +243 811 445 324
 *               competance:
 *                 type: string
 *                 example: maîtrise les language de programmation C, Python et PHP
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
 *                   example: succès
 *       400:
 *         description: Requête invalide (si il y à un tuteur avec l'adresse email insérée; si l'email est invalide; si il y à des données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   anyOf:
 *                      - type: string
 *                        example: le tuteur existe déjà
 *                      - type: string
 *                        example: email invalide
 *                      - type: string
 *                        example: vide          
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
 * 
 * /supprimer-tuteur:
 *   post:
 *     summary: supprime un tuteur
 *     tags: [Responsable du tutorat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idTuteur:
 *                 type: integer
 *                 example: 10
 *     responses:
 *       200:
 *         description: si le tuteur est supprimé
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: succès
 *       400:
 *         description: Requête invalide (si le tuteur a un cours; si le tuteur n'existe pas; si il y à des données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   anyOf:
 *                      - type: string
 *                        example: tuteur a un cours
 *                      - type: string
 *                        example: tuteur n'existe pas
 *                      - type: string
 *                        example: vide          
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
 * 
 * /lancer-cours:
 *   post:
 *     summary: permet de lancer un cours
 *     tags: [Responsable du tutorat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dateLancement:
 *                 type: date
 *                 example: 2024-11-26T11:26:00Z
 *               idCours:
 *                 type: integer
 *                 example: 6
 *               idUtilisateur:
 *                 type: integer
 *                 example: 1
 *               email:
 *                 type: string
 *                 example: example@esisalama.org
 *               idTuteur:
 *                 type: integer
 *                 example: 8
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
 *                   example: succès
 *       400:
 *         description: Requête invalide (si le cours est déjà lancéé; si la date est inférieure à la date actuelle; si il y à des données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   anyOf:
 *                      - type: string
 *                        example: cours déjà lancé
 *                      - type: string
 *                        example: date invalide
 *                      - type: string
 *                        example: vide          
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
 * 
 * /ajouter-seance:
 *   post:
 *     summary: ajoute une séance
 *     tags: [Responsable du tutorat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idCoursLance:
 *                 type: integer
 *                 example: 13
 *               date:
 *                 type: date
 *                 example: 2024-11-26T11:26:00Z
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
 *                   example: succès
 *       400:
 *         description: Requête invalide (si la date est invalide; si le cours est non lancé; si il y à des données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   anyOf:
 *                      - type: string
 *                        example: date invalide
 *                      - type: string
 *                        example: Cours non lancé
 *                      - type: string
 *                        example: vide          
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
 * 
 * /cloturer-cours:
 *   post:
 *     summary: clôturer un cours
 *     tags: [Responsable du tutorat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idCoursLance:
 *                 type: integer
 *                 example: 13
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
 *                   example: succès
 *       400:
 *         description: Requête invalide (si la date est invalide; si le cours est non lancé; si il y à des données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                     type: string
 *                     example: vide          
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
 * 
 * /demande-encadrement:
 *   post:
 *     summary: Récuperer toutes les demandes d'encadrement des étudiants pour un cours
 *     tags: [Responsable du tutorat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idCours:
 *                 type: integer
 *                 example: 9
 *     responses:
 *       200:
 *         description: la liste de toutes les demande des étudiants
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
 *                       etudiant:
 *                          type: object
 *                          properties:
 *                             nom:
 *                               type: string
 *                               example: mukebo
 *                             postNom:
 *                               type: string
 *                               example: kalasa
 *                             prenom:
 *                               type: string
 *                               example: ruth
 *                       date:
 *                         type: date
 *                         example: 2024-10-05T06:34:53.000Z
 *                       difficulte:
 *                         type: string
 *                         example: je ne maîtrise pas les boucles
 *       400:
 *         description: Requête invalide (si il n'y à aucune demande; si il y'à des données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   anyOf:
 *                     - type: string
 *                       example: aucune demande
 *                     - type: string
 *                       example: vide
 *       403:
 *         description: Accès non autorisé (si les champs sont manquant; si le cours n'existe pas)
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
 * 
 * /liste-tuteur:
 *   get:
 *     summary: Récuperer la liste de tous les tuteurs
 *     tags: [Responsable du tutorat]
 *     responses:
 *       200:
 *         description: la liste des tuteurs
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
 *                         id:
 *                            type: integer
 *                            example: 4
 *                         nom:
 *                             type: string
 *                             example: mukebo
 *                         postNom:
 *                             type: string
 *                             example: kalasa
 *                         prenom:
 *                             type: string
 *                             example: ruth
 *                         email:
 *                             type: string
 *                             example: exemple@esisalama.org
 *                         numero:
 *                             type: string
 *                             example: +243 995 444 246
 *                         competance:
 *                            type: string
 *                            example: programmation et base des données
 *                                                
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
 * 
 * /get-cours-lance/{idPromotion}:
 *   get:
 *     summary: Récupérer la liste de tous les cours lancés
 *     tags:
 *       - Responsable du tutorat
 *     parameters:
 *       - in: path
 *         name: idPromotion
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: L'ID de la promotion pour laquelle on récupère les cours lancés
 *     responses:
 *       200:
 *         description: La liste des cours lancés
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
 *                         example: 36
 *                       dateLancement:
 *                         type: string
 *                         format: date-time
 *                         example: 2024-11-26T09:26:00.000Z
 *                       intitule:
 *                         type: string
 *                         example: algorithmique
 *                       tuteur:
 *                         type: object
 *                         properties:
 *                           prenom:
 *                             type: string
 *                             example: raph
 *                           nom: 
 *                             type: string
 *                             example: kayembe
 *                       cours:
 *                         type: object
 *                         properties:
 *                           intitule:
 *                              type: string
 *                              example: technique de création publicitaire
 *       400:
 *         description: Requête invalide (par exemple, données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: vide
 *       403:
 *         description: Accès non autorisé (par exemple, promotion inexistante)
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
 * 
 * /seance-cours/{idCoursLance}:
 *   get:
 *     summary: Récupérer la liste de toutes les séances d'un cours lancé
 *     tags:
 *       - Responsable du tutorat
 *     parameters:
 *       - in: path
 *         name: idCoursLance
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: L'ID du cours pour lequel on récupère les séances
 *     responses:
 *       200:
 *         description: La liste des séances du cours
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
 *                         example: 27
 *                       date:
 *                         type: string
 *                         format: date-time
 *                         example: 2024-11-26T09:26:00.000Z
 *                       idCoursLance:
 *                         type: integer
 *                         example: 22
 *       400:
 *         description: Requête invalide (par exemple, données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   type: string
 *                   example: vide
 *       403:
 *         description: Accès non autorisé (par exemple, promotion inexistante ou accès refusé)
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
 * 
 * /voir-feedback/{idCoursLance}:
 *   get:
 *     summary: Récupérer la liste de tous les feedbacks des étudiants
 *     tags:
 *       - Responsable du tutorat
 *     parameters:
 *       - in: path
 *         name: idCoursLance
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: L'ID du cours lancé pour lequel on récupère les feedback
 *     responses:
 *       200:
 *         description: La liste des feedbacks des étudiants
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
 *                         example: 27
 *                       avis:
 *                         type: string
 *                         example: je viens de comprendre
 *                       idCoursLance:
 *                         type: integer
 *                         example: 22
 *                       idCategorie:
 *                         type: integer
 *                         example: 22
 *                       idEtudiant:
 *                         type: integer
 *                         example: 218
 *                       date:
 *                         type: string
 *                         format: date-time
 *                         example: 2024-11-26T09:26:00.000Z
 *       400:
 *         description: Requête invalide (si il n'y à pas des feedback; données manquantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reponse:
 *                   anyOf:
 *                     - type: string
 *                       example: aucun feedback
 *                     - type: string
 *                       example: vide
 *       403:
 *         description: Accès non autorisé (par exemple, promotion inexistante ou accès refusé)
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
