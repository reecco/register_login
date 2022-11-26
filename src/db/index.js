import connectionDB from "./connection.js"

export default class Loader {
  static start() {
    connectionDB()
  }
}