import { useLoaderData } from "react-router-dom";
import { Card } from "../Components/UI/Card";

export const Movie = () => {
  const MovieData = useLoaderData();
  console.log(MovieData);

  return (
    <>
      <h1 className="bg-gray-800 text-white text-center py-6">Movie Page</h1>
      <ul className="flex flex-wrap gap-4 justify-center">
        {MovieData.Search.map((currElem) => {
          return <Card key={MovieData.imdbID} currElem={currElem} />;
        })}
      </ul>
    </>
  );
};
