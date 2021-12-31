import { useSelector } from 'react-redux';

// ##################################################################################
// # custom hook to GRANULARIZE state selection .... should just use reselect and/or memoization? TBD
// ##################################################################################
export const useFirstName = props => {
    const { firstName } = useSelector(state => state.person);
    return { firstName };
}

useFirstName.whyDidYouRender = true;
export default useFirstName;
