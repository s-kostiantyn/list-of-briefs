import React from 'react';
import type { Brief as BriefType } from '../../types/brief';
import { Brief } from '../Brief/Brief';

type Props = {
    briefList: BriefType[];
}

export const BriefList: React.FC<Props> = ({ briefList }) => {
    return (
        <ul className='list'>
            {briefList.map(brief => (
                <Brief key={brief.id} brief={brief} />
            ))}
        </ul>
    );
}
