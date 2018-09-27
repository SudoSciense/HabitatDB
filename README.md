# HabitatDB

A simple web application that was built using Facebook's create-react-app, a NodeJS/Express API server and a MySQL database.

## Get Started ###
###Needed:
* [Node.js](https://nodejs.org/en/download/package-manager/)
* [Docker](https://docs.docker.com/install/)
* [Docker Compose](https://docs.docker.com/compose/install/)

Instead of actually installing mysql, we're going to utilize Docker to just grab a mysql image and make a container that runs it.

###Install and run

Clone the repo, then

    cd HabitatDB/docker_mysql
    docker-compose up -d

This will start up the mysql container and you can do the necessary mysql commands with 

    docker exec -it docker-mysql mysql --user=root --password=mypassword

You will need to create a database, table, and create the columns that the application will retrieve from and post to. The database name, table name, and column names that were chosen for this application during the development process can be seen in 

    HabitatDB/react_backend/routes/habitats.js 

and a great reference that will allow enable you to perform all of the database setup operations you will need is this [helpful mysql cheat sheet](https://en.wikibooks.org/wiki/MySQL/CheatSheet).

Once the database is set up, you're ready to install and run the application. Go back to the home directory (HabitatDB) and run the following command:

    ./installAndRun

Enjoy, and please feel free to contribute changes if you expand on the application!