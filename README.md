# ryu-twitter-bot
¡Hola! ¡Este proyecto tiene como objetivo hacer un bot de Telegram que reenvíe actualizaciones de Twitter a personas en un canal de telegram

Que hace
Obtiene tweets cada 1 minutos del usuario de Twitter especificado el tiempo puede ser modificado en app.js.
Publicarlos en un canal de Telegram.

Comandos

1- npm i telegraf
2- npm i twitter
3- npm i node-cron

Rellenar los siguientes espacios

TELEGRAM
1-telegramBotToken:
2-channelUsername: Nombre del canal de telegram a utilizar

TWITTER
username : "wirddin"; Nombre de usuario de la cuenta de Twitter de la que queremos extraer los tweets. Sin @
consumerKey : De dev.twitter.com
consumerSecret : De dev.twitter.com
accessToken : De dev.twitter.com
accessSecret : De dev.twitter.com

Necesario
Token de Telegram Bot (Use @BotFather Telegram Bot para crear uno)
Token de consumidor de Twitter, secreto, token de acceso y secreto, obtengalo en dev.twitter.com

Pasos
Obtenga las credenciales requeridas y complete config.js(use ENV vars si lo desea, pero a través del archivo de configuración)
Crea un canal de Telegram
Agrega el bot que creaste en el primer paso al canal de Telegram como administrador. (No intente agregar como usuario y promover, no funciona de esa manera)
Configure un trabajo cron para que se ejecute cron.jscada X minutos (lo actualizará con la configuración de heroku)
