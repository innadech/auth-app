const api = {
  // setAccount(account) {
  //   const stringifiedAccount = JSON.stringify(account)
  //   sessionStorage.setItem('nickname', stringifiedAccount)
  // },
  // getNickname() {
  //   const stringifiedAccount = sessionStorage.getItem('nickname')
  //   const parsedNickname = JSON.parse(stringifiedAccount)
  //   return parsedNickname ?? {}
  // },

  saveAccounts(accounts) {
    const stringifiedAccounts = JSON.stringify(accounts)
    localStorage.setItem('accounts', stringifiedAccounts)
  },

  restoreAccounts() {
    const stringifiedAccounts = localStorage.getItem('accounts')
    const parsedAccounts = JSON.parse(stringifiedAccounts)
    return parsedAccounts ?? []
  },
}
