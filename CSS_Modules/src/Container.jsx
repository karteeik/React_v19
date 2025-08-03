import "styled-components";
import styled from "styled-components";
import styles from "./Container.module.css";

// bun i styled-components (to install)

const Container = () => {

  const rate = 190;
  return (
    <>
      <div className="cbox" style={styleBox}>
        <h1>hello world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquam
          possimus blanditiis soluta beatae tempore maiores nemo minima
          doloremque explicabo magni ut, hic exercitationem voluptatem quas iste
          quo temporibus quasi.
        </p>
        {/* conditional styling */}
        <strong className={`styles.num ${rate > 100 ? styles.my_num : styles.your_num}`}>{rate}</strong>
      </div>

      {/* styled component to add css */}
      <StyleCom>
        <h1>hello world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquam
          possimus blanditiis soluta beatae tempore maiores nemo minima
          doloremque explicabo magni ut, hic exercitationem voluptatem quas iste
          quo temporibus quasi.
        </p>
      </StyleCom>
    </>
  );
};

// Inline Styling
const styleBox = {
  border: "1px solid #ccc",
  padding: "10px",
  margin: "10px",
  width: "200px",
  textAlign: "center",
  borderRadius: "10px",
};

// styled components - camel case

// const StyleCom = styled.section({
//   border: "1px solid #ccc",
//   padding: "10px",
//   margin: "10px",
//   width: "300px",
//   textAlign: "center",
//   borderRadius: "10px",
// });

// back tics - when use this than write code pure css with semi colon , without " "

const StyleCom = styled.section`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 300px;
  text-align: center;
  border-radius: 10px;
`;

export default Container;
