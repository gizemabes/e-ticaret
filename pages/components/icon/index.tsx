import React, { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'

const SearchButton: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Perform the search operation with the search term
    console.log("Search term:", searchTerm);
    // Add your search logic here
  };

  return (
    <div style={{display:'flex',flexDirection:'row',height:'50px'}}>
      <div style={{position: "absolute",display:'flex', padding: "4px"}}><AiOutlineSearch />
      <input
       style={{flexDirection: "row",textAlign: "start",color:'black',padding:'10px'}}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="ne alsan?"
      />
</div>
      <button onClick={handleSearch}></button>
    </div>
  );
};

export default SearchButton;