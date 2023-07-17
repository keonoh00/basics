# movie-api-graphql

Simple Movie API using GraphQL and NodeJS

## Some background informations

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

## Getting Started

### Try GraphQL online

1. Go to [https://studio.apollographql.com/public/star-wars-swapi/variant/current/]([https://studio.apollographql.com/public/star-wars-swapi/variant/current/])
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
