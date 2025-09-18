function handleAuthenticate(username, password) {
  model.setAccounts(api.restoreAccounts())
  if (model.authenticate(username, password)) {
    // api.setNickname(model.currentAccount)
    renderDivLoginOk()
  } else {
    renderDivLogin()
  }
}

function handleLoadPageLogin() {
  model.setAccounts(api.restoreAccounts())
}
