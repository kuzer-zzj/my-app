const Item = ({note,date,time}) => {
    return <div>
        <div>
            <p>{note}</p>
            <p>{date}</p>
        </div>
        <button className="remove">删除</button>
    </div>
}

export default Item