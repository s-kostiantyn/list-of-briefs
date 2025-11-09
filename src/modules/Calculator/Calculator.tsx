import React, { useState } from 'react';
import './Calculator.scss';
import type { Brief } from '../../types/brief';

function getQuantity(value: number, brief: Brief): string {
    const  quantityOfBuckets = value / brief.bouquets;
    const  quantityOfCars = quantityOfBuckets / brief.buckets;
    const quantityRest = Math.trunc(quantityOfCars);

    const result = `${quantityRest}K. ${Math.ceil(quantityOfBuckets - quantityRest * brief.buckets)}R.`
    
    return result;
}

type Props = {
    brief: Brief;
}

export const Calculator: React.FC<Props> = ({ brief }) => {
  const [quantity, setQuantity] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [result, setResult] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      setQuantity(value);

      if (value === '' || Number(value) >= 0) {
        setError(false);
      }
    } else {
      setError(true);
    }
  };

  const handleCalculate = () => {
    if (quantity === '' || Number(quantity) < 0) {
      setError(true);
      return;
    }

    setError(false);
    setResult(getQuantity(+quantity, brief));
  };

  return (
    <div className='calculator'>
      <div className="calculator__inner">
        <p>Enter quantity:</p>
        <input
          type="text"
          name="number"
          value={quantity}
          onChange={handleChange}
          placeholder='Tap here'
          className={error ? 'calculator__input--error' : ''}
        />
      </div>

      {error && <p className='calculator__error'>Invalid value</p>}

      {!error && quantity && <p className='calculator__result'>{result}</p>}

      <button className="calculator__calculate" onClick={handleCalculate}>
        Calculate
      </button>

    </div>
  );
};
