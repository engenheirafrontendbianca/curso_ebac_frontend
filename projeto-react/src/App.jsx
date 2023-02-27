import React, { useState } from 'react';
import styles from './formulario.module.css';

const IMC_CLASSES = [
  { range: { min: 0, max: 18.4 }, label: 'Abaixo do peso' },
  { range: { min: 18.5, max: 24.9 }, label: 'Peso normal' },
  { range: { min: 25, max: 29.9 }, label: 'Sobrepeso' },
  { range: { min: 30, max: 34.9 }, label: 'Obesidade grau 1' },
  { range: { min: 35, max: 39.9 }, label: 'Obesidade grau 2' },
  { range: { min: 40, max: Infinity }, label: 'Obesidade grau 3' },
];

function calculateIMC(height, weight) {
  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  return bmi.toFixed(1);
}

function getClassification(bmi) {
  for (const cls of IMC_CLASSES) {
    if (bmi >= cls.range.min && bmi <= cls.range.max) {
      return cls.label;
    }
  }
  return '';
}

function IMCCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [classification, setClassification] = useState('');

  function handleHeightChange(event) {
    setHeight(event.target.value);
  }

  function handleWeightChange(event) {
    setWeight(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const bmi = calculateIMC(height, weight);
    setBMI(bmi);
    setClassification(getClassification(bmi));
  }

  return (
    <header className={styles.header}>
     <div>
      <h1 className={styles.title}>Calculadora de IMC</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="height">Altura (cm): </label>
          <input type="number" id="height" value={height} onChange={handleHeightChange} required />
        </div>
        <div>
          <label htmlFor="weight">Peso (kg): </label>
          <input type="number" id="weight" value={weight} onChange={handleWeightChange} required />
        </div>
        <button className={styles.button} type="submit">Calcular IMC</button>
      </form>
      {bmi && <p>Seu IMC é {bmi}.</p>}
      {classification && <p>Sua classificação é {classification}.</p>}
    </div>
    </header>
  );
}

export default IMCCalculator;