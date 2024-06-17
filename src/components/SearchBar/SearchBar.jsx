import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ onSubmit }) => {

    const [searchValue, setSerchValue] = useState('');

    const handleOnChange = event => {
        setSerchValue(event.currentTarget.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (searchValue.trim() === '') {
            toast.error('Please, wrait name for the image');
            return;
        }
        onSubmit(searchValue);
    };
    
  return (
    <header>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
                  placeholder="Search images and photos"
                  value={searchValue}
                  onChange={handleOnChange}
              />
    <button type="submit"><IoSearch/></button>
          </form>
          <Toaster
              position="top-right"
              reverseOrder={false}
          />
</header>

  )
}

export default SearchBar
