
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../store/reducer/countReducer';

export default function Count() {
    // lấy dữ liệu từ kho
    // useSelector

    //thực hiện hành động: useDispatch
    const data:any= useSelector(state=>state);
    console.log(data);
    const dispatch=useDispatch();
    const increaseCount=()=>{
        dispatch(increase())
    }
    const decreaseCount=()=>{
        dispatch(decrease())
    }
  return (
    <div>
      <p>giá trị biến count: {data.countReducer.count}</p>
      <button onClick={increaseCount}>tăng</button>
      <button onClick={decreaseCount}>giảm</button>
    </div>
  )
}
