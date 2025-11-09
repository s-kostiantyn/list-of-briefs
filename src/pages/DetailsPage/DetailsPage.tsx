import React from 'react';
import './DetailsPage.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import type { Brief } from '../../types/brief';
import { Calculator } from '../../modules/Calculator';

function endsWithXNumber(str: string): boolean {
  return /x\d+$/.test(str);
}


export const DetailsPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { brief } = location.state as { brief: Brief };

    const isCalculatorVisible = endsWithXNumber(brief.name);

    return (
        <div className="detalis">
            <div className="container">
                <div className="details__button">
                    <button className='go-back' onClick={() => navigate(-1)}>go back</button>
                </div>

                <div className="details__info">
                    <h2 className='details__name'>{brief.name}</h2>

                    <ul className="details__list">
                        <li className="details__item">Buckets: {brief.buckets}</li>
                        <li className="details__item">Yellow keychain: {brief.yellowKeychain ? 'yes' : 'no'}</li>
                        <li className="details__item">Type of storage: {brief.typeOfStorage}</li>
                        <li className="details__item">Water: {brief.water}</li>
                        <li className="details__item">Type of bucket: {brief.typeOfBucket}{typeof brief.typeOfBucket === 'number' && isFinite(brief.typeOfBucket) ? 'L' : ''}</li>
                        <li className="details__item">Bouquets: x{brief.bouquets}</li>
                        <li className="details__item">Additional info: {!brief.addInfo && '-'}</li>
                    </ul>
                </div>

                <div className='line'></div>

                {!isCalculatorVisible && <Calculator brief={brief} />}
            </div>
        </div>
    );
}