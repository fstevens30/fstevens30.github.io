import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
    return (
        <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        </Nav>
    );
    }

export default Navigation;