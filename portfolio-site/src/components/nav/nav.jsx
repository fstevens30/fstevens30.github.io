import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Navigation = () => {
    return (
        <ButtonGroup>
        <Button variant="primary">About</Button>
        <Button variant="primary">Projects</Button>
        <Button variant="primary">Contact</Button>
        </ButtonGroup>
    );
    }

export default Navigation;