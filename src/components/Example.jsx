import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Example = ({ message }) => {
  const exampleStyles = css`
    color: rebeccapurple;
  `;
  return <h1 css={exampleStyles}>{message}</h1>;
};

Example.propTypes = {
  message: PropTypes.string.isRequired
};

export default Example;
