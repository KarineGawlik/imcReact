import styles from './artigos.module.css'

function Artigos() {


    return (
        <div className={styles.container}>
            <p className={styles.info}>Veja abaixo um pouco mais sobre o seu resultado:</p>
            <h4>Baixo Peso</h4>
            <p className={styles.info}>É recomendado procurar um médico para avaliação criteriosa do resultado. Pode indicar um estado de consumo do organismo, com poucas reservas e riscos associados.</p>
            <h4>Peso Adequado</h4>
            <p className={styles.info}>Tudo indica que está tudo bem, mas é importante avaliar outros parâmetros da composição corporal, para compreender se estão dentro do recomendado. Algumas pessoas apresentam IMC dentro da normalidade, mas têm circunferência abdominal maior que a recomendada e/ou quantidade de massa gorda acima do ideal.</p>
            <h4>Sobrepeso</h4>
            <p className={styles.info}>O sobrepeso está associado ao risco de doenças como diabetes e hipertensão. Então, atenção! Consulte um médico e reveja hábitos para reverter o quadro. Também é importante avaliar outros parâmetros, como a circunferência abdominal.</p>
            <h4>Obesidade Grau I</h4>
            <p className={styles.info}> É importante buscar orientação médica e nutricional para entender melhor o seu caso, mesmo que os exames (colesterol e glicemia, por exemplo) estejam normais.</p>
            <h4>Obesidade Grau II</h4>
            <p className={styles.info}> Indica um quadro de obesidade mais evoluído em relação à classificação anterior e, mesmo com exames laboratoriais dentro da normalidade, não se deve atrasar a busca por orientação médica e nutricional.</p>
            <h4>Obesidade Grau III</h4>
            <p className={styles.info}>Nesse ponto, a chance de já estarmos diante de outras doenças associadas é mais elevada. É fundamental buscar orientação médica.</p>
        </div>
            
    )}

export default Artigos