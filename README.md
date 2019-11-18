WUNDERLIST 2.0 | BE

# Users Schema

| Fields     	| Data Type        	| Constraints                                         	|
|------------	|------------------	|-----------------------------------------------------	|
| id         	| unsigned integer 	| primary key, auto-increments, generated by database 	|
| first_name 	| string           	| required                                            	|
| last_name  	| string           	| required                                            	|
| email      	| string           	| required, unique                                    	|
| password   	| string           	| required                                            	|

# Tasks Schema

| Fields     	| Data Type        	| Constraints                                         	|
|------------	|------------------	|-------------------------------------------------------|
| id         	| unsigned integer 	| primary key, auto-increments, generated by database 	|
| title      	| string           	| required                                            	|
| completed 	| boolean           | required (Default set as false)                       |
| created_at 	| date (MM-DD-YYYY) | Auto generated by database                            |
| user_id    	| unsigned integer 	| required, foreign key, references id in users table 	|

**Front End: the user_id field outlined on the tasks table is for backend purposes only.**


# Endpoints Summary

| Methods 	| Endpoints                                	    | Description                                           |
|---------	|-----------------------------------------------|-------------------------------------------------------|
| POST    	| /api/auth/register                      	    | Creates a new user                                  	|
| POST    	| /api/auth/login                         	    | Logs in a registered user                             |

| GET     	| /api/users                              	    | Returns all users                                    	|
| GET     	| /api/users/{userId}                     	    | Returns a user by user id                            	|
| PUT     	| /api/users/{userId}                     	    | Updates a user                                       	|
| DELETE  	| /api/users/{userId}                      	    | Deletes a user                                       	|

| GET     	| /api/todo/tasks                       	    | Returns all tasks                     	            |
| GET     	| /api/todo/users/{userId}/tasks                | Returns a users task(s) by user id               	    |
| GET     	| /api/todo/tasks/{taskId}               	    | Returns a specific task by task id               	    |
| GET     	| /api/todo/users/{userId}/search/{searchText}  | Returns a user task that matches the search query     |
| GET     	| /api/todo/users/{userId}/tasks/{11-17-2019}   | Returns a task by user id and date      	            |
| POST    	| /api/todo/users/{userId}/tasks             	| Creates a task                          	            |
| PUT     	| /api/todo/tasks/{taskId}                   	| Updates a task                                    	|
| DELETE  	| /api/todo/tasks/{taskId}             	        | Deletes a task                                    	|


# ENDPOINTS DESCRIPTION

## USER ENDPOINTS

### Registers a New User

**POST** to [*** BASE URL COMING SOON! ***/api/auth/register]

Takes an object:
{
    "first_name": "lambda",
    "last_name": "student",
    "email": "lambdastudent@lambda.com",
    "password": "test"
}

**Returns**: an object with a welcome message, a user object, and the authorization token
{
    "message": "Welcome lambda!",
    "user": {
        "id": 4,
        "first_name": "lambda",
        "last_name": "student",
        "email": "lambdastudent@lambda.com",
        "password": "$2a$08$phQ8FqrmI0PagiMePyqwZ.N6D9oMlGvgVfd1DUlFLMalGnmwudfqO"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxhbWJkYXN0dWRlbnRAbGFtYmRhLmNvbSIsImlkIjo0LCJpYXQiOjE1NzQwMTE1MzIsImV4cCI6MTU3NDA5NzkzMn0.c8aMvncNKs9s2CCE3EcrHlP1x6b_udN5U61tSotTCJc"
}

### Login an Existing User

**POST** to [*** BASE URL COMING SOON! ***/api/auth/login]

Takes an object:
{
    "email": "lambdastudent@lambda.com",
    "password": "test"
}

**Returns**: an object with a welcome message, a user object, and the authorization token
{
    "message": "Welcome lambda!",
    "user": {
        "id": 4,
        "first_name": "lambda",
        "last_name": "student",
        "email": "lambdastudent@lambda.com",
        "password": "$2a$08$phQ8FqrmI0PagiMePyqwZ.N6D9oMlGvgVfd1DUlFLMalGnmwudfqO"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxhbWJkYXN0dWRlbnRAbGFtYmRhLmNvbSIsImlkIjo0LCJpYXQiOjE1NzQwMTE3ODAsImV4cCI6MTU3NDA5ODE4MH0.XNF6tC2MMe44v9a-Mq0YVbs2DjSGgaR3lOApeNFGJjc"
}

### GET a List of All Users

**GET** to [*** BASE URL COMING SOON! ***/api/users]

**Returns**: an array of all the available user objects

{
    "users": [
        {
            "id": 1,
            "first_name": "javascript",
            "last_name": "language",
            "email": "javascriptlanguage@lambda.com",
            "password": "$2a$08$f3ySAzrNn5CkztRglEiey.exG8A1LlNApSx3uXJ5pHToizAfidxV2"
        },
        {
            "id": 2,
            "first_name": "react",
            "last_name": "app",
            "email": "reactapp@lambda.com",
            "password": "$2a$08$Mp2uSBzGmoWWXeJ5PUoBqu9YAdi6VMDp3DWQ3obMbvp/oekIFyZ9y"
        },
        {
            "id": 3,
            "first_name": "html",
            "last_name": "css",
            "email": "htmlcss@lambda.com",
            "password": "$2a$08$NgY5X9LGEjQbD8fmKk4sw.8LbjlXlm2NqVr/MWjxvWsgNSqqijJuS"
        },
        {
            "id": 4,
            "first_name": "lambda",
            "last_name": "student",
            "email": "lambdastudent@lambda.com",
            "password": "$2a$08$UcmS8rOO3KO6mHdN.oIaD.TfqloRGcmDkKArMt/ulIA5zhToUkt8u"
        }
    ]
}

### GET a User By User Id

**GET** to [*** BASE URL COMING SOON! ***/api/users/{userId}]

**Returns**: A user object with the assigned ID
{
    "id": 1,
    "first_name": "javascript",
    "last_name": "language",
    "email": "javascriptlanguage@lambda.com",
    "password": "$2a$08$f3ySAzrNn5CkztRglEiey.exG8A1LlNApSx3uXJ5pHToizAfidxV2"
},

### Update an Existing User

**PUT** to [*** BASE URL COMING SOON! ***/api/users/{userId}]

Takes an object:
{
    "first_name": "lambda",
    "last_name": "studentOne",
    "email": "lambdaStudent@lambda.com",
    "password": "test"
}

**Returns**: the updated user object
{
    "id": 4,
    "first_name": "lambda",
    "last_name": "studentOne",
    "email": "lambdaStudent@lambda.com",
    "password": "test"
}

### DELETE a User

**DELETE** to [*** BASE URL COMING SOON! ***/api/users/{userId}]

**Returns**: an object with a message
{
    "message": "Deleted 1 record(s)."
}


## TASKS ENDPOINTS

### GET all Tasks

**GET** to [*** BASE URL COMING SOON! ***/api/todo/tasks]

**Returns**: An array of all available task objects

{
    "tasks": [
        {
            "id": 1,
            "title": "Create a marketing page",
            "completed": "false",
            "created_at": "11-17-2019",
            "user_id": 1
        },
        {
            "id": 2,
            "title": "Create a react app",
            "completed": "false",
            "created_at": "11-17-2019",
            "user_id": 1
        },
        {
            "id": 3,
            "title": "Create a Node Api",
            "completed": "false",
            "created_at": "11-17-2019",
            "user_id": 1
        },
        {
            "id": 4,
            "title": "Create a marketing page",
            "completed": "true",
            "created_at": "11-17-2019",
            "user_id": 2
        },
        {
            "id": 5,
            "title": "Create a react app",
            "completed": "true",
            "created_at": "11-17-2019",
            "user_id": 2
        },
        {
            "id": 6,
            "title": "Create a Node Api",
            "completed": "true",
            "created_at": "11-17-2019",
            "user_id": 3
        }
    ]
}

### GET a User’s Tasks by User Id

**GET** to [*** BASE URL COMING SOON! ***/api/todo/users/{userId}/tasks]

**Returns**: An array of all available task objects for the specified user Id
[
    {
        "id": 1,
        "title": "Create a marketing page",
        "completed": "false",
        "created_at": "11-17-2019"
    },
    {
        "id": 2,
        "title": "Create a react app",
        "completed": "false",
        "created_at": "11-17-2019"
    },
    {
        "id": 3,
        "title": "Create a Node Api",
        "completed": "false",
        "created_at": "11-17-2019"
    }
]

### GET a Task by Task Id

**GET** to [*** BASE URL COMING SOON! ***/api/todo/tasks/{taskId}]

**Returns**: A task object with the specified ID number
{
    "id": 4,
    "title": "Create a marketing page",
    "completed": "true",
    "created_at": "11-17-2019",
    "user_id": 2
}

### GET a task by User Id & Search Query

**GET** to [*** BASE URL COMING SOON! ***/api/todo/users/{userId}/search/{searchText}]

**Returns**: An array of task objects with the specified search text
**Example**: The example search query listed below outlines a search result for the word "React" with the user Id of 1.
[
    {
        "id": 2,
        "title": "Create a react app",
        "completed": "false",
        "created_at": "11-17-2019"
    }
]

### GET a Task by User Id & Task Entry Date

**GET** to [*** BASE URL COMING SOON! ***/api/todo/users/{userId}/tasks/{11-17-2019}]

**_*DATE MUST BE IN THE FORMAT MM-DD-YYYY (DASHES INCLUDED)**
**_*PLEASE USE LEADING ZEROS FOR DAYS/MONTHS 1 – 9**

**Returns**: An array of task objects with the specified user Id and date
**Example**: The example search query listed below outlines a search result for the word "React" with the user Id of 3.
[
    {
        "id": 6,
        "title": "Create a Node Api",
        "completed": "true",
        "created_at": "11-17-2019"
    }
]



### Adding a new task

**POST** to [*** BASE URL COMING SOON! ***/api/todo/users/{userId}/tasks]

Takes an object:
{
	"title": "New to do Item",
	"completed": "false"
}

**Returns**: The created task object
{
    "id": 7,
    "title": "New to do Item",
    "completed": "false",
    "created_at": "11-17-2019",
    "user_id": 4
}

### Updating a task 

**PUT** to [*** BASE URL COMING SOON! ***/api/todo/tasks/{taskId}]
**_*Date/created_at is not a required field_**
Takes an object:
{
	"title": "New to do Item Updated",
	"completed": "true"
}

**Returns**: The updated task object
{
    "id": 7,
    "title": "New to do Item Updated",
    "completed": "true",
    "created_at": "11-17-2019",
    "user_id": 4
}

### Deleting a task

**DELETE** to [*** BASE URL COMING SOON! ***/api/todo/tasks/{taskId}]
**Returns**: An object with the message listed below
{
    "message": "Deleted 1 todo task(s)."
}
