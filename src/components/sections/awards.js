import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
const { colors, fontSizes } = theme;

const StyledContainer = styled(Section)`
  max-width: 600px;
  margin: 0 auto 100px;
  a {
    ${mixins.inlineLink};
  }
`;

const StyledDescription = styled.div`
  ${mixins.boxShadow};
  padding: 25px;
  background-color: ${colors.lightNavy};
  color: ${colors.lightSlate};
  font-size: ${fontSizes.lg};
  text-align: left;
  border-radius: ${theme.borderRadius};
  ${media.thone`
    background-color: transparent;
    padding: 20px 0;
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
  `};
  p {
    margin: 0;
  }
  a {
    ${mixins.inlineLink};
  }
  ul {
    color: ${colors.green};
  }
`;

const Awards = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="awards" ref={revealContainer}>
      <Heading>{title}</Heading>

      <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
    </StyledContainer>
  );
};

Awards.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Awards;
