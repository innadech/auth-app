function handleAuthenticate(username, password) {
  model.setAccounts(api.restoreAccounts())
  model.setSessions(api.restoreSessions())
  const sessionId = model.authenticate(username, password)
  if (sessionId) {
    api.saveSessions(model.getSessions())
    api.saveSessionId(sessionId)
    renderDivSignIn('signing in successfully')
  } else {
    renderDivSignIn('signing in failure')
  }
}

function handleLoadPageLogin() {
  model.setAccounts(api.restoreAccounts())
  model.setSessions(api.restoreSessions())
  const isAuthorized = model.authorize(api.restoreSessionId())
  if (isAuthorized) renderDivSignIn('online')
}
