import { createContainer } from 'react-tracked';
import useValue from './useValue'

// ##################################################################################
// # react-tracked SETUP
//   https://github.com/dai-shi/react-tracked
// ##################################################################################
export const { Provider: RTProvider, useTracked } = createContainer(useValue);