import React, { useEffect, useState } from "react";
import MoviesService from "../services/movies.service";

export default function AppMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await MoviesService.getAllMovies();
        setMovies(data?.data || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div>{movies.map((movie) => movie.title)}</div>
    </div>
  );
}
