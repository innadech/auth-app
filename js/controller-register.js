function handleRegister(nickname, passwd) {
  const nicknames = api.getNicknames()
  model.setNicknames(nicknames)
  if (model.register(nickname, passwd)) {
    api.setNicknames(model.nicknames)
    renderDivOk()
  } else {
    renderDivNotOk()
  }
}
function handleLoadPageRegister() {
  const nicknames = api.getNicknames()
  model.setNicknames(nicknames)
  const nickname = api.getNickname()
  const name = nickname.name
  const passwd = nickname.passwd
  model.login(name, passwd)
}
