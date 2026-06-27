import { Link } from 'react-router';

function Header() {

   return (
      <div style={{ marginBottom: "50px" }}>
         <h1>Daniel Lages - AT - DR4</h1>
         <nav aria-label="Pagination">
            <menu class="buttons">
               <li><a class="button outline small"><Link to="/etapa1">Etapa 1</Link></a></li>
               <li><a class="button outline small"><Link to="/etapa2">Etapa 2</Link></a></li>
               <li><a class="button outline small"><Link to="/">Etapa 3</Link></a></li>
            </menu>
         </nav >
      </div>
   );
}

export default Header;