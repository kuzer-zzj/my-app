import Item from './Item'

const List = ({listData,deleteData}) => {

    console.log(listData)

    return <div className="list">
        {
          listData.map((item) => {
              const {note,date,time,id} = item
              return <Item  id={id} note={note} date={date} time={time} deleteData={deleteData}></Item>
          })
        }
       
    </div>
}

export default List