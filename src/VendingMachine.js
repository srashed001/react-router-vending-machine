import { Button, ButtonGroup } from "@mui/material";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './VendingMachine.css'
;

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <h1>Vending Machine</h1>
            <ButtonGroup
                orientation="vertical"
                variant="contained"
                >
                <Button><Link exact to="/soda">Soda</Link></Button>
                <Button><Link exact to="/chips">Chips</Link></Button>
                <Button><Link exact to="/candybar">Candy Bar</Link></Button>
            </ButtonGroup>

        </div>
    )
}

export default VendingMachine