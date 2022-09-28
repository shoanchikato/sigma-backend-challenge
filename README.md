# Limiter API

## Description

Basic API for keeping tracking of number of streams for individual customer

## Architecture

Will be using a layered architecture with the use of factory functions instead of classes as they provider better encapusulation than classes.

# Layers:

* Router
* Service
* Repository (Repo)

## Getting Started

[Install NodeJs](https://nodejs.org/en/) 

[Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

[For Windows Install Git](https://git-scm.com/downloads)

Run commands in linux command-line or git bash for Windows (in repository root directory)

* For installing dependences

```shell
yarn
```
* For running app

```shell
yarn start
```
* For running tests

```shell
yarn test
```

* Running Docker Compose in detached mode
```
docker-compose up -d
```

* Stopping Docker Compose and cleaning up images
```
docker-compose down --rmi all
```

## Frameworks and Libraries

### Backend

**Core Backend**

* [NodeJs](https://nodejs.org/en/)

* [ExpressJs](https://expressjs.com/)

