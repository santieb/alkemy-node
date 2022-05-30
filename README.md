# Alkemy-node

Alkemy-node es un challenge de desarrollo backend construido para explorar el mundo de Disney.
## Comenzando 🚀

Haz un clon del repositorio

```
git clone https://github.com/santieb/alkemy-node.git
```

Instala las dependencias

```
npm install
```

### Instrucciones 📄

**1 - Variables de entorno**

Crea un archivo **".env"** e inserta los datos tomando como referencia el archivo **".env.sample"**. Debería quedar algo asi:

```
PORT=3001
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASS=pass
MYSQL_DB_NAME=namedb
SECRET=secretpass
EXPIRESIN=60*60*60*24
SENDGRID_API_KEY=sendgridkey
```

**2 - Ejecución**

Para iniciar mi proyecto de manera local, tienes que usar `npm run start` y para iniciar el test usa `npm run test`

* Recuerda que la API está documentada en Postman, te será más fácil hacer pruebas
https://documenter.getpostman.com/view/16916322/Uz5CKd2i

## Autor ✒️

* **Santiago Barreto** - [santieb](https://gitlab.com/santieb) 

Challenge provided by [Alkemy](https://www.alkemy.org/)