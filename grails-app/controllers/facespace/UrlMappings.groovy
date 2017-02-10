package facespace

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "/page2"(view:"/page2")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
