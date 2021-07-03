import React from 'react'
import styled from 'styled-components'

function Navbar() {
    return (
      <Nav>
        <Logo src="./image/logo.svg" alt="" />
        
        <NavMenu>
          <a>
            <span>HOME</span>
          </a>
          <a>
            <span>SEARCH</span>
          </a>
          <a>
            <span>FAVOURITES</span>
          </a>
          <a>
            <span>DOCUMENTS</span>
          </a>
          <a>
            <span>COMMUNITY</span>
          </a>
          <a>
            <span>MORE</span>
          </a>
        </NavMenu>
      </Nav>
    );
}

export default Navbar

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  color:white;
`;

const Logo = styled.img`
  width: 60px;
  cursor: pointer;
  
`;

const NavMenu = styled.div`

  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
   
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        /* opacity: 0; */
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        /* opacity: 1; */
      }
    }
  }
`;