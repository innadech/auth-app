function handleLogin(name, passwd) {
  const nicknames = api.getNicknames()
  model.setNicknames(nicknames)
  if (model.login(name, passwd)) {
    api.setNickname(model.currentAccount)
    renderDivLoginOk()
  } else {
    renderDivLogin()
  }
}

function handleLoadPageLogin() {
  const nicknames = api.getNicknames()
  model.setNicknames(nicknames)
  const nickname = api.getNickname()
  const name = nickname.name
  const passwd = nickname.passwd
  model.login(name, passwd)
}
