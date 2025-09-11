import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "../Components/UI/Card";
import { getMovie } from "./Service";

const Movie = () => {
  const [data, setData] = useState([]);
//   const APIurl =
//     "https://www.omdbapi.com/?i=tt3896198&apikey=9762046b&s=titanic&page=1";

  const getMovieData = async () => {
    try {
    //   const res = await axios.get(APIurl);
      const res = await getMovie();
      console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
      console.log(error);
      console.error(error.message);
      console.error(error.response.status);
      console.error(error.response.data);
    }
  };
  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <>
        <ul>
            {data.map((currElem) => {
                return <Card key={currElem.imdbID} currElem={currElem} />
            })}
        </ul>
    </>
  );
};

export default Movie;
