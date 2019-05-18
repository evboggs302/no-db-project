# no db planning

---

## FRONTEND CHECKLIST

- reset.css
- package.json
  - main
  - reminder to setup proxy (port# = 19711)

## frontend folder structure (to start)

- src/
  - app.js
  - index.js
  - components/
    - header/
      - header.js
      - header.css
    - Comp1/
      - madData.js
      - madData.css
    - Comp2/
      - madFinal.js
      - madFinal.css

## dependencies

- `axios`

---

## BACKEND CHECKLIST

- port# = 19711;

## backend folder structure

- server/
  - index.js
  - controller/
    - madController.js

## dependencies

- `express`

  (`body-Parser` is owned by express and will be available when we call `app = express()`)

## routes

- get: '/api/madliby'
- post: '/api/madliby'
- put: '/api/madliby/:id'
- delete: '/api/madliby/:id'
