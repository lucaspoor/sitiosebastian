# Sebastian Álvarez

## Despliegue

Primero detener la ejecución actual

`docker stop seba`

Actualizar y levantar la nueva versión

```
cd ~/sitiosebastian
git pull
docker build -t seba .
docker run --name seba -p 3002:3000 --rm seba
```
