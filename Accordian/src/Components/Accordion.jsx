import { useEffect, useState } from "react";
import faq from "../Api/faq.json";
import { FAQ } from "./UI/FAQ";

export const Accordion = () => {
  const [data, setData] = useState([]);

  const [activeId, setActiveId] = useState(false);
  
  const handleButton = (id) => {
    setActiveId((prevId) => (prevId == id ? false : id));
  };

  useEffect(() => {
    setData(faq);
  }, []);

  return (
    <>
      <section>
        <h1>Accordion</h1>
        <ul>
          {data.map((currElem) => {
            return (
              <FAQ
                key={currElem.id}
                currElem={currElem}
                isActive={activeId == currElem.id}
                onToggle={() => handleButton(currElem.id)}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};
