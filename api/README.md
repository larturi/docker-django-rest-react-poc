# Django DRF & React with Docker


## Get Started: 🚀

<br/>

Configurar variables de entorno _(modificar los valores si es necesario)._

```bash
cp .env.dist .env
```

Crear el entorno virtual:

```bash
pipenv --python python3
```

Iniciar el entorno virtual:

```bash
pipenv shell
```

Instalar dependencias:

```bash
pipenv install
```

Levantar contenedores:

```bash
docker-compose up -d
```

Migrations:

```bash
python manage.py migrate
```

Carga de datos inicial

```bash
python manage.py loaddata initial_data.json
```

Iniciar servidor:

```bash
python manage.py runserver
```
