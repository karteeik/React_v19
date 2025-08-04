import './Event.css'

export const EventPropagation = () => {
    // Event propagation is how events move through the DOM tree (your HTML elements) when you click or interact with an element.

    // 1. Capturing Phase (Capture / Trickling Down)
    // 2. Target Phase
    // 3. Bubbling Phase (Bubble Up)

    const handleGrandParent = () => {
        console.log("hello, grand parent");
    }
    const handleParent = () => {
        console.log("hello, parent");
    }
    const handleChild = (e) => {
        // e.stopPropagation();
        console.log("hello, child");
    }

    return (
    <>
      {/* <div className="grandParent" onClick={handleGrandParent}>
        <div className="parent" onClick={handleParent}>
          <div className="child" onClick={handleChild}>child</div>
        </div>
      </div> */}

        {/* for Capture Phase */}
        <div className="grandParent" onClickCapture={handleGrandParent}>
        <div className="parent" onClickCapture={handleParent}>
          <div className="child" onClickCapture={handleChild}>child</div>
        </div>
      </div>
    </>
  );
};
