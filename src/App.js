import { useState } from "react";

const axios = require('axios');

const config = {
  method: 'get',
  url: '/socket/market',
};



export default function App() {
  const [count, setCount] = useState(0);

setInterval(() => {
  axios(config)
  .then(function (response) {
    setCount(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
  
  
}, 2000)



 

  return (
    <div className="App">

      <p>{count}</p>
    </div>
  );
}