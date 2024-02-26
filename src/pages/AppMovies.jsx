import React, { useEffect } from "react";
import MoviesService from "../services/movies.service";
import { useDispatch, useSelector } from "react-redux";
import { movieSelector } from "../store/movie/selectors";
import { performGetMovies } from "../store/movie/slice";

export default function AppMovies() {
  // const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  const movies = useSelector(movieSelector);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const data = await MoviesService.getAllMovies();
  //       setMovies(data?.data || []);
  //     } catch (error) {
  //       console.error("Error fetching movies:", error);
  //     }
  //   };

  //   fetchMovies();
  // }, []);

  useEffect(() => {
    dispatch(performGetMovies());
  }, [dispatch]);

  return (
    <div>
      <h1>Movies</h1>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
