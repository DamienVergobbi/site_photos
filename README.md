# Instructions pour que ça fonctionne, parce que c'est mieux :

# Petite information :
Le code "$(document).ready(function() {})" dans les fichiers '*.js' est du jQuery.
Cette fonction permet de lancer les scripts une fois la page chargée, pour ne pas ralentir le chargement.
Pensez à mettre vos scripts JS entre les '{}' du coup :)

# Installer Node et NPM sur le pc :
- Télécharger et installer via le lien : https://nodejs.org/en/download/
- Voir si c'est bien installé en faisant les commandes :
    - node -v
    - npm -v
Si une erreur survient, refaire la première étape

# Installer Sass dans le dossier 'css'
- Ouvrir un terminal dans le dossier 'css'
- Installer Sass en local avec la commande 'npm install sass --save'
- Lancer Sass avec la commande 'npm run sass'

# Coder et avoir les changements en direct
- Installer 'Live Server' (extension VS Code)
- Lancer Sass si pas encore lancé 'npm run sass'
- Ouvrir le fichier 'index.html'
- Faire un clique droit, puis 'Ouvrir avec Live Server'

# Problèmes possibles
- Changements des fichiers *.scss qui ne s'actualisent pas :
    - Relancer Sass : 'Ctrl + C' dans le terminal
    - Regarder le message d'erreur dans le terminal avec Sass ouvert
    - Vider le cache du navigateur : Inspecteur de site > Réseau > cocher 'Disable cache'
- Images qui ne se chargent pas : 
    - T'as pas de co bro
    - L'image n'est pas libre de droit et est bloquée côté serveur

# Marche à suivre dans le code :
- Ne pas toucher aux fichiers '*.map'
- Ne pas toucher aux fichiers '*.css'
- Ne pas toucher au fichier 'package.json'
- Ne pas toucher au fichier 'index.html'

# Pour modifier le code d'une partie de la page :
- Pour le HTML, se rendre dans le dossier 'content', puis modifier le fichier correspondant à la partie du site
- Pour le CSS, se rendre dans le dossier 'css/inc/', puis modifier le fichier correspondant à la partie du site