import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      isLiked @client # This allows isLiked to be cached along with original cache
    }
  }
`;

type GetMovieQueryResult = {
  movie: {
    id: string;
    title: string;
    isLiked?: boolean;
  };
};

const Movie = () => {
  const param = useParams();
  const movieId = param.id;

  // Because we have implemented caching during ApolloClient setup
  // loading will be false after the first visit
  const {
    data,
    loading,
    error,
    client: { cache },
  } = useQuery<GetMovieQueryResult>(GET_MOVIE, {
    variables: {
      movieId,
    },
  });

  const onClickLike = () => {
    cache.writeFragment({
      id: `Movie:${movieId}`, // This id "Movie: {idnumber}" of the cache is got using Apollo Dev Tools
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data?.movie.isLiked,
      },
    });
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Cannot get data of movie id: {movieId}</h1>
  ) : (
    <div>
      Title is <b>{data?.movie.title}</b>
      <button onClick={onClickLike}>
        {data?.movie.isLiked ? "Unlike ♡" : "Like ♥"}
      </button>
    </div>
  );
};

export default Movie;
