// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <h1>All Movies</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{"Opps something went wrong... :("}</h1>
      ) : (
        <ul>
          {movies?.map((item: Movie) => (
            <li key={item.id}>
              <Link to={`/movie/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
