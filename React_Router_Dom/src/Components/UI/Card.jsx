import { NavLink } from "react-router-dom";
export const Card = ({ currElem }) => {
  const { Poster, Title, Year, Type, imdbID } = currElem;
  return (
    <>
      <li>
        <figure>
        <img src={Poster} alt={Title} />
        <h2>
          {Title} in {Year}
        </h2>
        <p>{Type}</p>
      </figure>
      <NavLink to={`/movie/${imdbID}`} className="bg-gray-800 text-white text-center">
            Watch Now
      </NavLink>
      </li>
    </>
  );
};
