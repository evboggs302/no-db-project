- Student can write a functioning react application
- Student can write a functioning Express API
- Student can request data from Express API
- Student can display data from Express API

# no db planning sesh

(building a meme generator in class)

---

## FRONTEND CHECKLIST

- reset.css
- package.json
  - main
  - reminder to setup proxy
    - port# = 19711

## frontend folder structure

- src/
  - app.js
  - index.js
  - components/
    - header/
      - header.js
      - header.css
    - MemeDisplayer/
      - memeDisplayer.js
      - memeDisplayer.css
    - MemeCollection/
      - memeCollection.js
      - memeCollection.css

## dependencies

- `axios`

---

## BACKEND CHECKLIST

- port# = 19711;

## backend folder structure

- server/
  - index.js
  - controller/
    - memeController.js

## dependencies

- `express`

  (`body-Parser` is owned by express and will be available when we call `app = express()`)

## routes

- get: '/api/madliby'
- get: '/api/madliby/:id'
- post: '/api/madliby'
- put: '/api/madliby/:id'
- delete: '/api/madliby/:id'
