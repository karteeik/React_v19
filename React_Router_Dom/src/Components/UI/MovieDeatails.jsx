import { useLoaderData } from "react-router-dom";

export const MovieDetails = () => {
  const MoviesData = useLoaderData();
  console.log(MoviesData);

  const { Poster, Title, Year, Type } = MoviesData;

  return (
    <>
      <li className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
        <figure>
          <img
            src={Poster}
            alt={Title}
            className="w-40 h-56 object-cover rounded"
          />
          <h2 className="mt-2 text-lg font-semibold text-center">
            {Title} ({Year})
          </h2>
          <p className="text-sm text-gray-600 text-center">{Type}</p>
        </figure>
      </li>
    </>
  );
};
