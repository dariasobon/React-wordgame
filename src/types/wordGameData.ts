import http from '../api/http'

const getWords = async() => {
  const response = await http.get("")
  const randomSet = Math.floor(Math.random() * response.data.length)
  const data =  response.data[randomSet]
  return data
}

export default getWords