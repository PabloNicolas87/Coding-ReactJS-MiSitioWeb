import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next"
import SkillItem from '../SkillItem/SkillItem';
import './MyProjectsItem.css';

function MyProjectsItem({ title, description, imageSrc, deploymentLink, skills }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [t] = useTranslation("global");

  return (
    <>
      <button className="btn-view-primary" onClick={handleShow}>
        {t("myProjects.view")}
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{t("myProjects.descriptionProyect")}</p>
          <br />
          <div className="d-flex justify-content-around flex-column flex-sm-row align-items-center">
            {skills.map((skill, index) => (
              <SkillItem key={index} imageSrc={skill.imageSrc} title={skill.title} />
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-view-secondary" onClick={handleClose}>
            {t("myProjects.close")}
          </button>
          <a onClick={handleClose} className="btn-view-primary" href={deploymentLink} rel="noreferrer" target="_blank">{t("myProjects.deploy")}</a>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyProjectsItem;