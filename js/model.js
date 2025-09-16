function createAccount(username, password) {
  return {
    username: username,
    password: password,
  }
}

let accounts = []

// currentAccount: {
//   username: '',
//   password: '',
// },
const model = {
  setAccounts(newAccounts) {
    accounts = newAccounts
  },

  getAccounts() {
    return accounts
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
      //
    } else {
      return false
    }
  },
}
