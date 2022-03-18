import Item from './Item'

const List = ({listData}) => {

    console.log(listData)

    return <div className="list">
        {
          listData.map((item) => {
              const {note,date,time} = item
              return <Item note={note} date={date} time={time}></Item>
          })
        }
       
    </div>
}

export default List