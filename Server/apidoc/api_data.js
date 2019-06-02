define({ "api": [
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"Fomen\",\n  \"lastname\": \"Monique\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/app.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "Admin",
    "title": "Request Users name in Admin",
    "name": "Getadmin",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "users",
            "optional": false,
            "field": "Users",
            "description": "<p>der Seite.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users",
            "description": "<p>List of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": \"Monique\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"pageNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/app.js",
    "groupTitle": "admin"
  },
  {
    "type": "get",
    "url": "/sign_in",
    "title": "Request the sign_in page",
    "name": "Getsign_in",
    "group": "sign_in",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "sign_in",
            "description": "<p>page.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"PageNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/app.js",
    "groupTitle": "sign_in"
  },
  {
    "type": "post",
    "url": "/sign_in",
    "title": "insert a new user",
    "name": "postsign_in",
    "group": "sign_in",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "succesfully",
            "description": "<p>login.</p>"
          }
        ],
        "String": [
          {
            "group": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user</p>"
          },
          {
            "group": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:   ",
          "content": "{\n  \"error\": \"Username or passwordfalse\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/app.js",
    "groupTitle": "sign_in"
  },
  {
    "type": "get",
    "url": "/sign_out",
    "title": "Request the sign_out page",
    "name": "Getsign_out",
    "group": "sign_out",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "redirect",
            "description": "<p>to sign_in page.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": \" sign_in Page NotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/app.js",
    "groupTitle": "sign_out"
  },
  {
    "type": "get",
    "url": "/sign_up",
    "title": "Request the sign_up page",
    "name": "Getsign_up",
    "group": "sign_up",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "sign_up",
            "description": "<p>page.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"PageNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/app.js",
    "groupTitle": "sign_up"
  },
  {
    "type": "post",
    "url": "/sign_up",
    "title": "insert a new user",
    "name": "postsign_up",
    "group": "sign_up",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "succesfully",
            "description": "<p>created your account.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:    ",
          "content": "{\n  \"error\": \"Username already taken\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/app.js",
    "groupTitle": "sign_up"
  },
  {
    "type": "get",
    "url": "/summary",
    "title": "Request  ein User transaction",
    "name": "Getsummary",
    "group": "summary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>der creator. A helper REST data, this is used for testing purposes only An example will be http://localhost:3000/summary?username=Monique The output will be the summary of transactions for the users</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/app.js",
    "groupTitle": "summary"
  },
  {
    "type": "get",
    "url": "/transactions",
    "title": "Request User transaction",
    "name": "Gettransactions",
    "group": "transactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "User.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "username.",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "render",
            "description": "<p>die transaction page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Transactions\": \"result\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"page NotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/app.js",
    "groupTitle": "transactions"
  },
  {
    "type": "post",
    "url": "/transactions",
    "title": "create User transaction",
    "name": "posttransactions",
    "group": "transactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "Amount.",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction",
            "description": "<p>transaction done.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  user == transactions.creator\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/app.js",
    "groupTitle": "transactions"
  }
] });
