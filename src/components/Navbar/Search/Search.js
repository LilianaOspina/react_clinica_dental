import React from "react";
import './Search.css'
import { Input } from "@mui/material";


function Search() {
    
    return (
		<div className='search'>
			<Input className="search__input" placeholder='Buscar...' />
		</div>
	);
}

export default Search;
