package facespace

import grails.rest.RestfulController

class VideoPostController extends RestfulController {

    static allowedMethods = [getPost: 'GET']
    static responseFormats = ['json', 'xml']

    VideoPostController(){
        super(Profile)
    }

    def index() { }

    def getPost(){
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
