import { useRef } from "react";
import { memo } from "react";

export const MemoChild = memo(({data}) => {
  const RenderTime = useRef(0);

  return (
    <>
      <p>Nothing Changed (Child) but rendered {RenderTime.current++} Times</p>
      <h1>my name is : {data.name}</h1>
    </>
  );
});

// export default memo(MemoChild);

// React.memo() - A higher-order component (HOC) that prevents a component from re-rendering if its props haven’t changed.

// Use React.memo when:

// You have pure components that always render the same output for the same props.
// You want to avoid unnecessary child re-renders.