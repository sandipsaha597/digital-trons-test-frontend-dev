const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

app.post('/api/save', (req, res) => {
  console.log(req.body)
  res.status(200).json({ status: 'Success', data: req.body })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log('server started on port', PORT))