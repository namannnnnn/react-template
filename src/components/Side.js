import { React, toggle } from "react";
import { Nav, Navbar, Button, Dropdown } from "react-bootstrap";
import "../components/side.css";
import {
  AiOutlineGlobal,
  AiOutlineFolderOpen,
  AiOutlineAppstore,
} from "react-icons/ai";
import { VscDashboard } from "react-icons/vsc";
import { FiUsers, FiInbox, FiSettings } from "react-icons/fi";
import { RiPagesLine } from "react-icons/ri";
import {
  MdOutlineContactSupport,
  
} from "react-icons/md";

import { SiDatabricks } from "react-icons/si";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { BiPowerOff } from "react-icons/bi";

const Side = (props) => {
  return (
    <>
      <Navbar bg="light" style={{}} collapseOnSelect>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="col-md-12 d-none d-md-block bg-light sidebar "
            style={{ borderRight: "1px solid #f1f1f1", width: "15%" }}
            activeKey="/"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <div className="sidebar-sticky"></div>

            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                MAIN
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
          
                
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-primary"
                    style={{ width: "90%", textAlign: "left" }}
                    id="dropdown-basic"
                  >
                    <VscDashboard /> Dashboard
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
               
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-primary"
                    style={{ width: "90%", textAlign: "left" }}
                    id="dropdown-basic"
                  >
                    <AiOutlineGlobal /> Discover
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
               
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-primary"
                    style={{ width: "90%", textAlign: "left" }}
                    id="dropdown-basic"
                  >
                    <FiUsers /> Users
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
            
                
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-primary"
                    style={{ width: "90%", textAlign: "left" }}
                    id="dropdown-basic"
                  >
                    <HiOutlineDocumentSearch /> Documents
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
            
                
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-primary"
                    style={{ width: "90%", textAlign: "left" }}
                    id="dropdown-basic"
                  >
                    <AiOutlineAppstore /> Applications
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
               
                
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-primary"
                    style={{ width: "90%", textAlign: "left" }}
                    id="dropdown-basic"
                  >
                    <RiPagesLine /> Pages
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              SECONDARY
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Button
                variant="outline-primary"
                style={{ width: "90%", textAlign: "left" }}
              >
                <MdOutlineContactSupport /> Support Center
              </Button>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Button
                variant="outline-primary"
                style={{ width: "90%", textAlign: "left" }}
              >
                <FiInbox /> Inbox
              </Button>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Button
                variant="outline-primary"
                style={{ width: "90%", textAlign: "left" }}
              >
                <AiOutlineFolderOpen /> File Manager
              </Button>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Button
                variant="outline-primary"
                style={{ width: "90%", textAlign: "left" }}
              >
                <SiDatabricks /> Data List
              </Button>{" "}
            </Nav.Link>
            <Nav.Link eventKey="disabled" disabled></Nav.Link>
            <Nav.Link eventKey="disabled" disabled></Nav.Link>
            <Nav.Link>
              {" "}
              <Button
                variant="outline-primary"
                style={{ width: "90%", textAlign: "left" }}
              >
                <FiSettings /> Settings
              </Button>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Button
                variant="outline-primary"
                style={{ width: "90%", textAlign: "left" }}
              >
                <BiPowerOff /> Log Out
              </Button>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Side;
