import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'wildchallenge',
  password: 'Omom1993.',
  port: 5432,
})

export const getArgonauts = (req, res) => {
  pool.query('SELECT * FROM argonauts', (error, results) => {
    if(error) throw error
    res.json({response: true, argonauts: results.rows})
  })
}

export const addArgonauts = (req, res)=> {
  pool.query('INSERT INTO argonauts (name) VALUES (?)', [req.body.name], (error, results)=> {
    if(error) throw error
    res.json({response: true})
  })
}