import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useRef } from 'react';

const CustomSearchField = () => {
  const inputRef=useRef<HTMLInputElement>(null);
  useEffect(()=>{
    inputRef.current?.focus();
  },[])
  return (
    <div className='search-input-wrapper'>
      <SearchIcon onClick={()=>inputRef.current?.focus()} />
      <input placeholder='Search for Movies or TV Series' ref={inputRef} type='search' />
    </div>
  )
}

export default CustomSearchField
