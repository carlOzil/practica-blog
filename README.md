# Práctica BLOG Agosto ´23 📓
 
API REST con creacion de cuenta de usuario, inicio y cierre de sesion; si la cuenta creada tiene "role" de publisher, podrás escribir artículos y editar los artículos creados por tu cuenta mientras que el "role" admin podrá escribir, editar y borrar cualquier artículo ademas de hacer lo propio con los demás usuarios. Ambito Node, Express y MongoDB usando JWT(jsonwebtoken).
 
## Librerías usadas :books:
- Express  
- Express-Validator
- Bcrypt
- JSDoc
- Dotenv
- Jsonwebtoken
- Mongoose 
- Cors 
- Cookie-parser  
 
## Instalación de dependencias:
```javascript
npm i 
``` 

## Poner en marcha el puerto  
```javascript
npm run dev 
``` 
## Tutorial: 
Después de clonar el repositorio en local, crea tu propio archivo .env con ltus propias variables de entorno las cuales deberán ser llamadas: 
- PORT= (numero de puerto). 
- URI_DB= (tu url de MongoDB).
- JWT_SECRET= (clave secreta para generar token con JWT).