# DATAxDEVWEB
Projet promo Data et Dev web Simplon : création d'un chat et sauvegarde des informations utilisateurs + messages dans une base de données

Les étapes:
- Création du front: pages HTML du chat
    > Modélisation des actions et pages https://www.figma.com/file/ZAyBHriRZW114yqWn8Tssprt/Untitled?node-id=8%3A106
    > Utilisation de Bootstrap
    > 3 pages crées: accueil, connection, message avec les routes entre les pages suite à chaque action des utilisateurs

- Création de la base de donnée avec les tables utilisateurs et messages, comportant les attributs en lien avec les fonctionnalités du chat
    > Création des fichiers schema.sql, constraints.sql et data.sql via MySQL Workbench
    > Conception du MCD pour respecter l'intégrité de la BD
    > Création de la BD et de 2 tables liées via un attribut commun, user_id, avec un systeme de clé pour définir le lien entre les 2 tables

- Création d'un serveur local et de la connection client / serveur avec Node JS
    > Module Express pour faciliter la création
    > Module Nodemon pour lancer le serveur automatiquement à chaque interaction
    > Module Axios pour créer la connection serveur

- Création de la connection avec la base de donnée avec Node JS
    > Module Express pour la création
    > Module Nodemon pour lancer le serveur automatiquement à chaque interaction
    > MySQL Workbench comme interface utilisateur pour la base de données

- Gestion des mises à jour de la base de données et des routes en lien avec l'activité des utilisateurs
    > Insertion de nouveaux utilisateurs après connection sur le chat
    > Suppression d'utilisateurs 
    > Stockage et affichage des messages avec le nom de l'auteur

- Utilisation de Github et Trello 
    > Accéder à Trello Chat GRP3: https://trello.com/b/EhgJjiXz/chat-grp-3 

