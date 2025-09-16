const model = {
  nicknames: [],

  currentAccount: {
    name: '',
    passwd: '',
  },

  setNicknames(nicknames) {
    this.nicknames = nicknames
  },

  createAccount(name, passwd) {
    return {
      name: name,
      passwd: passwd,
    }
  },
  register(name, passwd) {
    const account = this.createAccount(name, passwd)
    const findedAccount = this.nicknames.find(a => a.name === name)
    if (findedAccount) {
      return false
    } else {
      this.nicknames.push(account)
      this.currentAccount = account
      return true
    }
  },
  login(name, passwd) {
    const account = this.nicknames.find(
      a => a.name === name && a.passwd === passwd
    )
    this.currentAccount = account
    return account
  },

  // register(nickname) {
  //   if (!this.nicknames.includes(nickname)) this.nicknames.push(nickname)
  //   console.log('регистрация прошла успешно')
  // },
  // login(nickname) {
  //   if (this.nicknames.includes(nickname)) {
  //     this.currentNickname = nickname
  //     return true
  //   } else {
  //     console.log('такой никнейм отсутсвует')
  //     return false
  //   }
  // },
}
