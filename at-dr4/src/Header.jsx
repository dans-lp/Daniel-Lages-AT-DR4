import { CPagination, CPaginationItem } from '@coreui/react';
import { Link } from 'react-router';

function Header() {

   return (
      <div style={{ marginBottom: "50px" }}>
         <h1>Daniel Lages - AT - DR4</h1>
         <CPagination align='center'>
            <CPaginationItem><Link to="/etapa1" style={{ textDecoration: 'none' }} >Etapa 1 </Link></CPaginationItem>
            <CPaginationItem><Link to="/etapa2" style={{ textDecoration: 'none' }} >Etapa 2</Link></CPaginationItem>
            <CPaginationItem><Link to="/" style={{ textDecoration: 'none' }}>Etapa 3</Link></CPaginationItem>
            <CPaginationItem><Link to="/" style={{ textDecoration: 'none' }}>Etapa 4</Link></CPaginationItem>
         </CPagination>
      </div>
   );
}

export default Header;