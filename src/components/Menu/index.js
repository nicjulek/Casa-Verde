import styled from 'styled-components'

const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 200px;
    font-family: 'Montserrat', sans-serif;

    ul{
        display: flex;
        margin: 20px;
        gap:30px;
    }
`;

const Menu = () => {
    return (<Navbar>
        <section className='casa-verde'>
            <div className='navbar-logo'>
                <div className='logo'>
                    <img src='./images/logo.svg' alt='Logo do site'></img>
                </div>
            </div>
        </section>
        <section className='links'>
            <ul>
                <li>
                    <a href='' target=''>Como fazer</a>
                </li>
                <li>
                    <a href='' target=''>Ofertas</a>
                </li>
                <li>
                    <a href='' target=''>Depoimentos</a>
                </li>
                <li>
                    <a href='' target=''>Videos</a>
                </li>
                <li>
                    <a href='' target=''>Meu carrinho</a>
                </li>
            </ul>
        </section>

    </Navbar>
    );
}

export default Menu