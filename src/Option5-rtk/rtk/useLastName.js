import { useSelector } from 'react-redux';

// ##################################################################################
// # custom hook to GRANULARIZE state selection .... should just use reselect and/or memoization? TBD
// ##################################################################################
export const useLastName = props => {
    const { lastName } = useSelector(state => state.person);
    return { lastName };
}

useLastName.whyDidYouRender = true;
export default useLastName;
