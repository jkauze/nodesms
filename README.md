SMS Application Test
--
to explore and learn new technologies
- --

used technologies:
-
- Docker (For DB with MongoDB)
- Twilio (Trial Account)
- Handlebars
- Socket.io
- NodeJs
- --

RemindMe:
-
- Use .env to export env var (TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, PHONENUMBER_VERIFIED)

- Only works with verified phoneNumbers by twilio. (with incomming sms i need a phonenumber +01, Thanks movistar venezuela...)

- Set up the db running: docker-compose up -d

- PORTS: 3020 - app | 27018 - mongoContainer