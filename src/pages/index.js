import { useState } from "react"

import Edit from "./Home/components/Edit"
import List from "./Home/components/List"
import './index.css'


const Home = () => {
    const [data,setData] = useState([])
    return <div className="app">
        <Edit add ={setData} ></Edit>
        <List listData={data} ></List>
    </div>
}

export default Home