import { useEffect, useState } from "react";
import { deletePost, getCrudData } from "./Api/GetData";
import { DataCard } from "./Components/UI/DataCard";
import "./App.css";
import { FormSec } from "./Components/UI/FormSec";

const App = () => {
  // console.log(getCrudData());
  const [card, getCard] = useState([]);

  const [updatePost, setUpdatePost] = useState({});

  const getData = async () => {
    const res = await getCrudData();
    console.log(res.data);
    getCard(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const updatedPost = card.filter((currPost) => {
          return currPost.id !== id;
        });
        getCard(updatedPost);
      }
    } catch (error) {
      console.log(error);
    }
    console.log(id);
  };

  return (
    <>
      <FormSec card={card} getCard={getCard} updatePost={updatePost} setUpdatePost={setUpdatePost} />
      <ol className="grid grid-cols-3 gap-8 m-4">
        {card.map((currElem) => {
          return (
            <li className="list-decimal list-inside border-2" key={currElem.id}>
              <DataCard currElem={currElem} onDelete={handleDeletePost} updatePost={updatePost} setUpdatePost={setUpdatePost} />
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default App;
