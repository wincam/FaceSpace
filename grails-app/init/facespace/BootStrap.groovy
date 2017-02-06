package facespace

class BootStrap {

    def init = { servletContext ->
        // This code runs on Grails startup.
        // Try adding some new accounts for testing!
    }
    def destroy = {
    }

    def createSaveAccount(name, password, firstStatus){
        def account = new UserAccount(userName: name, password: password)
        def profile = new Profile(ownerAccount: account).save()
        new StatusPost(statusText:firstStatus, ownerProfile: profile).save()
    }
}
