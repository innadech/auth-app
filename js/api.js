const api = {
  setNickname(nickname) {
    const stringifiedAccount = JSON.stringify(nickname)
    sessionStorage.setItem('nickname', stringifiedAccount)
  },
  getNickname() {
    const stringifiedAccount = sessionStorage.getItem('nickname')
    const parsedNickname = JSON.parse(stringifiedAccount)
    return parsedNickname ?? {}
  },

  setNicknames(nicknames) {
    const stringifiedNicknames = JSON.stringify(nicknames)
    localStorage.setItem('nicknames', stringifiedNicknames)
  },

  getNicknames() {
    const stringifiedNicknames = localStorage.getItem('nicknames')
    const parsedNicknames = JSON.parse(stringifiedNicknames)
    return parsedNicknames ?? []
  },

  // setNickname(nickname) {
  //   sessionStorage.setItem('nickname', nickname)
  // },

  // getNickname() {
  //   return sessionStorage.getItem('nickname') ?? ''
  // },
}
