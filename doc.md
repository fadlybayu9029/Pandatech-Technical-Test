# Spotify API Documentation

## Endpoints :

this server is developed to show the list of tracks based on the title that user's input. For example "http://localhost:3000/songs/English".

example.env has shown the client Id and secret. User can use the code if they do not have their own app in spotify developer.

after cloning, please input 'npm i' at the terminal.
to start the app input 'npm start' while to begin the test type 'npm test'


&nbsp;

## 1. GET /tracks/:title

Description:
- See the list of tracks based on the input using spotify API

Request:

- params: title

```json
{
        "title": "String",
}
```

Response(200)
```json
{
    "tracks": {
        "href": 'String',
        "items": 'Array',
        "limit": 'Number',
        "Next": 'String',
        "offset": 0,
        "previous": null,
        "total": 'Number'
    }
}
```
Response(404)
```json
{
  "massage": 'please write the title'
}
```

&nbsp;

## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```






