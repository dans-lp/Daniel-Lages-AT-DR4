import styles from './Etapa2.module.css'
import '@knadh/oat'


function Etapa2() {

   return (
      <>
         <article className={styles.footerBtns}>
            <h3><b>Status Usúario</b></h3>
         </article>
         <article className='card' style={{ margin: '20px' }}>
            <h3><b>100 Países do Mundo</b></h3>
         </article>
         <article className='card' style={{ margin: '20px' }}>
            <h3><b>100 Produtos Faker</b></h3>
         </article>
         <article className='card' style={{ margin: '20px' }}>
            <h3><b>Pratos de Restaurante</b></h3>
         </article>
      </>
   );
}

export default Etapa2;