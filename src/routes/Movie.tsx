import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
    }
  }
`;

const Movie = () => {
  const param = useParams();
  const movieId = param.id;

  // Because we have implemented caching during ApolloClient setup
  // loading will be false after the first visit
  const { data, loading, error } = useQuery(GET_MOVIE, {
    variables: {
      movieId,
    },
  });

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Cannot get data of movie id: {movieId}</h1>
  ) : (
    <div>
      Title is <b>{data.movie.title}</b>
    </div>
  );
};

export default Movie;
