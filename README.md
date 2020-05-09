# Dockerized Parse Stack

Dockerized Parse Stack based on Bitnami Parse images.

## What is part of this Parse Stack?

- Parse Server
- Parse Dashboard
- PostgreSQL

## What is Parse server?

> Parse Server is an open source version of the Parse backend that can be deployed to any infrastructure that can run Node.js.

## What is Parse Dashboard?

> Parse Dashboard is a standalone dashboard for managing your Parse apps. You can use it to manage your Parse Server apps and your apps that are running on Parse.com.

http://www.parse.com/

## Why use Bitnami Images?

* Bitnami closely tracks upstream source changes and promptly publishes new versions of this image using our automated systems.
* With Bitnami images the latest bug fixes and features are available as soon as possible.
* Bitnami containers, virtual machines and cloud images use the same components and configuration approach - making it easy to switch between formats based on your project needs.
* All our images are based on [minideb](https://github.com/bitnami/minideb) a minimalist Debian based container image which gives you a small base container image and the familiarity of a leading linux distribution.
* All Bitnami images available in Docker Hub are signed with [Docker Content Trust (DTC)](https://docs.docker.com/engine/security/trust/content_trust/). You can use `DOCKER_CONTENT_TRUST=1` to verify the integrity of the images.
* Bitnami container images are released daily with the latest distribution packages available.

### Quick links

**Docker hub**

https://hub.docker.com/r/bitnami/parse
https://hub.docker.com/r/bitnami/parse-dashboard

**Git hub**

https://github.com/bitnami/bitnami-docker-parse

# Configuring Parse Server & Parse Dashboard

## Parse Server & Parse Dashboards are configured via config.json files

Config files are located at the Bitnami folder. All available Parse Server options are at https://parseplatform.org/parse-server/api/4.1.0/ParseServerOptions.html

Databases are set to store persistent data in the Docker volumes. Cloud code data are located at the './data' folder and logs are srored at the './log/' folder. 

# Parse cloud code

[Cloud Code](https://docs.parseplatform.org/cloudcode/guide/) is built into Parse Server. The default entry point for your Cloud Code is at ./data/cloud-code/main.js

The `main.js` file contains two dummy examples of Parse Cloud function

The first one is POST /functions/sayHelloWorld and second one is the `Parse.Cloud.afterSave(Parse.User, (request)...`

### How to test Parse Cloud function exampl?

- by using CURL command

```<language>
curl --location --request POST 'localhost:1337/parse/functions/sayHelloWorld' \
--header 'X-Parse-Application-Id: myappID' \
--header 'Content-Type: application/json' \
--data-raw ''
```

- by using [Postman](https://www.postman.com/) collection with Postman pre-defined environment

The Postman collection and environment is located at the ./etc/postman folder


## Install Parse javascript SDK or server localy to get IDE helper

**Prequisities:**

- node.js installed

Command to install [Parse SDK for JavaScript](https://www.npmjs.com/package/parse)

```<language>
npm i parse@2.13.0
```

Command to install [Parse Server](https://www.npmjs.com/package/parse-server)

```<language>
npm i parse-server@4.2.0
```


# Prerequisites

To run this application you need Docker Engine 1.10.0. Docker Compose is recomended with a version 1.6.0 or later.

# How to use this Parse stack

### Run the application using Docker Compose

The main folder of this repository contains a functional 'docker-compose.yml' file. Run the application using it as shown below:

**Run Parse stack environment
**
```bash
docker-compose up -d
```

**Close Parse stack environment
**
```bash
docker-compose down
```

Add parameter -v to remove also docker volumes used for storing persistent data

```bash
docker-compose down -v
```

### Accessing the application manually

Then Parse Dashboard you can access your application at http://your-ip/ 

Use pre-defined credentials from Parse Dashbard config.json

```<language>
  "users": [
    {
      "user": "user",
      "pass": "bitnami"
    }
```

The Parse server can be accessed at http://your-ip:1337/parse

Other settings and variables you can find at 

# Notable Changes

NA
