import { useDarkMode } from "../../Context/DarkContext";
import { Lines } from "./Line.styles";

export default function Line (){
    const {darkmode} = useDarkMode();
    return(
            <Lines darkmode={darkmode ? "dark-mode": "light-mode"}>
            </Lines>
    )
}