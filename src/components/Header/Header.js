import { useTranslation } from "react-i18next";
import Logo from '../Logo/Logo.js';
import NavItems from '../NavItem/NavItem.js';
import Switcher from '../Switcher/Switcher.js';
import './Header.css';

const Header = ({ toggleModo, modoOscuro }) => {
    const [t, i18n] = useTranslation("global");

    return (
        <nav className="navbar fixed-top">
            <div className="container-fluid">
                <Logo />
                <div className="d-flex flex-row align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-secondary btn-idioma dropdown-toggle m-0" data-bs-toggle="dropdown" aria-expanded="false">
                            {t("header.select-language")}
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end lista-idiomas">
                            <li>
                                <button className="dropdown-item d-flex justify-content-between align-items-center" onClick={() => i18n.changeLanguage("es")}>{t("header.spanish")}<img src={'/images/arg.webp'} alt={t("header.spanish")} width="30px" height="30px" /></button>
                            </li>
                            <li>
                                <button className="dropdown-item d-flex justify-content-between align-items-center" onClick={() => i18n.changeLanguage("por")}>{t("header.portuguese")}<img src={'/images/bra.webp'} alt={t("header.portuguese")} width="30px" height="30px" /></button>
                            </li>
                            <li>
                                <button className="dropdown-item d-flex justify-content-between align-items-center" onClick={() => i18n.changeLanguage("en")}>{t("header.english")}<img src={'/images/eeuu.webp'} alt={t("header.english")} width="30px" height="30px" /></button>
                            </li>
                        </ul>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="material-symbols-outlined">menu</span>
                    </button>
                </div>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header d-flex justify-content-end">
                        <button type="button" className="cerrar-boton d-flex" data-bs-dismiss="offcanvas" aria-label="Close">
                            <span class="material-symbols-outlined">close</span>
                        </button>
                        
                    </div>
                    <div className="offcanvas-body d-flex flex-column justify-content-between">
                        <ul className="navbar-nav flex-grow-1 pe-3">
                            <NavItems />
                        </ul>
                        <div className="d-flex justify-content-around align-items-center">
                            <p className="m-0">Light Mode</p>
                            <Switcher toggleModo={toggleModo} modoOscuro={modoOscuro} />
                            <p className="m-0">Dark Mode</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </nav>
    )
}


export default Header;
