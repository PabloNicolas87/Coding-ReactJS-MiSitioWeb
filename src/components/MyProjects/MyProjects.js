import { useTranslation } from "react-i18next"
import SwiperJS from "../Swiper/Swiper";
import Title from '../Title/Title';


const MyProjects = () => {
    const [t] = useTranslation("global");
    return(
        <div className="fondo" id="MyProjects">
            <div className="container-xxl">
                <Title titulo={t("myProjects.title")} />
                <div className="py-5">                
                    <SwiperJS />
                </div>    
            </div>
        </div>  
    )
}

export default MyProjects