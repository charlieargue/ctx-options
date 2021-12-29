// ##################################################################################
// # a SIMPLE REDUCER #1
// ##################################################################################
export const reducer1 = (state, action) => {
    switch (action.type) {
        case 'setFirstName':
            return {...state, firstName: action.firstName }
        default:
            throw new Error('unexpected action type')
    }
} 