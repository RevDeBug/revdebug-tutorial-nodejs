const express = require('express')
const router = express.Router()
const https = require('https')

router.post('/buildInvoice', (req, res) => {
console.log(req.body.OrderId)
let invoice = ''
let orderDetailsArray = req.body.OrderDetails
console.log(orderDetailsArray)
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

console.log(invoice)

const options = {
  hostname: 'whatever.com',
  port: 443,
  path: '/todos',
  method: 'GET'
}

const request = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

request.on('error', error => {
  console.error(error)
})

request.end()
  
})


module.exports = router
