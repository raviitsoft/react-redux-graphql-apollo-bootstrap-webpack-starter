// @flow

// #region imports
import React from 'react';
// #endregion

// #region flow types
export type Props = {
  color: string,
};
// #endregion

const UpIcon = ({ color }: Props) => (
  <svg width="24px" height="24px" viewBox="0 0 512 512" fill={`${color}`}>
    <path d="M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1
    c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z" />
  </svg>
);

// #region static props
UpIcon.defaultProps = {
  color: '#F1F1F1',
};

UpIcon.displayName = 'UpIcon';
// #endregion

export default UpIcon;