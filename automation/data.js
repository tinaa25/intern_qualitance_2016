//locatori
/*nume variabila:
{locator..
type:..
}
 username: {
 locator: 'credentials..'

*/


module.exports = {
    username: {
        locator: '[ng-model="credentials.username"]',
        type: 'css'
    },
    password: {
        locator: '[ng-model="credentials.password"]',
        type: 'css'
    },
    login: {
        locator: '[ng-click="login()"]',
        type: 'css'
    },
    logout: {
        locator: '[ng-click="logout()"]',
        type: 'css'
    },
    userIcon: {
      locator:'.//*[@id=\'main-nav\']/div[1]/ul/li[3]/div/a/img',
      type: 'xpath'
    }


}
