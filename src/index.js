import axios from 'axios'
import FormData from 'form-data'
import ddtrace from 'dd-trace'
import AWS from 'aws-xray-sdk'

console.log('Hello World')

const customHandler = (event, context) => {
  const form_data = new FormData()

  axios({})
  return event
}

export default customHandler
