import axios from "axios";

export async function getNews() {
  try {
    const response = await axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=7592a43d7ab34ad4ab9ba5169e9b1399", {
      params: {
        pageSize: 12,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error(error);
    return [];
  }
}