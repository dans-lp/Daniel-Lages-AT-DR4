import styles from './Etapa1.module.css'
import '@knadh/oat/oat.min.css';
import '@knadh/oat/oat.min.js';
import { useState } from 'react';

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
         <article class="card">
            <ConteudoE1 pergunta={p} resposta={isVisible ? res : ''} />
            <div className={styles.footerBtns} >
               <button data-variant="secondary" onClick={() => setIsVisible(true)}>
                  Revelar resposta por inline event
               </button>
               <button data-variant="secondary" onClick={showRes} > Revelar resposta por função</button>
               <button onClick={() => setIsVisible(false)}>Esconder</button>

            </div>
         </article >
      </div >
   );
}


export default Etapa1;