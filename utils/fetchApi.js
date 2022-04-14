import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "0ea2600320mshb112de83b10d1eep10da9fjsnf8ba24f3dd7c",
    },
  });

  return data;
};
