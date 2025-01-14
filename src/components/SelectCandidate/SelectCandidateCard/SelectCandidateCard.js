import React from "react";
import './selectCandidateCard.scss'

const CandidateCard = ({ candidate, setCandidateSelected, candidateSelected, isSelected }) => {
  return (
    <div
      className={`selectCandidateCard ${isSelected ? "selectedCandidateCardActive" : ""}`}
      onClick={() => setCandidateSelected(candidate)}
    >
      <img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg" alt="slika" />
      <div className="nameEmail">
        <p>{candidate.name}</p>
        <p>{candidate.email}</p>
      </div>
    </div>
  );
};

export default CandidateCard;
