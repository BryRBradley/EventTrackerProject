# EventTrackerProject

## Description

This application was built to facilitate UI with my the database I created with SQL Workbench called pgdadb. It utilize REST API to perform basic CRUD and Index functions. The purpose of this application is to create a UI that allow the user to read and organize data relating to PDGA current tournament statistics and international rankings. Incorporated a AJAX built front end to display the data in tables. 

## Technology Used

STS IDE
REST API
Postman
Gradle
MAMP
Github
Mysql
Sublime
MacOS terminal
Java . Microsoft Word
UML
AJAX Frontend 
Javascript 
Zoom, Slack
Tomcat Server
Chrome browser
MySQL Workbench
Languages: Java, MYSQL, Groovy

## Example Routes 
PGDAScore  
List<PGDAScore>  Get api/pgdaScores          Get all
PGDAScore        Get api/pgdaScores/{id}     Get by id 
PGDAScore        Post api/pgdaScores         Create
PGDAScore        Put api/pgdaScores/{id}     Update 
PGDAScore        Get api/pgdaScores/{id}     Delete

http://3.133.228.196:8080/PGDATournamentREST "link currently not working" 

## Project Goals

- Basic CRUD verified through Postman and Web browser. 
- Build an organized MySQL database that takes into account for future tables expansion.
- Deepen my understanding of the REST api relationships with the required controllers, services and entities.
- Develop a better skill for troubleshooting these new processes and have an idea of where to look from console logs. 
-  Create a clean working frontend that completes basic crud. 

## Lessons Learned
Starting with entities to services then finally controllers is my preference flow while programing this process. J unit test are essential functions and relate directly to next step of postman verification. I didn't necessarily see the conneciton before but I do now. I have gone from hating them to indiferent in my feelings towards them, to feeling a need to create them to ensure my mapping and data connections are working. I have a a much better understanding of the overall structure and flow in this process and was able to trouble shoot a lot on my own. I continued to utilize TA hours which is always a big help whe I get completely stuck. Overall I can see the progress in how much better I understand how this all works together.   

## Coding Time and Testing
03 May - 1500- 1930 Initial stubs built out. V1 pushed to GitHub with only C built out. 
04 May - 1100- 1700 V2-4 Pushed with Basic CRUD and index verified by Postman. MVP goals met
05 May - 2000-2200 V5 - Final version of the application MVP verified and README.md finished
10 May - 1600-200 - V1 of the frontend stubbed and start to dynamically generate tables.
11 May 1000-1700 shifted and hard coded tables structure into HTML and CSS.
13 May 2000-2100 finished README.md and reset my database. Final push to GIThub. 

## Further Planned Expansion
- Create  method and mapping for (find by name, tournament participant list, tournament ranking, find by League)
- Add Tournament table, Sponsor table and League table
- create a front end that populate some of the queries in dislpayed table ie: Tournament ranking/score National rankings by league (completed)

## Screen shots of Code
XHR for the information for my Table. 
![XHR](https://github.com/BryRBradley/EventTrackerProject/blob/main/PGDATournamentREST/src/main/webapp/Code1.png)


Screen shot of the finished front end.
![Frontend final](https://github.com/BryRBradley/EventTrackerProject/blob/main/PGDATournamentREST/src/main/webapp/code2.png)

Screenshot of the ngFrontend. 
![ng Frontend](https://github.com/BryRBradley/EventTrackerProject/blob/main/ngScreenshot.png)