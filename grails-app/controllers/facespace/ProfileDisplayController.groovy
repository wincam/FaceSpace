package facespace

import grails.rest.RestfulController

class ProfileDisplayController extends RestfulController{
    static responseFormats = ['json', 'xml']

    ProfileDisplayController(){
        super(Profile)
    }

    def index() {

    }

    // Shows the basic idea of calling a controller method by URL
    // Security/Authentication will be integrated later.
    def getUserPosts(){
        System.out.println('request received.')
        def uname = params.userName
        def account = UserAccount.find{userName == uname}
        if(account!=null){
            respond account.getProfile().getPosts()
        }
        else{
            response.status = 404
        }
    }
}
