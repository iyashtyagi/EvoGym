import { useState } from "react"
import Navbar from "./scenes/navbar"
import { SelectedPage } from "./shared/types";

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home );
    return (
        <div className="app">
            <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        </div>
    )
}

export default App
