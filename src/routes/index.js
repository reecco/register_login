import express from 'express'

import user from './userRoutes.js'

const routes = (app) => {
  app.route('/').get(async (req, res) => {
    // connectionDB()
    res.status(200).json({ message: 'OK', status: 200 })
  })

  app.use(
    express.json(),
    user
  )
}

export default routes