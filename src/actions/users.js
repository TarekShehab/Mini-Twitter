export const RECIEVE_USERS = 'RECIEVE_USERS'

export function recieveUsers (users) {
    return {
        type: RECIEVE_TWEETS,
        users
    }
}