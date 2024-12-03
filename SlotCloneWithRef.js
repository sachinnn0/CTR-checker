// SlotCloneWithRef.js
import React from 'react';
import { SlotClone } from '@radix-ui/react-slot'; // import SlotClone from Radix UI

const SlotCloneWithRef = React.forwardRef((props, ref) => {
  return <SlotClone {...props} ref={ref} />;
});

export default SlotCloneWithRef;
