function App() {
  // Methods in React (Commonly used in React 18+)
  // map - Used to iterate over arrays and render elements - Rendering lists
  // filter - Used to filter elements in an array based on a condition - Searching, Filtering visible items
  // reduce - Used to accumulate values from an array into a single value - Summing values, Calculating totals
  // sort - Used to sort elements in an array - Sorting lists, Ordering items
  // find - Used to find the first element in an array that satisfies a condition
  let names = ["Alice", "Bob", "Charlie", "David"];
  let numbers = [3, 8, 1, 6, 2];

  return (
    <>
      <h1>Map Method</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h1>Filter Method</h1>
      <ul>
        {numbers
          .filter((num) => num > 2)
          .map((num, index) => (
            <li key={index}>{num}</li>
          ))}
      </ul>

      <h1>Reduce Method</h1>
      <ul>
        <li>Total: {numbers.reduce((acc, num) => acc + num, 0)}</li>
      </ul>

      <h1>Sort Method</h1>
      <ul>
        {numbers
          .sort((a, b) => a - b)
          .map((num, index) => (
            <li key={index}>{num}</li>
          ))}
      </ul>

      <h1>Find Method</h1>
      <ul>
        {numbers.find((num) => num > 5) ? (
          <li>First number greater than 5: {numbers.find((num) => num > 5)}</li>
        ) : (
          <li>No number greater than 5 found</li>
        )}
      </ul>
    </>
  );
}

export default App;
