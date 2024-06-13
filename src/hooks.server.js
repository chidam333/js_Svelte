let pages_served = new Map()
let cache = new Map()
let rate_limiter = new Map()
export async function handle({event,resolve}){
    console.log("lol")
    console.log({pages_served,cache})
    if(event.url.pathname=="/api"){
        console.log(event.getClientAddress())
    }
    if(pages_served.has(event.url.pathname)){
        pages_served.set(event.url.pathname,pages_served.get(event.url.pathname)+1)
        if(pages_served.get(event.url.pathname)==5){
            let response = await resolve(event)
            cache.set(event.url.pathname,response.clone())
            return response
        }if(pages_served.get(event.url.pathname)>5){
            console.log("serving cache")
            let dup_res = cache.get(event.url.pathname)
            cache.set(event.url.pathname,dup_res.clone())
            return dup_res
        }
    }else{
        pages_served.set(event.url.pathname,1)
    }
    let response = await resolve(event)
    return response
}

















