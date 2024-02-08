import styles from './calculadora.module.css'

import React, { useState } from 'react';

function calculadora() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(null);

    const calculaImc = () => {
        const calcImc = peso / (altura * altura);

        let mensagem = '';

        if (calcImc < 18.5) {
            mensagem = 'Baixo Peso';
        } else if (calcImc > 18.5 && calcImc < 24.9) {
            mensagem = 'Peso Adequado';
        } else if (calcImc >= 25 && calcImc < 29.9) {
            mensagem = 'Sobrepeso';
        } else if (calcImc > 30 && calcImc < 34.9) {
            mensagem = 'Obesidade Grau I';
        } else if (calcImc > 35 && calcImc <39.9) {
            mensagem = 'Obesidade Grau II';
        } else {
            mensagem = 'Obesidade Grau III';
        }
        
        setResultado({calcImc: calcImc.toFixed(2), mensagem});
    };

    return (
        <div className={styles.container}>
            <h1>Calculadora de IMC</h1>
            <h3>Índice de Massa Corporal</h3>
            <div className={styles.inputs}>
                <label>Peso (kg):</label>
                <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
            </div>
            <div>
                <label>Altura (m):</label>
                <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                />
            </div>
            <button onClick={calculaImc}>Calcular</button>
            <div className={styles.resultado}>
                {resultado && (
                <p>Seu IMC é: {resultado.calcImc} - {resultado.mensagem}
                </p>
                )}
            </div>
        </div>
    );
}

export default calculadora;

