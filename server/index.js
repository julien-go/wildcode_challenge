import express from 'express'
import bodyParser from 'body-parser'
import {getArgonauts, addArgonauts} from './queries.js'

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/api/get-argonauts', getArgonauts)
app.post('/api/add-argonauts', addArgonauts)

app.listen(PORT, ()=> {
	console.log(`Server listening on ${PORT}`);
} )

