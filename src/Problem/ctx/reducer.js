// ##################################################################################
// # a SIMPLE REDUCER
// ##################################################################################
export const reducer = (state, action) => {
    switch (action.type) {
        case 'setFirstName':
            return {...state, firstName: action.firstName }
        case 'setLastName':
            return {...state, lastName: action.lastName }
        default:
            throw new Error('unexpected action type')
    }
} 