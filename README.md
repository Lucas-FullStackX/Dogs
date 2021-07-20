<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Dogs

<p align="left">
  <img height="200" src="./dog.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

## Horarios y Fechas

El proyecto tendrá una duración máxima de tres semanas. En el caso de que completan todas las tareas antes de dicho lapso podrán avisar a su Instructor para coordinar una fecha de presentación del trabajo (DEMO).

## Comenzando

1.  Se debe iniciar git con `git init`
2.  Crear en su cuenta de GitHub un nuevo repo con el nombre `PI-Dogs-FT__` donde `__` es el numero de cohorte en el que estas
3.  Hacer un commit inicial ej: `git add .` => `git commit -m "init"` => `git branch -M main`
4.  Seguir las instrucciones de GitHub para 'conectar' su repositorio local con GitHub `git remote add........`
5.  Hacer push de ese commit `git push -u origin main`
6.  No olvidar que deben regularmente hacer commit y push para mantener el repo actualizado en la nube

Tendrán un `boilerplate` con la estructura general tanto del servidor como de cliente.

**IMPORTANTE:** Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `dogs`

El contenido de `client` fue creado usando: Create React App.

## Enunciado

La idea general es crear una aplicación en la cual se puedan ver distintas razas de perro junto con información relevante de las mismas utilizando la api externa [the dog api](https://thedogapi.com/) y a partir de ella poder, entre otras cosas:

- Buscar perros
- Filtrarlos / Ordenarlos
- Agregar nuevos perros

**IMPORTANTE**: Para poder utilizar esta API externa es necesario crearse una cuenta para obtener una API Key que luego debera ser incluida en todos los request que hagamos a rawg simplemente agregando `?api_key={YOUR_API_KEY}` al final de cada endpoint. Agregar la clave en el archivo `.env` para que la misma no se suba al repositorio por cuestiones de seguridad y utilizarla desde allí.

**IMPORTANTE**: Para las funcionalidades de filtrado y ordenamiento NO pueden utilizar los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados sino que deben realizarlo ustedes mismos. En particular alguno de los ordenamientos o filtrados debe si o si realizarse desde el frontend.

### Únicos Endpoints/Flags que pueden utilizar

- GET https://api.thedogapi.com/v1/breeds
- GET https://api.thedogapi.com/v1/breeds/search?q={raza_perro}

### Requerimientos mínimos:

A continuación se detallaran los requerimientos mínimos para la aprobación del proyecto individial. Aquellos que deseen agregar más funcionalidades podrán hacerlo. En cuanto al diseño visual no va a haber wireframes ni prototipos prefijados sino que tendrán libertad de hacerlo a su gusto pero tienen que aplicar los conocimientos de estilos vistos en el curso para que quede agradable a la vista.

**IMPORTANTE**: No se permitirá utilizar librerías externas para aplicar estilos a la aplicación. Tendrán que utilizar CSS con algunas de las opciones que vimos en dicha clase (CSS puro, CSS Modules o Styled Components)

#### Tecnologías necesarias:

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

#### Frontend

Se debe desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

**Pagina inicial**: deben armar una landing page con

- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

**Ruta principal**: debe contener

- [ ] Input de búsqueda para encontrar razas de perros por nombre
- [ ] Área donde se verá el listado de razas de perros. Deberá mostrar su:
  - Imagen
  - Nombre
  - Temperamento
- [ ] Botones/Opciones para filtrar por por temperamento y por raza existente o agregada por nosotros
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las razas de perro por orden alfabético y por peso
- [ ] Paginado para ir buscando y mostrando las siguientes razas

**IMPORTANTE**: Dentro de la Ruta Principal se deben mostrar tanto las razas de perros traidas desde la API como así también las de la base de datos.

**Ruta de detalle de raza de perro**: debe contener

- [ ] Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
- [ ] Altura
- [ ] Peso
- [ ] Años de vida

**Ruta de creación de raza de perro**: debe contener

- [ ] Un formulario **controlado** con los siguientes campos
  - Nombre
  - Altura (Diferenciar entre altura mínima y máxima)
  - Peso (Diferenciar entre peso mínimo y máximo)
  - Años de vida
- [ ] Posibilidad de seleccionar/agregar uno o más temperamentos
- [ ] Botón/Opción para crear una nueva raza de perro

#### Base de datos

El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):

- [ ] Raza con las siguientes propiedades:
  - ID \*
  - Nombre \*
  - Altura \*
  - Peso \*
  - Años de vida
- [ ] Temperamento con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades debe ser de muchos a muchos ya que una raza de perro puede tener varios "temperamentos" en simultaneo y, a su vez, un "temperamento" puede corresponder a múltiples razas de perro distintas. Por ejemplo la raza `pug` es docil, inteligente y sociable (entre otras). Pero a su vez existen otras razas de perro que también son sociables o inteligentes.

**IMPORTANTE**: Pensar como modelar los IDs de las razas de perros en la base de datos. Existen distintas formas correctas de hacerlo pero tener en cuenta que cuando hagamos click en alguna, esta puede provenir de la API o de la Base de Datos por lo que cuando muestre su detalle no debería haber ambigüedad en cual se debería mostrar. Por ejemplo si en la API la raza `Pug` tiene id = 1 y en nuestra base de datos creamos una nueva raza `Henry Pug` con id = 1, ver la forma de diferenciarlas cuando querramos acceder al detalle de la misma.

#### Backend

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

**IMPORTANTE**: No está permitido utilizar los filtrados, ordenamientos y paginados brindados por la API externa, todas estas funcionalidades tienen que implementarlas ustedes.

- [ ] **GET /dogs**:
  - Obtener un listado de las primeras 8 razas de perro
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] **GET /dogs?name="..."**:
  - Obtener un listado de las primeras 8 razas de perro que contengan la palabra ingresada como query parameter
  - Si no existe ninguna raza de perro mostrar un mensaje adecuado
- [ ] **GET /dogs/{idRaza}**:
  - Obtener el detalle de una raza de perro en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
  - Incluir los temperamentos asociados
- [ ] **GET /temperament**:
  - Obtener todos los temperamentos posibles
  - En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
- [ ] **POST /dog**:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
  - Crea una raza de perro en la base de datos

#### Testing

- [ ] Al menos tener un componente del frontend con sus tests respectivos
- [ ] Al menos tener una ruta del backend con sus tests respectivos
- [ ] Al menos tener un modelo de la base de datos con sus tests respectivos

## Sequelize: Introducción

---

Hay diferentes ORMs. **Sequelize es un ORM para Node.js basado en promesas**, y permite trabajar con diferentes DBs relacionales como **PostgreSQL**, MySQL, MariaDB, SQLite, y Microsoft SQL Server.
La idea de un ORM es la misma: funcionar como una capa de abstracción por encima del motor de ejecución que estemos usando.

### Instalar y configurar sequelize:

1. En un proyecto nuevo, ejecutamos `npm init` para levantar el 'package.json' y poder instalar las librerías y dependencias necesarias.
2. Generar el archivo de backend donde irá el código (ejemplo: index.js).
3. Siguiendo la documentación de Sequelize, hay que instalar sequelize: `npm install --save sequelize`
4. Ir a la documentación de la última versión de sequelize que se instaló con el comando previo (ejemplo: se instaló sequelize 6.x.x, ir a la documentación v6).
5. Dependiendo de la DB que usemos tendremos que instalar dependencias diferentes extras: para PosgreSQL, las dependencias 'pg' y 'pg-hstore' con `npm install --save pg pg-hstore`.

## Sequelize: Conexión con la DB

---

### 1) Creando la DB:

**Para conectarse con la DB, primero la DB tiene que haber sido creada previamente**. El ORM no puede crear la DB en sí.

En la terminal, con el comando `psql` abrimos PosgreSQL y creamos la DB: ejemplo `CREATE DATABASE henry`. Y nos conectamos a esa DB particular con el comando de psql `\c`. Si ejecutamos `\dt` nos diría que no tenemos ninguna relación (tabla).
Ya nos aseguramos tener la DB creada, ahora falta conectarla con nuestro servidor.

### 2) Establecer la conexión:

Hay que requerir el módulo sequelize, particularmente la clase `Sequelize`. Luego, hay 3 formas de conectarse según la documentación, pero la más sencilla es la primera:

```javascript
const { Sequelize } = require("sequelize");

// Option 1: Passing a connection URI
const sequelize = new Sequelize("postgres://user:pass@example.com:5432/dbname"); // Example for postgres
```

Creamos una nueva instancia de la clase Sequelize pasándole un parámetro que es un string donde se indica `dialecto://nombre_usuario:contrasnia@direccionIP:puerto/nombreDB`.

Ejemplo (recordar que el puerto por defecto para PosgreSQL es 5432):

```javascript
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("postgres://franco:1234@localhost:5432/henry");
```

Si se agrega un segundo parámetro a la clase Sequelize cuando se instancia un objeto, podemos indicar allí un objeto con propiedad `logging: false` para que no logguee (no muestre en la consola) todo lo que sequelize está haciendo por detrás cuando usas sus métodos. Solamente quedaría en la consola nuestros propios `console.log()` que vayamos indicando.

```javascript
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("postgres://franco:1234@localhost:5432/henry", {
  logging: false,
});
```

### 3) Verificar la conexión:

```javascript
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("postgres://franco:1234@localhost:5432/henry");

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testConnection();
```

**Verificar que no tire error la ejecución del archivo .js con node**. Ejemplo: `node index.js` no debería tirar error.
El método `.authenticate()` en un `try {} catch {}` nos permitirá asegurarnos de que la conexión fue exitosa o cuál fue el motivo del error (error de credenciales usuario/contraseña, error de dirección IP o puerto, DB indicada es inexistente).

## Sequelize: Modelos

---

### 1) Definiendo al modelo:

Así como teníamos _entidades_ en el diagrama Entidad-Relación, en Sequelize hablamos de **_modelos_**.
Hay dos formas distintas de crear un modelo: con `sequelize.define` o extendiendo la clase `Model`. Vamos a ver con `sequelize.define`:

```javascript
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(/*connection*/);

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
```

Además de requerir la clase Sequelize de sequelize, traerse **_DataTypes_**. DataTypes contiene todo el listado de posibles tipos de datos que acepta sequelize (haciendo un paralelismo con los tipos de datos de la DB relacional elegida). Ejemplo: `DataTypes.STRING` es equivalente a un VARCHAR(255) en la DB.

En el ejemplo usamos el método `sequelize.define` para crear un nuevo modelo. El primer parámetro es un string indicando el nombre que tendrá el modelo, y el segundo parámetro es un objeto donde asignamos los atributos (columnas) de la relación (tabla) como propiedades de este objeto.
(Es decir: si el modelo User tiene un atributo firstName, sería similar a tener en la DB una tabla User con una columna firstName con el tipo de dato).
Además, cada atributo es un objeto donde indicamos una propiedad `type` con el DataType apropiado (ejemplo `firstName: {type: DataTypes.STRING}`).

También en el atributo podemos agregar como propiedades las **restricciones** (_constrains_) que sean necesarias. Ejemplo: `allowNull: false` sería equivalente a un NOT NULL, impidiendo que ese campo (columna) esté vacío. `primaryKey: true` para indicar cual campo es PRIMARY KEY, `autoIncrement: true`, `unique: true`, etc.

Un tipo de dato interesante que brinda Sequelize para usar es `DataTypes.ENUM`, que necesita otra propiedad `values` que tenga un array de elementos. El ENUM indicará que sólo admite los valores indicados en el array de values. Si al instanciar el modelo se pone un valor distinto de los especificados en el `values` del modelo, tirará un error.

```javascript
// ejemplo de enum:
const User = sequelize.define('User', {
  // Model attributes are defined here
 ...
  role: {
    type: DataTypes.ENUM,
    values: ['admin', 'user', 'banned']
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});
```

En el ejemplo, si uno desea crear un usuario asignándole un rol, solo podrá ingresarle 'admin', 'user', o 'banned'. Si se ingresa cualquier otro valor tirará error Sequelize porque no está contemplado entre los _values_ posibles.

### 2) Sincronización del modelo:

Por el momento si ejecutamos el archivo en Node, y luego vamos a la tabla, aún no se insertó, aún no sincronizamos al modelo con nuestra DB.

```javascript
...
User.sync();
```

Ahora si ejecutamos el archivo en Node en la consola, allí podemos ver lo que sequelize está realmente haciendo de fondo con la sincronización del modelo: ¡un SQL statement!

```sql
CREATE TABLE IF NOT EXISTS "Users" ("id" SERIAL, "firstName" VARCHAR (255) NOT NULL, "lastName" VARCHAR (255) UNIQUE, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("id"))
```

De hecho si ahora en psql preguntamos por las tablas con el comando `\dt` nos mostrará una lista de las tablas creadas, mostrando ahora en este ejemplo una tabla Users.

Pluralización, un detalle importante: nosotros indicamos un modelo 'User', pero **sequelize tiene por detrás una librería que pluraliza los nombres de modelos**, por lo que la tabla generada se llamará 'Users'. Lo mismo sucederá si modelamos 'City' y pasaría a ser 'Cities' en la DB. Este comportamiento por defecto puede evitarse usando un tercer parámetro en sequelize.define, que es un objeto con la propiedad freezeTableName: true, `sequelize.define('User', {...}, { freezeTableName: true })`. Pero generalmente está bueno que pluralice, ya que el modelo tiene instancias.
De hecho, si ahora en psql queremos ver todas las filas de la tabla de usuarios, deberíamos usar una sentencia SQL con el modelo pluralizado, ejemplo: `SELECT * from Users;`.

Por defecto, **si no se aclara un primary key** en el modelo, automáticamente me crea un atributo **_id_** como primary key autoincrementable. Además, por defecto se agregan dos atributos más **_createdAt_** y **_updatedAt_**. Suelen ser útiles para saber cuándo se creó/actualizó el registro, e incluso a veces se añade un atributo para saber cuál usuario fue el que modificó el registro. De esta forma hay más control sobre alteraciones ante una auditoría para sistemas con datos sensibles.
En una tabla intermedia, la primary key por defecto será la combinación de las dos foreign keys (FK). Si uno desea, esto también puede anularse y establecer uno mismo una PK en esa tabla intermedia (ver documentación).

### 3) Creando una instancia del modelo:

El modelo funciona como una clase. Yo puedo **_crear una instancia a partir de ese modelo_**. Pero en sequelize no hay que hacerlo con `new`, sino de otra forma. La manera sencilla es usando el método `.create()`.
El `.sync()` también recibe una promesa, por lo que puedo usar un `.then()`:

```javascript
...
User.sync({ force: true })
	.then(async () => {
    	console.log("modelo User sincronizado")
    	const userCreated = await User.create({
            firstName: "Franco",
            lastName: "Etcheverri"
        });
    	console.log(userCreated);
	});
```

Al ejecutar el archivo en Node, el último console.log devuelve el objeto modelo('User') con un parámetro **_dataValues_**, el objeto instanciado que tiene los parámetros con los valores indicados. Paralelamente en psql podemos ver que la tabla cargó un registro con los valores indicados.

Cabe destacarse que si ahora voy a modificar el valor del parámetro 'firstName' en el `User.create()`, la ejecución del archivo en Node haría otra instancia del modelo, otro registro que iría a parar a la tabla. Pero como en este caso en el modelo indicamos que lastName tenga restricción UNIQUE, tiraría error el intentar agregar ese registro nuevo.

### El parámetro force : true en el método .sync():

Al método `.sync()` se le puede pasar como parámetro un objeto con una propiedad **_force_** que puede ser _true_ o _false_. Por defecto si no se pasa está seteado en _false_.
El force: true hace que se limpien (borren) las instancias previas del modelo, y los registros anteriores en la tabla.
Esto obviamente no es útil en un ambiente productivo, pero sirve para un ambiente de desarrollo, mientras estamos probando cosas con los modelos.

## Sequelize: validations y hooks

---

Los hooks son funciones/métodos que se ejecutan en algún momento del ciclo de vida del programa o aplicación.
En este caso, el ciclo de vida de las instancias de los modelos en sequelize incluye lo siguiente:

```javascript
(1)
  beforeBulkCreate(instances, options)
  beforeBulkDestroy(options)
  beforeBulkUpdate(options)
(2)
  beforeValidate(instance, options)

[... validation happens ...]

(3)
  afterValidate(instance, options)
  validationFailed(instance, options, error)
(4)
  beforeCreate(instance, options)
  beforeDestroy(instance, options)
  beforeUpdate(instance, options)
  beforeSave(instance, options)
  beforeUpsert(values, options)

[... creation/update/destruction happens ...]

(5)
  afterCreate(instance, options)
  afterDestroy(instance, options)
  afterUpdate(instance, options)
  afterSave(instance, options)
  afterUpsert(created, options)
(6)
  afterBulkCreate(instances, options)
  afterBulkDestroy(options)
  afterBulkUpdate(options)
```

Entonces se podría parar sobre alguno de esos momentos y hacer algo al respecto.

Hay un concepto extra en los atributos, que son las **_validations_**. Hay validaciones prestablecidas en sequelize, y se pueden hacer algunas propias.

**En el modelo, sobre un atributo podríamos añadir una propiedad _validate_** que es un objeto y buscar en la documentación las diferentes validaciones posibles (ej: `isEmail: true`, `isNull: true`, etc.)

```javascript
...
const User = sequelize.define('User', {
    firstName: { ... },
    lastName: { ... },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    }
});

User.sync()
	.then(async () => {
    	console.log("modelo User sincronizado")
    	const userCreated = await User.create({
            firstName: "Matias",
            lastName: "Lamela",
            email: "mati"					// validation error
        });
    	console.log(userCreated);
	});
```

Si ejecutamos el archivo en Node, obtenemos un error de validación porque la propiedad email no tiene formato de email (`x@x.x`).
Lo que realmente pasó fue que en el ciclo de vida de esa instancia del modelo, antes de que suceda la creación/modificación/destrucción se ejecutó una validación. Si falla ahí no va a crearse, modificarse o eliminarse.

Veamos un ejemplo usando un hook. Supongamos que queremos crear usuarios con emails corporativos de Henry, terminando en '@henry.com'. Solo nos interesaría que nos mande cada usuario la parte anterior al @ para luego añadirle la parte común.
Hay diferentes formas de agregar hooks en sequelize. Una de ellas consiste en agregar el método directo que queremos sobre el modelo, ejemplo `User.beforeCreate()`, luego de la definición del modelo.

```javascript
const User = sequelize.define('User', { ... });

User.beforeValidate((user) => {
    user.email = user.email + "@henry.com"
})

User.sync().then(async () => {
    const userCreated = await User.create({
            firstName: "Matias",
            lastName: "Lamela",
            email: "mati"
        });
})
```

Como el hook `.beforeValidate()` se ejecuta antes de la validación, no invalida el formato de email, sino que dentro del callback le indicamos que agregue '@henry.com', aprobando la prueba de validación de email que se hará posteriormente, y finalmente logrando que esa nueva instancia se cree con el atributo 'email' con valor `mati@henry.com`.

Un ejemplo más común y práctico es usar un hook `.beforeCreate()` para dentro del callback ejecutar una función hasheadora que hashee la password, así trabajamos temas de autenticación y no exponemos la contraseña directamente como dato en la DB.

## Sequelize: Getters y Setters

---

Supongamos que luego de crear el usuario queremos un `console.log()` que muestre el `${userCreated.lastname.toUpperCase()} + !`, pero que no tenga que agregarlo manualmente, sino que lo haga automáticamente el modelo.

Para ello podemos usar los getters, que es una función `get()` definida para un atributo en la definición del modelo.

```javascript
const User = sequelize.define('User', {
  firstName: { ...},
  lastName: {
    type: DataTypes.STRING,
	unique: true,
     get() {
         const rawValue = this.getDataValue("lastName");
         return rawValue ? rawValue.toUpperCase() : "SIN APELLIDO";
     }
  },
  email: { ... }
});

User.beforeValidate((user) => {
    user.email = user.email + "@henry.com"
})

User.sync().then(async () => {
    const userCreated = await User.create({
            firstName: "Matias",
            lastName: "Lamela",
            email: "mati"
        });
    const userCreated2 = await User.create({
            firstName: "Leandro",
            email: "lean"
        });
    console.log("MATI: ", userCreated.lastName);
    console.log("LEAN: ", userCreated2.lastName)
})
```

En el ejemplo, tenemos un usuario Matias con apellido y un usuario Leandro sin apellido.

Cuando ejecutamos el archivo con Node, veremos una diferencia entre el hook y el getter: **El hook sí logró alterar la DB** (en el ejemplo el `beforeValidate` modifica el valor del email antes de crear la instancia, insertando entonces un valor actualizado en la tabla, nunca el valor inicial).
**Con el getter la DB no se ve modificada, sólo se ve afectada la solicitud del dato**. En vez de devolver el dato al servidor tal como está en la tabla en la DB ("Lamela" y null), previamente lo pasará a mayúscula si tiene apellido ("LAMELA"), y si no tiene mostrará "SIN APELLIDO".
De esta forma, no tendría la necesidad de almacenar el "SIN APELLIDO" en la tabla cuando no haya apellido, simplemente lo omito, lo dejo nulo, y cuando sea necesario lidiar con datos nulos uso la lógica del getter para manejar esas situaciones.

### Setters:

Un setter es lo opuesto de un getter. En vez de recibir un dato puro de la DB y modificarlo antes de usarlo en el servidor, recibo un dato puro en el servidor y lo modifico antes de insertarlo en la DB.

```javascript
const User = sequelize.define("user", {
  username: DataTypes.STRING,
  password: {
    type: DataTypes.STRING,
    set(value) {
      // Storing passwords in plaintext in the DB is terrible
      // Hash the value with an appropiate cryptographic hash function
      this.setDataValue("password", hash(value));
    },
  },
});
```

## Sequelize: Relations

---

Al igual que en el diagrama Entidad-Relación donde las entidades se relacionan con otras entidades, en Sequelize los modelos se relacionan con otros modelos.

En Sequelize hay una forma de modelar todas las **asociaciones** (_associations_) estándar que vimos en el modelo Entidad-Relación (cardinalidad): _Onte-To-One_, _One-To-Many_, y _Many-To-Many_. Para hacerlo, Sequelize provee 4 tipos de asociaciones: `hasOne`, `BelongsTo`, `hasMany`, `belongsToMany` que deben ser combinadas para crearlas.

- Para crear una relación **_One-To-One_**, hay que usar conjuntamente `hasOne` y `belongsTo`.
- Para crear una relación **_One-To-Many_**, hay que usar conjuntamente `hasMany` y `belongsTo`.
- Para crear una relación **_Many-To-Many_**, hay que usar conjuntamente dos llamadas `belongsToMany`.

Ejemplo: queremos hacer una auto-relación en el modelo User, suponiendo que un usuario tiene un usuario padre. Entonces antes de User.sync() hacemos un:

```javascript
const User = sequelize.define('user', { ... });
User.hasOne(User);
User.sync().then( ... );
```

Si ejecutamos esto y vamos a la tabla, encontraremos que se agregó una columna extra a la tabla Users, llamada _UserId_, vacía hasta el momento. ¿Por qué? Porque si le decimos que cada usuario está relacionado consigo mismo, nos habilita una columna para que le carguemos con quién está relacionado.

Podríamos indicarle con qué nombre quiero que se cree esa relación:

```javascript
User.hasOne(User, { as: "father" });
```

Volvemos a ejecutar, vamos a la tabla y vemos que la columna ahora no se llama _UserId_, sino _father_. De esta forma le dimos nombre a la relación.

Vamos a generar otro modelo, City. Pero luego de definirlo hay que sincronizarlo. Para evitar hacer otro `.sync()` para cada modelo, hay una forma de sincronizar todos los modelos, usando **_sequelize.sync()_**.
Queremos que varios usuarios puedan ser de la misma ciudad. Tenemos una relación One-To-Many, donde una ciudad tiene muchos users. La implementación sería:

```javascript
City.hasMany(User);
User.belongsTo(City);

sequelize.sync().then(() => {
    ...
})
```

El orden de las instrucciones es indistinto. Pero es **importante hacer la doble relación** por si después necesitamos acceder desde una instancia de User a una City, o desde una instancia de City a un User. Si no, Sequelize no generará esos métodos automáticos como el `.setX()` (ver link más abajo). Con el `.hasMany` quizá se genera la columna en la tabla, pero sin el otro método no podremos acceder desde un usuario a la ciudad relacionada.

Cuando ejecutamos esto, veremos que se crearon ambas tablas, pero sólo en la tabla Users veremos una nueva columna _CityId_. Esto está bien, porque cuando teníamos una relación uno a muchos, en la tabla del muchos generábamos la FK que se relaciona con la PK de la tabla del uno. Sequelize lo hizo automáticamente.

Además, cuando ya está definida una asociación entre dos modelos, las instancias de esos modelos obtienen métodos especiales de sequelize para interactuar con sus contrapartes asociadas.
https://sequelize.org/master/manual/assocs.html#special-methods-mixins-added-to-instances

```javascript
City.hasMany(User);
User.belongsTo(City);

sequelize.sync().then(async () => {
  const userCreated = await User.create({
    firstName: "Matias",
    lastName: "Lamela",
    email: "mati",
  });
  const userCreated2 = await User.create({
    firstName: "Leandro",
    email: "lean",
  });
  const city1 = await City.create({
    name: "Buenos Aires",
  });
  const city2 = await City.create({
    name: "Jujuy",
  });
  userCreated.setCity(city1);
  userCreated2.setCity(city2);
});
```

En este caso, al tener una asociación `City.hasMany(User)`, puedo usar un método `.setCity()` sobre una instancia de User: `userCreated.setCity()` y pasarle como parámetro el valor que tendrá ese registro en esa columna FK, _CityId_.
Si ejecutamos el archivo y vamos a psql, el registro Mati tiene CityId = 1, y Lean, CityId = 2.

También podríamos haber interactuado desde el otro lado. En vez de usar el `.setCity`, si pusiese algo como lo siguiente:

```javascript
sequelize.sync().then(async () => {
    ...
    city1.addUser(userCreated);
    city2.addUser(userCreated2);
})
```

Ejecutamos, y vemos en la tabla que la asignación fue igualmente correcta.

Incluso podríamos agregar de a varios. Supongamos que ambos usuarios viven en la misma ciudad, podríamos usar un `setUsers` pasándole como parámetro un arreglo con todas las instancias que quiero que tengan el mismo valor.
Esa es la primer diferencia entre un `addUser` y `setUsers`, agregar de a uno o de a muchos (nótese que add usa el nombre del modelo en singular y set, en plural). Además, el `addUser` agrega sin pisar los valores previos, pero el `setUsers` sí pisa el valor previo.

```javascript
sequelize.sync().then(async () => {
    ...
    city1.setUsers([userCreated, userCreated2])
})
```

Ejecutamos y vemos en la tabla que automáticamente a ambos le puso en CityId el valor 1.

### Relación Many-To-Many

Hay que usar dos llamadas `.belongsToMany`, aclarando en un segundo parámetro cuál sería el nombre que le daremos a la tabla intermediaria.

```javascript
City.belongsToMany(User, { through: "UsersCities" });
User.belongsToMany(City, { through: "UsersCities" });
```

Si en psql preguntamos por las tablas que existen, con el comando `\dt`, veremos que se generaron en este caso las tablas Cities, Users, y UsersCities.
Si hacemos entonces un `SELECT * FROM "UsersCities";` (hay que poner las comillas dobles cuando hay mayúsculas), veremos la estructura de esa tabla intermedia. Aparte de los campos _createdAt_ y _updatedAt_, generó las dos FK, _CityId_ y _UserId_. Y automáticamente ya me asignó los valores que venía agregando con `city1.addUser(userCreated)`, etc. (CityId 1 con UserId 1, y CityId 2 con UserId 2).
Además, si vemos la tabla Users ya no encontraremos al campo CityId, porque Sequelize reconoció que al ser una relación Many-To-Many las FK están en la tabla intermediaria, no en las otras.

## Sequelize: Model Querying

---

Puedo ejecutar distintos métodos y restricciones para obtener datos de los modelos, al igual que ejecutábamos SQL queries para obtener datos desde tablas de la DB (de hecho, Sequelize hace exactamente eso de fondo).
https://sequelize.org/master/manual/model-querying-basics.html
Atención: recordar que los métodos `.create`, `.add`, etc. son asincrónicos, por lo que si necesitas usar sus datos, hay que esperar su respuesta, agregarles un `await` a ellos para usar luego, por ejemplo, un `.findAll()`.

```javascript
sequelize.sync().then(async () => {
    ...
    await city1.addUser(userCreated);
    await city2.addUser(userCreated2);
    const usuarios = await User.findAll();
	console.log(usuarios);
})

```

Si ejecuto el ejemplo con **_.findAll()_** me devuelve en consola un arreglo de Users donde tengo a cada instancia de User (Mati y Lean).

Incluso en ese `.findAll()` puedo poner restricciones.

```javascript
sequelize.sync().then(async () => {
    ...
    const usuarios = await User.findAll({ attributes: ['firstName'] });
	console.log(usuarios);
})
```

Si ejecuto, la consola en vez de traerme todo el _dataValues_ con todos los atributos de cada instancia, me trae filtrado solo el atributo que le indiqué. Por atrás está ejecutando un `SELECT firstName FROM "Users";`

Otro ejemplo:

```javascript
sequelize.sync().then(async () => {
    ...
    const usuarios = await User.findAll({
    	where: {
            firstName: "Lean"
        }
    });
	console.log(usuarios);
})
```

Ahora, la consola trae sólo la instancia que coincide con el where, mostrando todos sus dataValues. Por atrás está ejecutando un `SELECT * FROM "Users" WHERE firstName = 'Lean';`.

Las combinaciones y las formas de escribirse en sequelize son muchas.

## Sequelize: Eager Loading

---

Si nos traemos todas la instancias de User, nos trae en _dataValues_ al atributo _CityId_ con el valor que coincide con el PK del modelo City. ¿Y si no queremos el CityId sino el nombre de la ciudad asociada?
Una forma fea de hacerlo sería obtener el CityId del usuario y hacer un `.find` en la otra tabla buscando cuál es esa ciudad.

Sequelize nos ofrece una opción de hacer un **_include_**:

```javascript
sequelize.sync().then(async () => {
    ...
    const usuarios = await User.findAll({ include: City });
	console.log(usuarios);
})
```

Ahora, al ejecutar esto, me mostrará en _dataValues_ un nuevo campo `City: [City]`, es decir, incluyó la instancia del modelo.
Puedo modificar el console.log para que muestre los datos de esa instancia de City.

```javascript
sequelize.sync().then(async () => {
    ...
    const usuarios = await User.findAll({ include: City });
	console.log(usuarios[0].City);
})
```

Ahora mostraría los _dataValues_ de esa instancia, de la ciudad que queríamos.

Esta es mejor forma de, ante dos tablas relacionadas, traer los datos de la segunda tabla a partir de la primera. Por atrás está haciendo un `JOIN`, pero incluyéndolo en una propiedad nueva (en el ejemplo se agregó la propiedad 'City') de la instancia de User.

### Include y relaciones Many-To-Many:

```javascript
...
City.belongsToMany(User, { through: 'UsersCities' });
User.belongsToMany(City, { through: 'UsersCities' });
...
sequelize.sync().then(async () => {
    ...
    await city1.addUser(userCreated);
    await city2.addUser(userCreated2);
    await city2.addUser(userCreated);
    const usuarios = await User.findAll({ include: City });
	console.log(usuarios[0].City);
})
```

En el ejemplo tenemos una relación Many-To-Many y agregamos en la city 1 al usuario 1, y en la city 2 al usuario 2 y al 1 también. Esto es posible por el tipo de asociación Many-To-Many que definimos entre los modelos.
Si ejecutamos el archivo, veremos en la tabla intermediaria un registro con CityId = 1 y UserId = 1, otro con CityId = 2 y UserId = 2, y otro con CityId = 2 y UserId = 1. El usuario 1 está tanto en la ciudad 1 como en la 2.
Y si nos fijamos en la consola de Node, en los _dataValues_ del User 1 veremos el nuevo atributo: `Cities: [Array]`. Debajo nos mostrará otra propiedad `_options` y dentro una propiedad `Cities: [[City], [City] ]}`. Entonces ese Array que vimos, es realmente un arreglo de dos ciudades (dos instancias de City). En cambio, el User 2 tiene un array con una única ciudad.

Si quisieramos ver la tabla intermedia en psql, al usar mayúsculas ('UsersCities') va a tener que ponerse entre comillas dobles: `SELECT * FROM "UsersCities";`. Por convención suele usarse los dos nombres de las tablas y un guión bajo, ejemplo 'users_cities'.

# Estructurando los directorios para trabajar con Sequelize

Cada uno puede tener su forma de organizar todo. Acá hay una sugerencia COMPLEJA.

## Las rutas:

Para las rutas de Express, crear un directorio 'routes' con un archivo index.js que concentra las otras rutas. Y luego otros archivos para cada agrupación de rutas.

### Las rutas: agrupando rutas por 'temas'

Ejemplo: quiero un CRUD (POST, GET, PUT, DELETE) para manipular a los usuarios, entonces genero una archivo 'user.js' que tiene esas 4 rutas.

```javascript
// archivo user.js en directorio 'routes'
const { Router } = require("express");
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const router = Router();

router.put("/:idUser", updateUser);
router.delete("/:idUser", deleteUser);
router.post("/", createUser);
router.get("/", getUsers);

module.exports = router;
```

### Las rutas: limpiando las agrupaciones

Para que no se vea feo, conviene generar un directorio aparte, ejemplo: 'controllers' o 'helpers', que adentro tenga archivos donde estarán definidas y exportadas las distintas funciones. Estas funciones son las callbacks como segundo parámetro de cada ruta.
Esto facilita la visualización de todas las rutas posibles en el archivo 'user.js'. Si tuviese los callbacks definidos en cada ruta de este mismo archivo (ejemplo: `router.get('/', function(req, res) { ... }`), tendría que scrollear pasando por el código de cada callback para ver todas las rutas definidas en este archivo, y se vuelve difícil de leer o saber a primera vista cuántas rutas hay en este archivo.

Ejemplo: en la carpeta 'controllers' generé OTRO archivo 'user.js' que tiene esas 4 funciones exportadas que se usarán como callback en el 'user.js' del directorio 'routes'.

```javascript
// archivo user.js en directorio 'controllers'
import User from '../models/User';

const createUser = (req, res) => {
    ...
    try {
        await User.create({ ... });
        return res.send('Usuario creado correctamente');
    } catch (err) {
        return res.send('No se pudo crear');
    }

};
const getUsers = (req, res) => { ... };
const updateUser = (req, res) => { ... };
const deleteUser = (req, res) => { ... };

module.exports = { createUser, getUsers, updateUser, deleteUser };
```

### Las rutas: El index.js

Esta instancia de Router de 'user.js' se exporta, y la importa el archivo index.js. De esta forma, el _index.js_ tendría un:

```javascript
const { Router } = require("express");
const user = require("./user");

const router = Router();

router.use("/user", user);

module.exports = router;
```

## Los modelos:

La forma ideal para trabajar con Sequelize es crear un directorio 'models' donde dentro haya un archivo por cada modelo. Todos ellos se exportarán hacia un archivo 'index.js' en ese mismo directorio.

Ese index.js de 'models' exportará la conexión con la base de datos. El archivo que la importará y usará será el index.js de toda la carpeta del backend (normalmente llamada 'api').

### Los modelos: el index.js en el directorio 'models'

```javascript
const { Sequelize } = require("sequelize");

// Hay un archivo .env que tiene las variables de entorno (ocultas y nunca pusheadas a GitHub)
// Es útil para tener credenciales o datos sensibles.
// El archivo config/index tiene constantes cuyo valor son esas variables de entorno.
// traer las constantes que usan los valores de variables de entorno del archivo .env
const { dbUser, dbName, dbHost, dbPassword } = require("../utils/config/index");

// traer los modelos:
const UserFactory = require("./User");
const AddressFactory = require("./Address");

// instanciar el servidor:
const sequelize = new Sequelize(
  `postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`,
  {
    logging: false,
  }
);

// pasarles la instancia de sequelize a los modelos para que puedan crearse:
const User = UserFactory(sequelize);
const Address = AddressFactory(sequelize);

// definir las asociaciones:
User.hasMany(Address);
Address.belongsTo(User);

// Exportar los modelos creados para que puedan importarse y usarse en otros archivos (ej, las funciones en 'controllers')
module.exports = {
  conn: sequelize,
  User,
  Address,
};
```

### Los modelos: el archivo 'User.js' del directorio 'models'

```javascript
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const model = sequelize.define('user', {
    name: { ... },
    ...
  );
  return model;
};
```

Este archivo recibe una instancia de sequelize (pasada por index de 'models') y exportará el modelo creado.

## El principio de todo y el flujo completo:

En el index.js de 'api' se hará la instancia de Express (levantar el servidor), se definirán los middlewares, y se usará esa conexión con la DB (exportada por el index.js de 'models') antes de tener el servidor haciendo el `.listen`.

```javascript
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// La exportación del index.js de 'routes', la central hacia otras rutas como 'users', 'address', etc
const router = require("./src/routes/index");

// La exportación del index.js de 'models': la conexión a la DB
const { conn } = require("./src/models/index");
// otra credencial oculta como constante que apunta a una variable de entorno .env
// esto oculta el puerto sobre el cual está levantado
const { PORT } = require("./src/utils/config/index");

// La instancia del servidor de Express
const server = express();

// Los distintos middleware que eligirán usar:

// Urlencoded para enviar y recibir datos de formularios no enviados como json
server.use(express.urlencoded());
// express.json para enviar y recibir jsons
server.use(express.json());
server.use(morgan("dev"));
// cors para manejar los distintos headers cuando esté la app en producción:
// ejemplo: permite bloquear toda request que no venga desde 'http://localhost:3000' (el front)
// o bloquear todo método HTTP que no sean los indicados
server.use(cors());
server.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// El router central: el index.js que les llevarán a otra ruta
server.use("/api", router);

// El middleware de errores (opcional): Si alguna ruta tira un error, podría usarse un 'next(err)' que tiraría a este siguiente middleware que manejaría todos los errores en conjunto
// Es opcional, pero es mejor que aclarar todos los errores por separado en cada posibilidad de cada ruta.
server.use((err, _req, res) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  return res.status(status).send(message);
});

// Se levanta la conexión a la base de datos: el 'force:true' la vacía, es útil para testear, pero en producción dejenlo en 'false'.
// Si la conexión se levanta exitosamente, entonces se va a hacer el .listen y el servidor se levantará y estará a la escucha de requests.
conn
  .sync({
    force: false,
  })
  .then(() => {
    console.log("DB conectada");
    server.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  });
```

### El flujo completo sería:

- Se ejecuta el script que ejecuta el nodemon que ejecuta el archivo index.js de 'api'.
- Se levanta el servidor en index.js de 'api'.
- Se revisa la conexión con la DB y si es exitosa, entra al `.then` y estará a la escucha del servidor.

### Cuando llegue una request:

- Se pasa por los middlewares antes de ir a la central de rutas.
- Se va a esa central de rutas (un `app.use('/')`). Allí, según el método HTTP y la ruta se irá a tal o cual ruta definida dentro de ese archivo.
- Se retorna la respuesta de la ruta apropiada, o un error en caso de problemas (o un `next(err)` en caso de error en esa ruta, que obligue a ir al siguiente middleware, el manejador de errores que dispare errores dinámicos).
