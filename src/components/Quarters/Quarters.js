import React from 'react';
import Image from '../Image/Image';
import { useTranslation } from 'react-i18next';
import SkillItem from '../SkillItem/SkillItem';
import './Quarters.css';

const Quarters = () => {
    const [t] = useTranslation("global");

    const arrayDeObjetos = [
        { 
            id: 1, 
            imagen: <Image srcImg={'/images/Perfil.webp'} nameImg={'Perfil'} className="perfil-image" />,
            descripcion: t("aboutUs.paragraph1")
        },
        { 
            id: 2, 
            habilidades: [
                <SkillItem key="HTML" imageSrc={'/images/html.webp'} title={'HTML5'} />,
                <SkillItem key="CSS" imageSrc={'/images/css.webp'} title={'CSS3'} />,
                <SkillItem key="JS" imageSrc={'/images/javascript.webp'} title={'JavaScript'} />,
                <SkillItem key="Bootstrap" imageSrc={'/images/bootstrap.webp'} title={'Bootstrap'} />,
                <SkillItem key="Tailwind" imageSrc={'/images/tailwind.webp'} title={'Tailwind'} />
            ],
            descripcion: t("aboutUs.paragraph2")
        },
        { 
            id: 3, 
            habilidades: [
                <SkillItem key="Angular" imageSrc={'/images/angular.webp'} title={'Angular'} />,
                <SkillItem key="ReactJS" imageSrc={'/images/react.webp'} title={'ReactJS'} />,
                <SkillItem key="NextJS" imageSrc={'/images/nextjs.webp'} title={'NextJS'} />,
                <SkillItem key="Firebase" imageSrc={'/images/firebase.webp'} title={'Firebase'} />,
                <SkillItem key="Git" imageSrc={'/images/git.webp'} title={'Git'} />
            ],
            descripcion: t("aboutUs.paragraph3")
        },
        { 
            id: 4, 
            habilidades: [
                <SkillItem key="AWS" imageSrc={'/images/aws.webp'} title={'AWS'} />,
                <SkillItem key="Azure" imageSrc={'/images/azure.webp'} title={'Azure'} />,
            ],
            descripcion: t("aboutUs.paragraph4")
        }
    ];

    return (
        <div className="d-flex row px-1 py-5">
            {arrayDeObjetos.map(objeto => (
                <div key={objeto.id} className="col-12 col-md-6 p-0">
                    <div className="quarters m-2 p-3 p-lg-5">
                        {objeto.habilidades && (
                            <div className='d-flex row'>
                                <div className='primera d-flex justify-content-around align-items-center py-5 py-md-0'>
                                    {objeto.habilidades.map(habilidad => (
                                        <div className='col-2' key={habilidad.key}>
                                            {habilidad}
                                        </div>
                                    ))}
                                </div>
                                <div className='segunda'>
                                    <p className='text-md-start text-center m-0 fw-light'>{objeto.descripcion}</p>
                                </div>
                            </div>
                        )}
                        {objeto.imagen && (
                            <>
                            <div className='d-flex row'>
                                <div className='primera d-flex justify-content-around align-items-center py-5 py-md-0'>
                                    {objeto.imagen}
                                </div>
                                <div className='segunda'> 
                                    <p className='text-md-start text-center m-0 fw-light'>{objeto.descripcion}</p>
                                </div>
                            </div>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Quarters;
