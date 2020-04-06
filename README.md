Simple Docker - Nginx configuration
==================================

This repo contains two stacks:

  * a simple **nginx** server for development with a basic php stack.
  * a very basic **reverse proxy** so you can spool more than one of the above.

**Please note**: passwords and prefix are stored in the environment file `.env`

## Install Docker and Portainer ##

Alpine:

`apk add docker docker-compose`

Ubuntu:

`apt install docker docker-compose`

Then go to [portainer.io](https://www.portainer.io/installation/)
or simply:

```
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
```

and now point to [your-server.com:9000](http://localhost:9000) and enjoy Portainer.

### Autoload Docker

`rc-update add docker`

# Install, build and run the stack #

Copy this folder under `/opt`, then

Please make a copy of `./fasterj/env.default` and name it `fasterj/.env` then edit your passwords and info.

`cd /opt/fasterj`

Run `docker-compose up -d`. This will initialise and start all the containers, then leave them running in the background.

Then add the reverse stack.

```
cd /opt/fasterj
docker-compose up -d
```

This stack was built starting from a https://phpdocker.io stack.

## Services exposed outside your environment ##

You can access your application via **`localhost`**, if you're running the containers directly, or through **``** when run on a vm. nginx and mailhog both respond to any hostname, in case you want to add your own hostname on your `/etc/hosts`

Service|Address outside containers
------|---------|-----------
Webserver|[localhost:8080](http://localhost:8080)
Mailhog web interface|[localhost:8081](http://localhost:8081)
MariaDB|**host:** `localhost`; **port:** `8083`

## Hosts within your environment ##

You'll need to configure your application to use any services you enabled:

Service|Hostname|Port number
------|---------|-----------
php-fpm|php-fpm|9000
MariaDB|mariadb|3306 (default)
Memcached|memcached|11211 (default)
Redis|redis|6379 (default)
SMTP (Mailhog)|mailhog|1025 (default)

# Docker compose cheatsheet #

**Note:** you need to cd first to where your docker-compose.yml file lives.

  * Start containers in the background: `docker-compose up -d`
  * Start containers on the foreground: `docker-compose up`. You will see a stream of logs for every container running.
  * Stop containers: `docker-compose stop`
  * Kill containers: `docker-compose kill`
  * View container logs: `docker-compose logs`
  * Execute command inside of container: `docker-compose exec SERVICE_NAME COMMAND` where `COMMAND` is whatever you want to run. Examples:

  Shell into the PHP container,
          `docker-compose exec php-fpm bash`
  Open a mysql shell,
          `docker-compose exec mysql mysql -uroot -pCHOSEN_ROOT_PASSWORD`

# Recommendations #

It's hard to avoid file permission issues when fiddling about with containers due to the fact that, from your OS point of view, any files created within the container are owned by the process that runs the docker engine (this is usually root). Different OS will also have different problems, for instance you can run stuff in containers using `docker exec -it -u $(id -u):$(id -g) CONTAINER_NAME COMMAND` to force your current user ID into the process, but this will only work if your host OS is Linux, not mac. Follow a couple of simple rules and save yourself a world of hurt.

  * Run composer outside of the php container, as doing so would install all your dependencies owned by `root` within your vendor folder.
  * Run commands (ie Symfony's console, or Laravel's artisan) straight inside of your container. You can easily open a shell as described above and do your thing from there.

## Credits ##
Francesco D'Agostino, https://www.farm.it/
Kasper Siig, https://www.freecodecamp.org/news/docker-nginx-letsencrypt-easy-secure-reverse-proxy-40165ba3aee2/
