import { getInitialData } from "../utils/api"
import { recieveTweets } from "./tweets"
import { recieveUsers } from "./users"

export function handleInitialData () {
    return dispatch => {
        return getInitialData().then(({users, tweets}) => {
            dispatch(recieveUsers(users))
            dispatch(recieveTweets(tweets))
        })
        
    }
}