import React, { useState } from "react";
import RepoModal from "./repoModal";
import "./css/card.css";

interface CardProps {
  title: string;
  description: string;
  url: string;
  language: string;
  stars: number;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  url,
  language,
  stars,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="cardContainer">
      <button className="card" onClick={toggleModal}>
        <h1 className="previewHeader">{title}</h1>
        <p>{description ? description : "Sorry, but no description was provided for this repository"}</p>
      </button>
      {isModalOpen && <RepoModal title={title} description={description} url={url} language={language} stars={stars} show={isModalOpen} handleClose={toggleModal} />}
    </div>
  );
};

export default Card;
