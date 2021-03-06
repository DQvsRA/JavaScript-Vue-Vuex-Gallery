import DatabaseService from '@/model/services/DatabaseService'

/**
  return
    SUCCESS:
    - Object - userDoc from DB { email, firstName, lastName, _id }
    FAILURE:
    - Int UserError.SIGN_UP_RESPONSE
    - Int UserError.SIGN_UP_FAILED
*/
class ConfigUserCommand {
  execute (userDoc) {
    console.log('> ConfigUserCommand > userDoc:', userDoc)
    return DatabaseService.configureForUser(userDoc.name)
  }
}

const SINGLETON = new ConfigUserCommand()

export default SINGLETON
