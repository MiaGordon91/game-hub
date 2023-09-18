import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Genres {
    id: number;
    name: string;
    slug: string;
}

interface FetchGenreResponse {
    count: number;
    results: Genres[];
}

const useGenres = () => {
  
    const [genres, setGenres] = useState<Genres[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

      setLoading(true);

      apiClient
        .get<FetchGenreResponse>("/genres")
        .then((res) => {
          setGenres(res.data.results)
          setLoading(false)
      })
      .catch((err) => {
          setError(err.message)
          setLoading(false)});

    }, []);

    return {genres, error, isLoading};
    
}

export default useGenres;