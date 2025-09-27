export const DataCard = ({ currElem, onDelete, updatePost, setUpdatePost }) => {
  const { id, body, title } = currElem;

  const handleUpdatePost = (currElem) => setUpdatePost(currElem);

  return (
    <>
      <div className="flex flex-col gap-4 p-2">
        <p>- {title}</p>
        <p>{body}</p>
        <div className="flex justify-center gap-2">
          <button className="cursor-pointer border-2 rounded-lg p-2 bg-blue-700 text-blue-50" onClick={() => handleUpdatePost(currElem)}>
            Edit
          </button>
          <button
            className="cursor-pointer border-2 rounded-lg p-2 bg-red-800 text-blue-50"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
