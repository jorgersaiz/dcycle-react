import React from 'react';
import './Card.css'

interface Props {
  title: string;
  text: string;
}

const Card: React.FC<Props> = ({ title, text }) => (

    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{ title }</h5>
            <p className="card-text">{ text }</p>
        </div>
    </div>
);

export default Card;
