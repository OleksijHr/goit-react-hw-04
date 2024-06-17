import axios from "axios"

const ACCESS_KEY = "nBjDx3M3zD2WrpPhfkSHVh1YXawb-uZYOaY5iVd1jYc";
const BASE_URL = "https://api.unsplash.com";


export const getImagesApi = async (query = 'dog',page=1, per_page=15) => {
  const {data} = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query, page, per_page,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
      })

  return data.results;
}


// const ACCESS_KEY = "nTmfZBh3fHC-1xCDDBilQhBg_4ZKGGHwqFThAoBaxDc";
// const BASE_URL = "https://api.unsplash.com";

// const fetchImages = async (query, page) => {
  //     const response = await axios.get(`${BASE_URL}/search/photos`, {
//         params: { query, page, per_page: 12 },
//         headers: {
  //             Authorization: `Client-ID ${ACCESS_KEY}`,
//         },
//     });
//     return response.data;
// };

// export { fetchImages };

// Application ID
// 622357

// Access Key
// YKBjddSOsQQ-A2lhPLOcBT4nwPJZp9Df77cR356iU50

// Secret key
// mxSh81CA22adWPKPnp0FSEpeTsoYl8W1fJJany6dZMs


// Note: both your Access Key and Secret Key must remain confidential.