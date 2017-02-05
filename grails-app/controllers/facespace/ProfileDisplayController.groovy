package facespace

import grails.rest.RestfulController

class ProfileDisplayController extends RestfulController{
    static responseFormats = ['json', 'xml']

    ProfileDisplayController(){
        super(Profile)
    }

    def index() {
//        for(UserAccount acc : UserAccount.findAll{userName == "Simon"}){
        for(UserAccount acc : UserAccount.findAll()){
            render acc.getUserName() + '</br>'
            def posts = acc.getProfile().getPosts()
            for(Post p : posts){
                if(p instanceof StatusPost){
                    String s = p.getStatusText()
                    s += ' ' + p.getDateCreated()
                    render s
                }
                render '</br>'
            }
            render '</br>'
        }
    }

    // Shows the basic idea of calling a controller method by URL
    // Security/Authentication will be integrated later.
    def getUserPosts(){
        System.out.println('request received.')
        def uname = params.userName
        def account = UserAccount.find{userName == uname}
        respond account.getProfile().getPosts()
    }
}
