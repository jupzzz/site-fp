import logo from '../../assets/images/logo.png';

const Menu = () => {
    return (
        <nav className="menu-container">
            <img className="logo" src={logo} alt="" />
            <ul className="menu">
                <div className='menu-list'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Sobre</a></li>
                    <li><a href="/">Serviços</a></li>
                    <li><a href="/">Terapias</a></li>
                    <li><a href="/">Áreas de Atuação</a></li>
                    <li><a href="/">Dúvidas</a></li>
                    <li><a href="/">Contato</a></li>
                    <button><a href="">Agendamentos</a></button>
                </div>
            </ul>
        </nav>
    )
}

export default Menu;