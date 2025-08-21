export const Header = ({ inputValue, setInputValue }) => {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  return (
    <>
      <h1>Let's Catch Pokemon</h1>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search Pokemon"
          id="InputValue"
        />
      </div>
    </>
  );
};
