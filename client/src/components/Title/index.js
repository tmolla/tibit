import React from 'react';
import { Animate, AnimateGroup } from 'react-simple-animate';

const props = {
  start: { opacity: 0 },
  end: { opacity: 1 }
};

export default () => (
  <AnimateGroup play>
    <Animate {...props} sequenceIndex={0} /> // sequence index will defined which animation play first
    <Animate {...props} sequenceIndex={1} />
    <Animate {...props} sequenceIndex={2} />
  </AnimateGroup>
);