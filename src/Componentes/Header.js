import React from "react";
import image from '../../src/images/quikdev-logo-footer.png';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
             
        <Navbar color="primary" dark expand="md">
       <div className="logo">  <NavLink href="/"><img src={image} alt="logo"/> </NavLink></div>
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/contato">Contato</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Tutorial
                </DropdownToggle>
                <DropdownMenu right>

                  <DropdownItem href="/tutorial">
                  Tutorial links     
                  </DropdownItem>

                  <DropdownItem href="/tutorial/ManipulandoElementosForm">
                    Manipulando elementos form        
                  </DropdownItem>

                  <DropdownItem href="/tutorial/ListaMap">
                  Função Lista Map       
                  </DropdownItem>

                  <DropdownItem href="/tutorial/ListaCarros">
                  FETCH para consumir API NODE       
                  </DropdownItem>
                  
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      
    );
  }
}

export default Header;