import styles from './Etapa1.module.css'
//import '@knadh/oat/oat.min.css';
//import '@knadh/oat/oat.min.js';
import { useState } from 'react';
import { CButton, CCard } from '@coreui/react'

function ConteudoE1({ pergunta, resposta }) {

   return (
      <>
         <header>
            <h3><b>{pergunta}</b></h3>
         </header>
         <p>{resposta}</p>
      </>
   );
}

function Etapa1() {

   const p = "Quais são as desvantagens de implementar um inline event?"
   const res = "Inline events não são reutilizaveis, podem ser difíceis de ler e são recriados sempre que o componente é renderizado novamente"

   const [isVisible, setIsVisible] = useState(false);

   const showRes = () => {
      setIsVisible(true);
   };

   return (
      <div>
         <CCard className='card'>
            <ConteudoE1 pergunta={p} resposta={isVisible ? res : ''} />
            <div className={styles.footerBtns} >
               <CButton color="primary" className='rounded-0' variant='outline' onClick={() => setIsVisible(true)}>
                  Revelar resposta por inline event
               </CButton>
               <CButton color="primary" className='rounded-0' variant='outline' onClick={showRes} > Revelar resposta por função</CButton>
               <CButton color="secondary" className='rounded-0' onClick={() => setIsVisible(false)}>Esconder</CButton>

            </div>
         </CCard >
      </div >
   );
}


export default Etapa1;