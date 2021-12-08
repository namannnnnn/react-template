import {React , toggle} from 'react';
import Button from 'react-bootstrap/Button'
import { Navbar, Nav, Container, Form, Col, FormControl} from 'react-bootstrap';
import { FaAtlassian} from 'react-icons/fa'
import { FiInbox, FiSettings,FiUser, FiSearch} from 'react-icons/fi'
import {MdNotificationsNone} from 'react-icons/md'


function Header() {
   
    
    return (

        <>
        <Navbar
          expand="lg"
          bg="light"
          fixed="top"
          style={{}}
          collapseOnSelect
        >
          <Container fluid>
            <Navbar.Brand href="/" className="">
            <FaAtlassian />Artemis
            </Navbar.Brand>
            <Form className="d-flex" style={{ marginLeft: '12%'}}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          style={{borderColor:'#F8F9FA', backgroundColor:'#F8F9FA', borderBottomColor:'gray',}}
          
        />
        <Button style={{backgroundColor:'#F8F9FA', borderColor:'#F8F9FA'}} ><FiSearch style={{color:'gray'}}/></Button>
      </Form>
    
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={toggle}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Col>
                
              </Col>
              <Col md="auto">
              <Nav>
              <Nav.Item>
             <Nav.Link href="/"><FiSettings /></Nav.Link>
             </Nav.Item>
             <Nav.Item>
             <Nav.Link href="/"><FiInbox /></Nav.Link>
             </Nav.Item>
            <Nav.Item>
             <Nav.Link href="/"><MdNotificationsNone /></Nav.Link>
            </Nav.Item>
           <Nav.Item style={{flex:'center'}}>
            
            <Nav.Link href="/"><FiUser />Thomas Brown</Nav.Link>
          </Nav.Item>
              </Nav>
                {/* <Button className="m-1" variant="primary" size="lg">
                  Articles
                            </Button>
                <Button className="m-1" variant="primary" size="lg">
                  Timeline
                            </Button>
                <Button className="m-1" variant="primary" size="lg">
                  About
                            </Button> */}
                            
              </Col>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
        // <div>
         
        //     <Navbar fixed="top" bg="light" expand="lg" >
        //     <Navbar.Brand style={{paddingLeft:'1.3%', }} href="/"><FaAtlassian />Artemis</Navbar.Brand>
            
        //     <Nav style={{paddingLeft:'79%'}}>
        //     <Button onClick={() => setOpen(!open)}  aria-controls="example-collapse-text"  aria-expanded={open}> <FiMenu/> </Button>
            
        //     <Collapse in={open}>
        //     <div id="example-collapse-text">
        //     <Nav.Item>
        //     <Nav.Link href="/"><FiSettings /></Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //     <Nav.Link href="/"><FiInbox /></Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //     <Nav.Link href="/"><MdNotificationsNone /></Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item style={{flex:'center'}}>
            
        //     <Nav.Link href="/"><FiUser />Thomas Brown</Nav.Link>
        //     </Nav.Item>
        //     </div>
        //     </Collapse>
            
           
        //     </Nav>
           

        //     </Navbar>
        // </div>
    )
}

export default Header
