# hi-graphql

Simple Movie API using GraphQL, Apollo Server and NodeJS + ReactJS Demo

You can follow below procedure to make project similar to this repository.

## TODO

- [ ] Styling

## Table of Contents

### [1. APIs](#APIs)

### [2. Apollo Server](#apollo-server)

### [3. Setup Process](#setup-process)

### [4. GraphQL Schema](#graphql-schema)

### [5. GraphQL Resolvers](#graphql-resolvers)

### [6. GraphQL Playground](#graphql-playground)

### [7. GraphQL React Demo](#graphql-react-demo)

<a name="APIs">

## APIs

</a>

### REST API

REST API is one of the popular methods to create an API.
It is based on the HTTP protocol and uses HTTP methods to define actions.
For example, GET (read), POST (create), PUT (update), and DELETE (delete).
Basically, the API can be called using a URL and depending on the HTTP Methods,
the API performs the action and returns the result.

One of the main disadvantages of REST API is that it is not flexible and URL should be public.
For example, if you want to get a list of users, you need to call the URL `/users`.
If you want to get a list of movies, you need to call the URL `/movies`.
But anyone can call the API and the API will return the result.
It is not flexible and you cannot define what data you want to get.

### GraphQL

GraphQL is a `query language` for APIs.
It is a specification that describes how to communicate between the client and the server.
It provides a complete and understandable description of the data in your API,
gives clients the power to ask for exactly what they need and nothing more,
makes it easier to evolve APIs over time, and enables powerful developer tools.

### GraphQL vs REST API

GraphQL tries to solve problems of REST API.

- `Over-fetching`: Getting unnecessary data
  - GraphQL returns the exact data that you want to get, while REST API returns all the data defined by the backend.
- `Under-fetching`: Need to call multiple endpoints to get the data

  - GraphQL allows you to get all the data you need in a single request, while REST API might have to call multiple endpoints to get the data you want. Caling multiple endpoints can result in a slow response time.

### Try GraphQL online

1. Go to [https://studio.apollographql.com/public/star-wars-swapi/variant/current/](https://studio.apollographql.com/public/star-wars-swapi/variant/current/)
2. In the Docs section, you can see the list of queries and mutations that you can use.
3. Try queries and mutations using following examples.

```gql
{
  # Get All Films only with total count and each film's title
  allFilms {
    totalCount
    films {
      title
    }
  }

  # Get people with name, hair color, eye color, and birth year
  allPeople {
    people {
      name
      hairColor
      eyeColor
      birthYear
    }
  }
}
```

<a name="apollo-server">

## Apollo Server

</a>

`Apollo Server` is an open-source server, which supports GraphQL specification.
You can use `Apollo Server` just like an NodeJS Server.
If you already have `Express`, `Fastify`, `Hapi`, or `Koa` server, you can use `Apollo Server` on top of your existing server by adding middleware to it.
It does not matter whether you have established the server based on REST API.

<a name="setup-process">

## Setup Process

</a>

The below process is the setup process of this project.
If you want to create a new project, you can follow the below process.
You will be able to setup your new project with GraphQL and Apollo Server.

### 1. Create a new project

```bash
mkdir <project-name>
cd <project-name>
npm init -y

# For this project:
mkdir hi-graphql
cd hi-graphql
npm init -y
```

### 2. Install dependencies

```bash
npm install apollo-server graphql
```

### 3. Install DEV dependencies

```bash
npm install --save-dev nodemon
```

### 4. Create a new file `index.js`

```js
import { ApolloServer, gql } from "apollo-server";

// Shape of the data
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
```

### 5. Add `server` script in `package.json`

```json
{
  "scripts": {
    "server": "nodemon server.js"
  }
}
```

### 6. Run the server

```bash
npm run server
```

If you encounter an error saying: Cannot use import statement outside a module
Add `"type": "module"` in `package.json`

```json
{
  "scripts": {
    "server": "nodemon server.js"
  },
  "type": "module"
}
```

### 7. Open the browser and go to `http://localhost:4000`

<a name="graphql-schema">

## GraphQL Schema

</a>

GraphQL Schema is a collection of GraphQL types.
You can design the schema based on your needs.
For now, the schema is defined in `index.js` file.

```js
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
```

But you can define the schema in a separate file and import it in `index.js` file.

### Some basic grammar rules of GraphQL Schema

- Methods:
  - `type`: Defines a new type
  - `Query`: Defines a query type, get data from the server, similar to GET
  - `Mutation`: Defines a mutation type to change data on the server, similar to POST, PUT, and DELETE
- Types:
  - `String`: Defines a type of the field
  - `[]`: Defines an array of the type
  - `ID`: Defines a unique identifier
  - `Int`: Defines an integer
  - `Float`: Defines a float
  - `Boolean`: Defines a boolean
- Extra:
  - `!`: Defines a required field, with `!`, the field is required and cannot be null.
    By default, the field is optional and can be null.

### Example of GraphQL Schema

```js
const typeDefs = gql`
  type Query {
    hello: String
    user(id: ID!): User
    users: [User]! # Array is required, but each item in the array is optional
    userById(id: ID!): User
  }

  type Mutation {
    createUser(
      name: String!
      email: String!
      age: Int
      isMale: Boolean
      height: Float
    ): User
    deleteUser(id: ID!): Boolean!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    isMale: Boolean
    height: Float
  }
`;
```

<a name="graphql-resolvers">

## GraphQL Resolvers

</a>

GraphQL Resolvers are functions that are responsible for returning data for a field that exists on a GraphQL type definition.

You need to first define the type of resolver `Query` or `Mutation`, then define the name of the resolver, and finally define the function that returns the data.

### Example of GraphQL Resolvers

```js
const resolvers = {
  Query: {
    hello: () => "Hello World!",
    user: (root, args) => {
      // Get data from database
      return {
        id: args.id,
        name: "John",
        email: "",
        age: null,
        isMale: null,
        height: null,
      };
    },
  },
  Mutation: {
    // Root is given as the first argument by default
    // Full list of arguments: (root, args, context, info)
    createUser: (root, args) => {
      const newUser = {
        id: "2",
        name: args.name,
        email: args.email,
        age: args.age,
        isMale: args.isMale,
        height: args.height,
      };
      return newUser;
    },
  },
};
```

### Arguments of GraphQL Resolvers

GraphQL Resolvers have 4 arguments: `root`, `args`, `context`, and `info`.

#### `root`

### Type Resolver

---

Type Resolver is a function that is responsible for returning a type for a GraphQL type definition.

For example, if you have a field `User` in `Query` type, and any of the fields in `User` type is not defined in the schema, you can define the type resolver for `User` type.

```js
// For instance, from above example, we don't return `email` field in `user` resolver
// So we can define the type resolver for `User` type

const resolvers = {
  User: {
    email: () => {
      // You can define the process to get the email and return it
      return "SomeDummy@email.com";
    },
    age: () => 20,
    isMale: () => true,
    height: () => 180,
  },
  Query: {
    hello: () => "Hello World!",
    user: (root, args) => {
      // Get data from database
      return {
        id: args.id,
        name: "John",
      };
    },
  },
  Mutation: {
    // Root is given as the first argument by default
    // Full list of arguments: (root, args, context, info)
    createUser: (root, args) => {
      const newUser = {
        id: "2",
        name: args.name,
      };
      return newUser;
    },
  },
};
```

From above example, `mutation createUser` should return `User` type.
However, the `createUser` mutation resolver does not return `email`, `age`, `isMale`, and `height` fields.
So GraphQL looks for `User` type resolver, and it returns the data for `email`, `age`, `isMale`, and `height` fields.

<a name="graphql-playground">

## GraphQL Playground

</a>

GraphQL Playground is a GraphQL IDE that allows you to interact with the GraphQL API.
You can use GraphQL Playground to test your GraphQL API.
It is available in the browser and you can access it by going to `http://localhost:4000` or `url` defined by Apollo Client.

### How to call a query

In the parenthesis, you can define the arguments.
You can get the result by defining the fields.
However, the arguments and fields should be defined in the schema.
If query does not require any arguments, you can omit the parenthesis.

```gql
query {
  hello
  user(id: "1") {
    id
    name
    email
    age
    isMale
    height
  }
}
```

### How to call a mutation

You can call a mutation by using `mutation` keyword.
You can define the arguments and fields in the same way as query.

```gql
mutation {
  createUser(name: "John", email: "", age: 20, isMale: true, height: 180) {
    id
    name
    email
    age
    isMale
    height
  }
}
```

<a name="graphql-react-demo">

## GraphQL React Demo

</a>

This project contains `ReactJS` demo using `GraphQL` and `Apollo Client`.

Basically, this project is merged with React App which is created by `create-react-app`.

Main reason upon merging is to use one `package.json` file without creating a new project.

But you can create a new project and follow the below process to setup your project.

### 1. Install dependencies

```bash
npm install @apollo/client graphql
npm install react-router-dom
```

### 2. Run the servers

```bash
# This is for GraphQL Server which you made in the previous steps
# It should be running on port 4000 and keep running
npm run server
```

```bash
# This is for React App
# It should be running on port 3000 and keep running
npm start
```

### 3. Create a new file `src/apolloClient.ts`

```js
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export default client;
```

`uri` should match the url of your GraphQL Server

### 4. Wrapping your application with `ApolloProvider` in `src/index.tsx`

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
```

### 5. Accessing GraphQL API in any of the files through `useApolloClient` hook

```js
import { useEffect } from "react";
import { useApolloClient, gql } from "@apollo/client";

const YourComponent = () => {
  const client = useApolloClient();

  useEffect(() => {
    // Example of using client
    client
      .query({
        query: gql`
          {
            allMovies {
              title
            }
          }
        `,
      })
      .then((data) => console.log(data));
  }, []);

  return <div></div>;
};
```

More details can be found in `src` folder.
I made some further improvements and added some comments to make it easier to understand.

## Helpful Resources

- [Apollo Dev Tools](https://www.apollographql.com/docs/react/development-testing/developer-tooling/)
  - This tool allows to have additional tab in the browser to see the queries and mutations that are called.
    The tab is accessible through tab `Apollo` in the browser, which will be shown through `inspect` option in the browser.
