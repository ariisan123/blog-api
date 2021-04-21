# Blog API

## This is an API built with:

- Node
- Express
- MySQL
- Sequelize

## Installation.

```bash
$ git clone https://github.com/ariisan123/blog-api.git
$ cd blog-api
$ npm i
```

### Rename the file 'example.env' to '.env', you will see something like this:

```
DB_HOST = localhost
DB_NAME = blogapi
DB_USER = root
DB_PASSWORD =
DB_PORT = 3306

PORT = 3000
```

> Feel free to change any variable if you need it.

## That's all! Now run this command to start the server.

```bash
npm run start
```

# Endpoints

- /api/posts/
  - GET all / POST new post
- /api/posts/:id
  - DELETE by id / PATCH by id / GET by id

# Body example

```json
{
  "title": "Post title",
  "content": "Post content",
  "category_id": 1,
  "picture": "https://picturelink.png"
}
```

> Note: you must use content-type: application/json in headers.

## Default categories

| Name     | ID  |
| -------- | --- |
| offtopic | 1   |
| tecno    | 2   |
| software | 3   |
| memes    | 4   |
