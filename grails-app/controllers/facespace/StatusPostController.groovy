package facespace

import grails.rest.RestfulController

class StatusPostController extends RestfulController{

    static allowedMethods = [postStatus: 'POST']

    StatusPostController(){
        super(StatusPost)
    }

    def index() {
        // some default behaviour could be here
    }

    // Our first POST-enabled method
    // We just want to get the status text and save it to the profile.
    def postStatus(){
        def uname = params.userName
        def account = UserAccount.find{userName == uname}
        if(account != null){
            def profile = account.getProfile()
            def statusText = params.statusText
            new StatusPost(ownerProfile:profile, statusText:statusText).save()
            response.status = 200
        }
        else{
            response.status = 404
        }
    }
}
