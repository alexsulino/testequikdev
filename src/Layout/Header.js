import React from "react";
import Social from "./Social";
import Logo from "./Logo";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


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
          <Logo/>
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
                Projetos
                </DropdownToggle>

                <DropdownMenu right>

                <DropdownItem href="/project/projects">
                Projetos    
                </DropdownItem>

                <DropdownItem href="/project/NewProject">
                Criar Projeto   
                </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>


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
          <Social />
          
        </Navbar>
        
      </div>
      
    );
  }
}

export default Header;