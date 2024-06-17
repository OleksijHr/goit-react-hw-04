import axios from "axios"

const ACCESS_KEY = "nBjDx3M3zD2WrpPhfkSHVh1YXawb-uZYOaY5iVd1jYc";
axios.defaults.baseURL = "https://api.unsplash.com";


export const getImagesApi = async (value, page=1, perPage=10) => {
  try {
    const data = await axios.get('/search/photos', {
      params: {
        query: value,
        page: page,
        per_page: perPage,
        client_id: ACCESS_KEY
      }
    });

    return {
      images: data.data.results,
      hasMore: data.data.total_pages > page
    };
  } catch (error) {
    console.log("Error fetching photos:", error);
    throw error;
  }
}