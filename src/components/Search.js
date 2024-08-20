import SearchIcon from "@mui/icons-material/Search"
import { useState } from "react";
function Search (props) {
    const [input,setInput]=useState("");
    function handleCityName(e) {
        setInput(e.target.value);
    }
    function handleClick()
    {
        input ? props.setCityName(input): alert("Enter Input");
        setInput("");
    }
    function keyPressed(e)
    {
        if(e.key === "Enter")
        {
            handleClick();
        }
    }
    return (
        <>
        <div className="searchContainer">
            <input type="text" value={input} name="search-city" placeholder="Enter City Name" onChange={handleCityName} onKeyDown={keyPressed}></input>
         <button onClick={handleClick}><SearchIcon sx={{fontSize: 40, color: "white", display: "flex", justifyContent: "center"}}/></button>   
         
            </div>
        </>
    )
}
export default Search;