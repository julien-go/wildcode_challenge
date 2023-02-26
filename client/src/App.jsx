import {useState} from 'react'
import axios from 'axios'
import Form from './components/Form'
import List from './components/List'
import './App.css'

function App() {
  const [argonauts, setArgonauts] = useState([])
  const [data, setData] = useState(null)

  const getData = () => {
		axios
		.get("/api/get-argonauts")
		.then((res)=> {
      console.log(res.data)
		  setArgonauts(res.data.argonauts)}
		)
		.catch((err) => console.error(err))
	}

  return (
    <div className="App">
      <header>
        <h1>
        <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" /> Les Argonautes</h1>
      </header>
      <Form getData={getData}/>
      <List getData={getData} data={data} argonauts={argonauts}/>
      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  )
}

export default App
