import React, { useDebugValue } from 'react'

// ##################################################################################
// # FLASHES during re-render
// ##################################################################################
export const useFlash = () => {
  useDebugValue('Use Flash Hook');

  const ref = React.useRef();
  React.useEffect(() => {
    ref.current.setAttribute(
      "style",
      `box-shadow: 0 0 8px 2px yellow;
       background-color: yellow;
       transition: box-shadow 50ms ease-out;`
    );
    setTimeout(() => ref.current.setAttribute("style", ""), 100);
  });
  return ref;
};