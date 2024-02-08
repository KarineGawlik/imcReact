import styles from './cabecalho.module.css'
import LogoSaude from './imagens/v987-18a.jpg'

function Cabecalho() {


    return (
        <div className={styles.container}>
            <img src={LogoSaude} />
            <p className={styles.principal}><span>Calculadora IMC: calcule o seu Índice de Massa Corporal.</span> O cálculo faz a relação entre o peso e a altura de uma pessoa e é um importante parâmetro de saúde, entenda:</p>
        </div>        
    )}

export default Cabecalho;