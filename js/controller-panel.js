function handleLoadPagePanel() {
  const nicknames = api.getNicknames()
  model.setNicknames(nicknames)
  const nickname = api.getNickname()
  const name = nickname.name
  const passwd = nickname.passwd
  model.login(name, passwd)
  renderPanel(model.currentAccount)
}
