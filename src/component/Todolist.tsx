
import {useSelector} from 'react-redux'

export default function Todolist() {
    const data :any = useSelector(state => state);
  return (
    <div> Todolist 
        <ul> 
            {data.todolistReducer.jobs.map((job:any)=>{
                return <li key={job.id}> {job.name} </li>
            })}
        </ul>
    </div>
  )
}
