import { useTranslation } from "react-i18next";
import BotonDescargar from "../BotonDescargar/BotonDescargar";
import SocialIconList from '../SocialIconList/SocialIconList';
import Title from '../Title/Title';

const Contact = () => {
    const [t] = useTranslation("global");
    return(
        <div id="Contact" className="fondo fondogris">
            <div className="container d-flex flex-column justify-content-center">
                <Title titulo={t("contact.title")} />
                <div className="py-5 d-flex flex-column justify-content-center">
                    <SocialIconList />
                    <div className="m-auto">
                        <BotonDescargar />   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
