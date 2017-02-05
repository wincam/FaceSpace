package facespace

class BootStrap {

    def init = { servletContext ->
//        createSaveAccount('Ethan', '2212', 'My first status!')
//        createSaveAccount('Kate', '2212', 'My first status!')
//        createSaveAccount('Simon', '2212', 'Meow!')
//        createSaveAccount('Marceline', '2212', 'Meeeeow!')
    }
    def destroy = {
    }

    def createSaveAccount(name, password, firstStatus){
        def account = new UserAccount(userName: name, password: password)
        def profile = new Profile(ownerAccount: account).save()
        new StatusPost(statusText:firstStatus, ownerProfile: profile).save()
    }
}
