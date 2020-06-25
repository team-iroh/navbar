/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Container,
  LinkContainer,
  PrettyLink,
  Link,
  LogoContainer,
} from './Navbar.style';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div>
      <Container>
        <LinkContainer leftAlign>
          <Link>Explore</Link>
          <Link>Start a project</Link>
        </LinkContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <LinkContainer>
          <Link href='#'>
            Search
            <i style={{ marginLeft: 5 }} className='fas fa-search' />
          </Link>
          <Link href='#'>Log in</Link>
        </LinkContainer>
      </Container>
    </div>
  );
};

export default Navbar;
