import { CNav, CNavItem, CNavLink } from '@coreui/react';
import { useLocation } from 'react-router';

function Header() {
   const location = useLocation();
   return (
      <div style={{ marginBottom: "50px" }}>
         <h1>Daniel Lages - AT - DR4</h1>

         <CNav variant='enclosed'>
            <CNavItem>
               <CNavLink href="/etapa1" active={location.pathname === "/etapa1"}>Etapa 1</CNavLink>
            </CNavItem>
            <CNavItem>
               <CNavLink href="/etapa2" active={location.pathname === "/etapa2"}>Etapa 2</CNavLink>
            </CNavItem>
            <CNavItem>
               <CNavLink href="/" active={location.pathname === "/etapa3"}>Etapa 3</CNavLink>
            </CNavItem>
            <CNavItem>
               <CNavLink href="/" active={location.pathname === "/etapa4"}>Etapa 4</CNavLink>
            </CNavItem>
         </CNav>
      </div>
   );
}

export default Header;