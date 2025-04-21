import { useTranslation } from "react-i18next"
import Title from '../Title/Title';
import Quarters from '../Quarters/Quarters';

const AboutUs = () => {
    const [t] = useTranslation("global");
    return(
        <div className="fondo fondogris fondoAboutUs" id="AboutUs">
            <div className="container-xxl">
                <Title titulo={t("aboutUs.title")} />
                <Quarters />
            </div>
        </div>        
    )
}

export default AboutUs