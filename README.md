
# :computer: MUTA Test

## :memo: Instrucciones.
Repositorio: https://github.com/camdiaz/MUTA

A continuacion encontrarás las instrucciones para ejecutar el proyecto en local

`Nota:` Debe estar `node`, `npm` y `git` instalado en la camputadora.

Verifica su instalacion con los comandos `node -v`, `npm -v` y `git --version` respectivamente.
Una vez verificados siga los siguientes pasos.

## :clipboard: Pasos

### Paso 1

En una consola ejecutar el comando `git clone https://github.com/camdiaz/MUTA.git`, para crear un clon del proyecto.

### Paso 2

Una vez clonado el proyecto, ejecute el comando `cd MUTA` en su consola para moverse a la carpeta del proyecto.

### Paso 3

Una vez dentro de la raíz del proyecto ejecutar el comando `npm i`, para instalar todas las dependencias del proyecto.

### Paso 4

Luego de instalar todas las dependencias se debe configurar la base de datos en el archivo "config/config.json", el entorno "development". Tener en cuenta que si crear un nuevo entorno se debe añadir en el archivo "models/index.js" modificando la constante "env" y agregando el nombre del nuevo entorno creado.

### Paso 5

Realizar migraciones ejecutando en la ruta del proyecto desde la consola el comando "npx sequelize-cli db:migrate"

### Paso 6

Una vez instaladas todas las dependencias del proyecto, ejecute el comando `npm run dev` para iniciar el proyecto.

### Paso 7

Con lo anterior puede observar en su consola que se muestra un `Version 1 Docs are available at http://localhost:3030/api/docs` (link para visualizar la documentacion de la API) y ademas, se confirma que servidor esta siendo escuchando en el puerto 3030

### :wrench: Herramientas 

Herramientas utilizadas

`NodeJS` ( Tecnologia para el backend )

`PostgreSQL` ( Almacenamiento de datos )

`Swagger` ( Docummentacion de la API )

`MySQL Workbench` ( Diagrama de la base de datos )

## :memo: Diagrama de la estructura de la base de datos.

Se adjuntara por medio de correo electronico.
