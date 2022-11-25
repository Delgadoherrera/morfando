<h1 align="center"> Morfando-Inc</h1> <br>
<p align="center">
  </p>
<p align="center">
  <img src = "https://i.imgur.com/22Hi4Zt_d.webp?maxwidth=760&fidelity=grand" width=350> 
</p>
<p align="center">
  <a href="https://morfando-inc.com/">
    <img alt="Morfando-Inc" title="Morfando-Inc" src="" width="450">
  </a>
</p>

<p align="center">
 Built with React Native.
</p>
<p align="center">
  <a href="https://play.google.com/store/apps">
    <img alt="Get it on Google Play" title="Google Play" src="http://i.imgur.com/mtGRPuM.png" width="140">
  </a>
</p>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Contributors](#contributors)
- [Build Process](#build-process)
- [Installation](#Installation)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

[![All Contributors](https://img.shields.io/badge/all_contributors-04-orange.svg?style=flat-square)](./CONTRIBUTORS.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![Gitter chat](https://img.shields.io/badge/chat-on_gitter-008080.svg?style=flat-square)](https://gitter.im/git-point)

It is a project for distributed applications subject. Morfando-Inc is an application which users can access either to find a restaurant or to load
in the system a restaurant which other users can access.
In the application you can find thousands of restaurants, you can see the distance from where they are and see the specific dishes for each food house. You can also see the photos of the dishes as well as their price range.
</p>

**Available for Android.**


  
[![Morfando](https://i.imgur.com/5ItY9Id_d.webp?maxwidth=360&fidelity=grand)](https://i.imgur.com/AouoARK_lq.mp4 "Morfando")


  
## Features

A few of the things you can do with Morfando-Inc as consumer:

* Search restaurants or a specific one.
* See price range.
* Add desired restaurants to favorites section.
* View photos of the dishes for each restaurant
* See opinions of other consumers and make new ones.
* See the score of the restaurants by five stars maximum.
* See the days and hours that the establishment is open.
* See the menu of each restaurant.
* Easily search for any user or repository.
</p>

<p align="center">
  <img src = "https://i.imgur.com/kB05BXu.png" width=700>
</p>

A few of the things you can do with Morfando-Inc as restaurant:

* One or several restaurants can be loaded.
* Opening hours can be uploaded and edited.
* You can select the dishes offered.
* Dishes can be added and removed from the menu, with their respective illustrations.
</p>
<p align="center">
  <img src = "https://i.imgur.com/viAO8kp.png" width=700>
</p>


## Contributors

This project was realized by the following contributors:

* Delgado Herrera, Andrea Viviana
* Tufillaro Pagano, Pierina
* Venzmer Nicolas Alejandro
* Zorzón, Agostina Florencia

<b> Memebers of group 11 <b>

  
## Build Process

- Node.js: is an open source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser.
- Express o Express.js: is a web application framework for Node.js, released as free and open source software under the MIT License. It is designed to create web applications and APIs. It has been called the standard server framework for Node.js.
- NPM: is a package manager for the JavaScript programming language. It is the default package manager for the Node.js JavaScript runtime environment. It consists of a client (command line), also called npm, and an online database of paid public and private packages, called the npm registry.
- MySQL: is an open source relational database management system.
- Sequelize: is an ORM for Nodejs that will allow you to greatly speed up your developments that include relational databases such as MySQL.
- Postman: is an API development environment that allows us to design, test and monitor REST services.

  
  
### **This is our project structure:**
</p>
  <p align="center">
  <img src = "https://i.imgur.com/iD2tqof.png" width=500>
</p>
  
  
### **Now let’s start Creating Node.js App**

First, Creating the package
We are ready to start with our project, and the first thing we are going to do is build a package.json where we will have everything about our project.

````
npm init 
````
  
The init command will display a bunch of fields to complete or leave as default:
   - name
   - description
   - version
   - entry point: (index.js) enter app.js
</p>
  

### **Installing Express**

It's time to install Express and some necessary dependencies to get everything working.

````
npm install --save express body-parser morgan
````
  
  
### **Sequelize**

We are going to install Sequelize, which, as we mentioned at the beginning, is an ORM for Postgres, MySQL, MariaDB, SQLite and SQL Server.
We are going to make use of the Sequelize CLI package to start the project for us. It will also help us generate database migrations.
Let's start by installing the Sequelize CLI package.

````
npm install -g sequelize-cli
````
 
  
### **Installing Sequelize**

At this point, we're going to need to install the Sequelize package, along with its dependencies.
Remember that in this tutorial, we are going to be interacting with MySQL only.
  
  ````
npm install --save sequelize
npm install --save mysql2
  ````

  
### **Initializing Sequelize**

After installation, use CLI to generate migrations, seeders, configuration, models, and the configuration file.In the terminal we are going to execute the following command:
   
 ````
sequelize init
 ````

  
### **Create data base** 
  
  Validate that they have the database created on their server or computer.
  For this project MySQL Workbench was used to connect to a rational database.
  To create a database, run the following command:
    
 ````
 CREATE DATABASE `DataBaseName`
 ````
  
  
### **Generating Models and Migrations** 
  
Now again we will use the sequelize cli command to generate model files and migrations.
  
   ````
 sequelize model:create --name usuario --attributes username:string,status:char 
   ````
  
  
 ### **Migratios** 
  
  Now we are ready to keep the models in the database by running the migrations. To do this, we run the following command:
  
 ````
 sequelize db:migrate
 ````
  
  
 ### **Initialize the project** 
  ```` 
 npm start
   ````

## Installation

* `git clone https://github.com/PierinaTufillaro/morfando-inc-back`
* `npm install`
* `npm install --save sequelize`
* `npm install --save mysql2`
* `CREATE DATABASE Morfando`
* `sequelize db:migrate`
* `npm start`

