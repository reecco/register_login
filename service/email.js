import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const url = process.env.URL

const sendEmail = async (email, code, id) => {
  return await axios.post('https://api-send-email.vercel.app/', {
    token: process.env.TOKEN,
      name: 'Não responda',
      fromEmail: 'Recuperação de Senha',
      text: `Altere sua senha em ${url}/${id}/${code}`,
      toEmail: email
  }).then(res => {
    return res
  })
}

export default sendEmail