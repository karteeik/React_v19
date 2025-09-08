export const Card = ({ currElem }) => {
  const { Source, Value } = currElem;
  return (
    <>
      <h1 className="bg-gray-800 text-white text-center py-6">{Source}</h1>
      <p className="bg-gray-800 text-white text-center py-6">{Value}</p>
    </>
  );
};
