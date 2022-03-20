const Item = ({id,note,date,time,deleteData}) => {

    function deleteItem(){
        deleteData(function(pre){
            console.log("删除！");
            return pre.filter(item => {
                console.log('item.id =',item.id,'| id=',id)
             return   item.id != id
            })
        })
    }

    return <div>
        <div>
            <p>{id}</p>
            <p>{note}</p>
            <p>{`${date} ${time}`}</p>
        </div>
        <button onClick={deleteItem} className="remove">删除</button>
    </div>
}

export default Item