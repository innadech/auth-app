function handleRegister(username, password) {
  model.setAccounts(api.restoreAccounts())
  if (model.register(username, password)) {
    api.saveAccounts(model.getAccounts())
    renderDivOk()
  } else {
    renderDivNotOk()
  }
}
function handleLoadPageRegister() {
  model.setAccounts(api.restoreAccounts())
}
