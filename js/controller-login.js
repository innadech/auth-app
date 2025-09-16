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
  model.setAccounts(api.restoreAccounts())
}
