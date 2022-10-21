import { Button, Nav, Navbar } from 'react-bootstrap';
import { useTheme } from '../Context/ThemeContext';

const TopNavbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar bg={theme} variant={theme}>
      <div className=" d-flex justify-content-between">
        <Navbar.Brand href="/">React Bootcamp Ödev</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Ana Sayfa</Nav.Link>
          <Nav.Link href="/features">Özellikler</Nav.Link>
          <Nav.Link href="/pricing">Fiyatlar</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link className="me-auto" onClick={toggleTheme}>
            <Button  variant="outline-success">Tema</Button>
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default TopNavbar;