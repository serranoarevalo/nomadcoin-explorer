import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BlockPresenter = () => "block";

BlockPresenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  block: PropTypes.object
};

export default BlockPresenter;
