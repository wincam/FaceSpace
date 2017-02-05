package facespace

class Profile {

    // Grails can correctly 'guess' the association between 'this' and
    // the Profile called userProfile in the UserAccount class
    // i.e. it is correctly inferring the 1-to-1 relationship
    UserAccount ownerAccount
    PersonInfo info
    FriendList friendList

    // mappedBy tells grails how to handle association conflicts
    static mappedBy = [outFriendRequests: 'sourceProfile',
                       inFriendRequests: 'targetProfile']

    static hasMany = [posts : Post,
                      outFriendRequests : FriendRequest,
                      inFriendRequests : FriendRequest]

    static hasOne = [friendList : FriendList]

    static constraints = {
        posts nullable: true
        inFriendRequests nullable: true
        outFriendRequests nullable: true
        info unique: true
        info nullable: true
        friendList nullable: true
        friendList unique: true
    }
}
