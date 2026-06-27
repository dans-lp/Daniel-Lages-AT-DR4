import styles from './InProgress.module.css'


function InProgress() {

   return (
      <div>
         <h1>PAGINA DE PLACEHOLDER</h1>

         <button>Primary</button>
         <button data-variant="secondary">Secondary</button>
         <button data-variant="danger">Danger</button>
         <button class="outline">Outline</button>
         <button data-variant="danger" class="outline">Danger</button>
         <button class="ghost">Ghost</button>
         <button disabled>Disabled</button>

         <hr />
         <button className={styles.viteBtn}>Botão default Vite teste</button>

      </div>
   );
}

export default InProgress;

