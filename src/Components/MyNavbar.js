import { Nav, Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'

export default function MyNavBar() {

    const links = [
        {
            to: "",
            title: "Home"
        },
        {
            to: "documentation",
            title: "Documentation"
        },
        {
            to: "habits",
            title: "Habits"
        },
        {
            to: "gender",
            title: "Gender"
        },
        {
            to: "sources",
            title: "Sources"
        },
    ]

    return (
        <Navbar className="NavBar-color">
            <Container>

                <LinkContainer to="/" style={{ cursor: 'pointer' }}>
                    <Navbar.Brand>
                        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/calorie-fire-2590548-2161639.png" alt="Logo" height="70" />
                    </Navbar.Brand>                
                </LinkContainer>

                <Nav className='me-auto fs-4'>
                    {links.map((link) => (
                        <LinkContainer to={`/${link.to}`} key={link.to}>
                            <Nav.Link>{link.title}</Nav.Link>
                        </LinkContainer>
                    ))}
                </Nav>

            </Container>
        </Navbar>
    )
}