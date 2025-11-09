import React from 'react';
import type { Brief as BriefType } from '../../types/brief';
import { Link } from 'react-router-dom';

type Props = {
    brief: BriefType;
}

export const Brief: React.FC<Props> = ({ brief }) => {
    return (
        <li className="brief">
            <Link className='brief__link' state={{ brief }} to={`/details-${brief.id}`}>{brief.name}</Link>
        </li>
    );
}