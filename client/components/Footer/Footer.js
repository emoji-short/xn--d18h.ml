import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReCaptcha from './ReCaptcha';
import showRecaptcha from '../../helpers/recaptcha';

const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px 0 ${({ isAuthenticated }) => (isAuthenticated ? '8px' : '24px')};
  background-color: white;

  a {
    text-decoration: none;
    color: #2196f3;
  }
`;

const Text = styled.p`
  font-size: 13px;
  font-weight: 300;
  color: #666;

  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

class Footer extends Component {
  componentDidMount() {
    showRecaptcha();
  }

  render() {
    return (
      <Wrapper isAuthenticated={this.props.isAuthenticated}>
        {!this.props.isAuthenticated && <ReCaptcha />}
        <Text>
          Made with 💙
          {' | '}
          <a
            href="https://github.com/emoji-short/xn--d18h.ml"
            title="GitHub"
            target="_blank"
          >
            🐙 GitHub
          </a>
          {' | '}
          <a href="/terms" title="Terms of Service">
            📃 Terms of Service
          </a>
          {' | '}
          <a href="/report" title="Report abuse">
            🚩 Report Abuse
          </a>
          {process.env.CONTACT_EMAIL && (
            <Fragment>
              {' | '}
              <a href={`mailto:${process.env.CONTACT_EMAIL}`} title="Contact us">
                🖋 Contact us
              </a>
            </Fragment>
          )}
          .
        </Text>
      </Wrapper>
    );
  }
}

Footer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({ isAuthenticated });

export default connect(mapStateToProps)(Footer);
