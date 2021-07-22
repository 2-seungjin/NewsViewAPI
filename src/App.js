import React,{useState} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
      setData(response.data);
    })};
  return (
    <div>
      <div><button onClick={onClick}>불러오기</button></div>
      <div>
        {data && <textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true} />}
      </div>
    </div>
  )
}

export default App;

// 'apikey = a3d94194042b4e1eb6dbea2fe877d1e5'
