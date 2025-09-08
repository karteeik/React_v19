import { useId } from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "../Components/UI/Card";

export const Movie = () => {
  const MovieData = useLoaderData();
  const id = useId();
  console.log(MovieData);
  
  return (
    <>
      <h1 className="bg-gray-800 text-white text-center py-6">Movie Page</h1>
      {
        MovieData.Ratings.map((currElem) => {
          return <Card key={id} currElem={currElem} />
        })
      }
    </>
  );
};
