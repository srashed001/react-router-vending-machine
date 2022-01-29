import HomeLink from "./HomeLink"
import { useState } from "react"
import Button from "@mui/material/Button"

const Chips = () => {
    const [chipsEatin, setChipsEatin] = useState(0)

    return (
        <div> 
            <h1>BAGS EATEN: {chipsEatin}</h1>
            <Button variant="contained" style={{margin: "10px"}} onClick={()=>setChipsEatin(chipsEatin => chipsEatin + 1)}>NOM NOM NOM</Button>
            <Button variant="contained"><HomeLink/></Button>
        </div>
    )
}

export default Chips