import React from 'react';
import styled from 'styled-components';

const MobileMenu = ({className}) => {
  return (
    <div className={className}>
      <h1>Menu</h1>
      <a href="#" className="menu-btn">Icon</a>
      <section className="one">
        <h1>Profile</h1>
      </section>
      <section className="two">
        <h1>Friends</h1>
      </section>
      <section className="three">
        <h1>Messages</h1>
      </section>
      <section className="four">
        <h1>Settings</h1>
      </section>
    </div>
  );
}

const ResponsveMenu = styled(MobileMenu)`
  height: 480px;
  width: 320px;
  background: #2e394b;
  overflow: hidden;
  position: relative;
  margin: 20px auto 0;

`;


export default ResponsveMenu;
