import randomstring from 'randomstring'

import UserModel from "../models/User.js"
import sendEmail from '../../service/email.js'

export default class UserController {
  static async createUser(req, res) {
    let { email, password } = req.body

    try {
      const user = await UserModel.find({ email: req.body.email })

      if (user[0].email == email) {
        return res.status(400).json({ message: 'E-mail já cadastrado', status: 400 })
      }
    } catch (error) {
      const createdUser = await UserModel.create({ email, password })

      return res.status(200).json({ message: 'Cadastro realizado com sucesso', createdUser, status: 200 })
    }
  }

  //Lista os usuários
  static async indexUser(req, res) {
    const users = await UserModel.find()

    return res.status(200).json({ users, status: 200 })
  }

  //Visualiza um usuário
  static async showUser(req, res) {
    let { id } = req.params

    try {
      const user = await UserModel.findById(id)

      return res.status(200).json({ user, status: 200 })
    } catch (error) {
      return res.status(404).json(error)
    }
  }

  static async updateUser(req, res) {
    let { id, code } = req.params

    try {
      if (!code) {
        return res.status(400).json({ message: 'Código inválido', status: 400 })
      }

      await UserModel.findByIdAndUpdate(id, req.body)

      return res.status(200).json({ message: 'Usuário atualizado com sucesso.', status: 200 })
    } catch (error) {
      return res.status(404).json(error)
    }
  }

  static async deleteUser(req, res) {
    let { id } = req.body

    try {
      await UserModel.findByIdAndDelete(id)

      return res.status(200).json({ message: 'Usuário deletado com sucesso.', status: 200 })
    } catch (error) {

    }
  }

  static async recoverPassword(req, res) {
    let { email } = req.params

    try {//julia@gmail.com

      const user = await UserModel.find({ email })
    
      if (!user[0]) {
        return res.status(404).json({ message: 'Usuário não existe', status: 404 })
      }

      const id = user[0].id

      const code = randomstring.generate(30)

      // const send = await sendEmail(email, code, id)

      return res.status(200).json({ message: 'E-mail de recuperação enviado com sucesso.' })
    } catch (error) {
      return res.status(404).json(error)
    }
  }

  static async login(req, res) {
    let { email, password } = req.body

    try {
      const user = await UserModel.find({ email })

      if (user[0].email == email && password == user[0].password) {
        return res.status(200).json({ message: 'Login autorizado' })
      }

      return res.status(401).json({ message: 'E-mail ou senha inválidos' })
    } catch (error) {
      return res.status(401).json({ message: 'E-mail ou senha inválidos' })
    }
  }
}