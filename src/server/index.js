var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');

data = {}
text = ''

const dotenv = require('dotenv').config()
const api_key = process.env.API_KEY


const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors());

app.use(express.static('dist'))

// console.log(__dirname)
app.get('/Data', (reqest, response) => {
  response.send(JSON.stringify(data))

 // if (bool){
 //   bool = false
 // }
 // data = {}
 // console.log(`GET SERVER-SIDE:`)
 // console.log(data)
})
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // console.log(`First Get: ${data}`)
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
    // console.log(`MockAPIResponse Get:`)
    // console.log(mockAPIResponse)
    // console.log(`MockAPIResponse Get Data:`)
    // console.log(data)
})


app.post('/Text', async (req, res)=>{
  // console.log(`Post: ${req.body.text}`)
  text = req.body.text
  await getData(text)
  .then(meaningData => {
    // console.log(`POST SERVER-SIDE: `)
    // console.log(meaningData)
    data.status_code = meaningData.status.code
    data.sentence_text = meaningData.sentence_list[0].text
    data.status_message = meaningData.status.msg
    data.subjectivity = meaningData.subjectivity
    data.confidence = meaningData.confidence
    data.agreement = meaningData.agreement
    data.irony = meaningData.irony
  })
  // console.log(`Send:`)
  // console.log(data)
})

async function getData(text){
  const res =   await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${api_key}&txt=${text}&lang=en`)
  // console.log(`GetData`)
  try{
    const meaningData = await res.json()
    return meaningData;
  }catch(e){
    console.log(`error: ${e}`);
  }
}



