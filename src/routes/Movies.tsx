import { useEffect, useState } from "react";
import { useApolloClient, gql } from "@apollo/client";

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

  return (
    <div>
      {movies?.map((item) => (
        <>
          <p>MovieID:{item.id}</p>
          <p>Movie Title: {item.title}</p>
        </>
      ))}
    </div>
  );
};

export default Movies;
