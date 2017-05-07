
Name: Faraz Tahir

## Overview.
This app can be used to save user daily activities like what kind of Activities he has been doing to remain fit and for how long. Along with that I am extending to include Health news blogs into it and user follow ups.

 . . . . . List of user features (excluding user registration and authentication) . . . . 
 
 User can add activity
 User can filter activities
 User can sort Activities
 User can See the Summary of Activities
 Activity Tables
 Activity Searching/Sorting
 

## Api Routes
. . . . . List of All Api routes and what they return . . . . . . . .

Password is encrypted beforing saving them to DB 

Validation of Email and password using Validator module

+ Bcrypt
+ Validator

![][Api]

## Installation requirements.
. . . .  List of software used to develop the app . . . . . . . 
+ ReactJS 
+ Bootstrap 3
+ Webpack 
+ express
+ moongoose
+ knex
+ bookshelf 
+ chart
+ bootstraptable etc 
Full List of all the dependencies are inside the package.json file

##How to Start
+ Npm install
+ npm runserver
+ and than go to browser with this url: localhost:3002



## Data Model Design.

Diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

![][model]

Use meaningful sample data. Briefly explain any non-trivial issues.

## App Component Design.

A diagram showing the app's hierarchical component design (see example below). 

![][components]

## UI Design.

. . . . . Screenshots of app's views . . . . . . . 

![][Dashboard]
![][Home]
![][Activity]

## Routing.
. . . . List each route supported and state the associated view . . . . . 

+ IndexRoute
+ LoginRoute
+ SignupRoute
+ dashboardRoute
+ ActivityRoute


## Extra features
+ User Registration
+ User Authentication
+ Client Side authentication using Higher Order Component(You cannot enter a route which are for user views) 

## Independent learning.
+ chart
+ redux Middleware
+ react-redux
+ bookshelf
+ knex


[components]:./component.png
[model]: ./model.png
[Dashboard]: ./Dashboard.png
[Home]: ./Home.png
[Activity]: ./Activity.png
[Activity]: ./Activity.png
[Api]:./api