function createAccount(username, password) {
  return {
    username: username,
    password: password,
  }
}

let accounts = []
let sessions = {}

const model = {
  setAccounts(newAccounts) {
    accounts = newAccounts
  },

  getAccounts() {
    return accounts
  },

  setSessions(newSessions) {
    sessions = newSessions
  },

  getSessions() {
    return sessions
  },

  register(username, password) {
    const account = createAccount(username, password)
    const findedAccount = accounts.find(a => a.username === username)
    if (findedAccount) {
      return false
    } else {
      accounts.push(account)
      return true
    }
  },

  authenticate(username, password) {
    const account = accounts.find(
      a => a.username === username && a.password === password
    )
    if (account) {
      return this.startSession(account.username)
    } else {
      return false
    }
  },

  authorize(sesssionId) {
    const username = sessions[sesssionId]
    const account = accounts.find(account => account.username === username)
    if (account) {
      return true
    }
    return false
  },

  startSession(username) {
    const sessionId = Math.random()
    sessions[sessionId] = username
    return sessionId
  },
}

// currentAccount: {
//   username: '',
//   password: '',
// },

// {
//   '0.1234567': 'Inna'
//   '0.2345678': 'Roma'
//   '0.3456677': 'Foo'
// }
