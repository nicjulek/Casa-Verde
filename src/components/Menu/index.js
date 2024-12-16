import './Menu.css'

const Menu = () => {
    return (<nav>
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

    </nav>
    );
}

export default Menu