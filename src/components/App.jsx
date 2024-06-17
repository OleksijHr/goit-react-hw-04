import { useEffect, useState } from "react";
import { getImagesApi } from "../images-api";



const App = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const data = await getImagesApi();
      setImages(data)
      console.log('data :>> ', data);
    }
    getImages();
  })

  return (
    <div>
      {/* SearchBar */}
      {images.length > 0 &&
        <ul>
          {images.map(image => 
            <li key={ image.id }>
              <img src={image.urls.small} alt={ image.alt_description} width={400} height={300}/>
          </li>
          )}
        </ul>
      }
    </div>
  )
};

export default App;
 