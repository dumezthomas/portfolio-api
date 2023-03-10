# Portfolio-API

> My [portfolio](https://github.com/dumezthomas/portfolio) API developed with Node, Express and MongoDB.
> Live demo [_here_](https://portfolio-api.dumezthomas.dev).

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Endpoints](#endpoints)
- [Setup](#setup)
- [Project Status](#project-status)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Technologies Used

- Node
- Express
- MongoDB

## Features

- REST API allowing to get, add, edit or remove projects / skills
- Only admin users are allowed to add, edit or remove a project / skills

## Endpoints

- [Projects:](https://portfolio-api.dumezthomas.dev/api/projects/)
  - /api/projects/
    - GET
    - POST *
  - /api/projects/[id]
    - GET
    - PATCH *
    - DELETE *
- [Skills:](https://portfolio-api.dumezthomas.dev/api/skills/)
  - /api/skills/
    - GET
    - POST *
  - /api/skills/[id]
    - GET
    - PATCH *
    - DELETE *

_*: Admin users only_

## Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3001/](http://localhost:3001/) with your browser to see the result.

## Project Status

Project is: _complete_

## Acknowledgements

This project was based on [this tutorial](https://www.udemy.com/course/awesome-nextjs-with-react-and-node-amazing-portfolio-app/).

## Contact

Created by [@dumezthomas](https://www.dumezthomas.dev/) - feel free to contact me!
