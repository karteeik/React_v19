const InputComponent = ({ inputValue , setInputValue}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter SomeThing Else"
        value={inputValue}
        onChange={(events) => setInputValue(events.target.value)}
      />
    </>
  );
};

export default InputComponent;
