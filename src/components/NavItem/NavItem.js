import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const NavItems = () => {
    const { t } = useTranslation("global");

    return (
        <>
            <li>
                <Link
                    activeClass="active"
                    to="AboutUs"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                    className="nav-link px-2 contact"
                    aria-label="Close"
                    data-bs-dismiss="offcanvas"
                >
                    {t("header.about-me")}
                </Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    to="MyProjects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                    className="nav-link px-2 projects"
                    aria-label="Close"
                    data-bs-dismiss="offcanvas"
                >
                    {t("header.my-projects")}
                </Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                    className="nav-link px-2 contact"
                    aria-label="Close"
                    data-bs-dismiss="offcanvas"
                >
                    {t("header.contact")}
                </Link>
            </li>
        </>
    );
}

export default NavItems;
