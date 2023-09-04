const API_ENDPOINT = "https://www.omdbapi.com/";
const API_KEY = "2a0c98b3";

export const fetchMovies = async (searchTerm) => {
  const response = await fetch(
    `${API_ENDPOINT}?s=${searchTerm}&apikey=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  if (data.Response === "True") {
    return data.Search;
  }
  throw new Error(data.Error);
};
