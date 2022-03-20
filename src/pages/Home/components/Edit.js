import { useState } from "react"
import { v4 } from 'uuid'

const Edit = ({add}) => {

    function addItem (){
        add(function(prevData){
      return [{
          id : v4(),
          note,
          date,
          time
      },
      ...prevData,]
        })
    }

    const [note,setNode] = useState("")

    function noteChange(e){
        setNode(e.target.value)
    }

    const [date,setDate] = useState("")

    function dateChange(e){
        setDate(e.target.value)
    }

    const [time,setTime] = useState("")

    function timeChange(e){
        setTime(e.target.value)
    }
    
    return <div>
        <h1>记事本</h1>
        <p>记事:</p>
        <input type="text" value={note} onChange={noteChange}></input>
        <p>日期：</p>
        <input type="date" value={date} onChange={dateChange} ></input>
        <p>时间:</p>
        <input type="time" value={time} onChange={timeChange}></input>
        <button onClick={addItem} className="add">新增</button>
    </div>
}

export default Edit