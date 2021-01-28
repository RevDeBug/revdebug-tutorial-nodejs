const express = require('express')
const router = express.Router()
const https = require('https')

router.post('/buildInvoice', (req, res) => {
let invoice = ''
let orderDetailsArray = req.body.OrderDetails

for (const index in orderDetailsArray) {  

  let orderDetails = orderDetailsArray[index]
  discount = orderDetails.Discount

  if(discount > 100) {
    continue
  }

  if (index == 0) {
    invoice = 'Invoice number ' + req.body.OrderId + ' for ' + req.body.Customer.CompanyName
  }

}

let urlToMakeCall = process.env.InvoicesSenderAddress

let hostAndPort = urlToMakeCall.split(":");

const options = {
  hostname: hostAndPort[0],
  port: hostAndPort[1],
  path: `/Sender/Send?invoice=${invoice}`,
  method: 'POST'
}

const request = https.request(options, res => {
  console.log(`statusCode: ${res}`)
  res.on('data', d => {
    process.stdout.write(d)
  })
})


request.end()
res.sendStatus(200);  
})


module.exports = router
