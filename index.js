const express = require('express')
const app = express()
var cors = require('cors')
const port = 3010

app.use(cors())


app.get('/loqgate', async (req, res) => {
  const key = req.query.Key
  const text = req.query.Text
  const container = req.query.Container

  const url = `https://api.addressy.com/Capture/Interactive/Find/v1.10/json3.ws?Key=${key}&Text=${text}&Container=${container}`
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/data',
      origin: 'https://hmv.com/',
      referer: 'https://hmv.com/'
    },
  })


  const json = await response.json()

//   console.log(json)

  res.send(json)
})



app.get('/addressbyid', async (req, res) => {
    const key = req.query.Key
    const id = req.query.Id

    console.log(id, key)
    const url = `https://api.addressy.com/Capture/Interactive/Retrieve/v1/json3.ws?Key=${key}&Id=${id}`
    const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/data',
          origin: 'https://hmv.com/',
          referer: 'https://hmv.com/'
        },
      })
    
      const json = await response.json()
    
      res.send(json)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


