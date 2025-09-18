function handleAuthenticate(username, password) {
  model.setAccounts(api.restoreAccounts())
  model.setSessions(api.restoreSessions())

  const sessionId = model.authenticate(username, password)

  if (sessionId) {
    // api.setNickname(model.currentAccount)
    api.saveSessions(model.getSessions())
    renderDivLoginSuccess()
  } else {
    renderDivLoginFail()
  }
}

function handleLoadPageLogin() {
  model.setAccounts(api.restoreAccounts())
  model.setSessions(api.restoreSessions())

  const isAuthorized = model.authorize(api.restoreSessionId())

  // console.log(isAuthorized)

  if (isAuthorized) {
    renderDivAlreadyLoggedIn()
  }
}
