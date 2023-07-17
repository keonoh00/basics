// import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

const ALL_MOVIES = gql`
  query getAllMovies {
    allMovies {
      id
      title
    }
  }
`;

type Movie = {
  id: string;
  title: string;
};

const Movies = () => {
  /* 

  Imperative Code Style

  const [movies, setMovies] = useState<Movie[]>();

  const client = useApolloClient();

  useEffect(() => {
    client
      .query({
        query: ALL_MOVIES,
      })
      .then((result) => {
        setMovies(result.data.allMovies);
      });
  }, [client]);

  */

  // Declarative Code Style

  const { data, loading, error } = useQuery(ALL_MOVIES);
  const movies = data?.allMovies;

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{"Opps something went wrong... :("}</h1>
      ) : (
        movies?.map((item: Movie) => (
          <>
            <p>MovieID:{item.id}</p>
            <p>Movie Title: {item.title}</p>
          </>
        ))
      )}
    </div>
  );
};

export default Movies;
