import React, { useState } from 'react';

import briefsFromServer from '../../api/briefs.json';
import type { Brief } from '../../types/brief';
import { BriefList } from '../../modules/BriefList';

function getPreparedData(briefs: Brief[], { filter }: { filter: string }) {
  let preparedBriefs = briefs;
  const normilizeText = (text: string) => text.toLowerCase().trim();

  if (filter) {
    preparedBriefs = preparedBriefs.filter(brief => normilizeText(brief.name).includes(normilizeText(filter)));
  }

  return preparedBriefs;
};

export const ListPage: React.FC = () => {
    const rawData = briefsFromServer as Brief[];
    const [filter, setFilter] = useState('');

    const preparedData = getPreparedData(rawData, { filter });

    return (
        <div className="container">
          <input className='search' type="search" placeholder='Type here...' onChange={e => setFilter(e.target.value)} value={filter} />

          <BriefList briefList={preparedData} />
        </div>
    );
}