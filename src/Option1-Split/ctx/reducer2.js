// ##################################################################################
// # a SIMPLE REDUCER #2
// ##################################################################################
export const reducer2 = (state, action) => {
    switch (action.type) {
        case 'setLastName':
            return {...state, lastName: action.lastName }
        default:
            throw new Error('unexpected action type')
    }
} 