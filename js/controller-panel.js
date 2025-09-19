function handleLoadPagePanel() {
  model.setAccounts(api.restoreAccounts())
  model.setSessions(api.restoreSessions())
  const accountData = model.authorize(api.restoreSessionId())
  if (accountData) renderPanel(accountData)
}
