import { useState , useEffect } from "react"

import Edit from "./Home/components/Edit"
import List from "./Home/components/List"
import './index.css'


const Home = () => {
    const [data,setData] = useState([])

    useEffect(()=>
    {
        //window.alert("新增成功")
    },[data])

    return <div className="app">
        <Edit add ={setData} ></Edit>
        <List listData={data} deleteData={setData}></List>
    </div>
}

export default Home