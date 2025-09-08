export const GetMovieData = async () => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
