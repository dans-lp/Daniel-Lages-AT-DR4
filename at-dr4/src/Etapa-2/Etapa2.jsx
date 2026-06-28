//import styles from './Etapa2.module.css'
import { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCard, CDropdown, CDropdownItemPlain, CDropdownMenu, CDropdownToggle } from '@coreui/react'

function Etapa2() {

   const [admin, setAdmin] = useState(false);


   return (
      <>
         <CCard>
            <h3><b>Status Usúario</b></h3>
            <label for='admin'>
               <input id='admin' name='admin' type="checkbox"
                  onChange={e => setAdmin(e.target.checked)}
               /> Administrador
            </label>
            {admin ?
               <p>O usuários atual é Administrador</p>
               :
               <p>O usuário atual é Colaborador</p>
            }
         </CCard>

         <CCard>
            <h3><b>100 Países do Mundo</b></h3>

            <CDropdown>
               <CDropdownToggle className='rounded-0' color="dark" variant='outline'>Dropdown button</CDropdownToggle>
               <CDropdownMenu>
                  <CDropdownItemPlain>Action</CDropdownItemPlain>
                  <CDropdownItemPlain>Another action</CDropdownItemPlain>
                  <CDropdownItemPlain>Something else here</CDropdownItemPlain>
               </CDropdownMenu>
            </CDropdown>
         </CCard>

         <CCard>
            <h3><b>100 Produtos Faker</b></h3>

            <CDropdown>
               <CDropdownToggle className='rounded-0' color='dark' variant='outline'>Dropdown button</CDropdownToggle>
               <CDropdownMenu>
                  <CDropdownItemPlain>Action</CDropdownItemPlain>
                  <CDropdownItemPlain>Another action</CDropdownItemPlain>
                  <CDropdownItemPlain>Something else here</CDropdownItemPlain>
               </CDropdownMenu>
            </CDropdown>
         </CCard>


         <CCard>
            <h3><b>Pratos de Restaurante</b></h3>

            <CDropdown>
               <CDropdownToggle className='rounded-0' color="dark" variant='outline'>Dropdown button</CDropdownToggle>
               <CDropdownMenu>
                  <CDropdownItemPlain>Action</CDropdownItemPlain>
                  <CDropdownItemPlain>Another action</CDropdownItemPlain>
                  <CDropdownItemPlain>Something else here</CDropdownItemPlain>
               </CDropdownMenu>
            </CDropdown>
         </CCard>
      </>
   );
}

/*
rc_live_f49e2fb8e5904925acdd4323005dc7eb

const response = await fetch(
  'https://api.restcountries.com/countries/v5?q=canada',
  { headers: { 'Authorization': 'Bearer rc_live_f49e2fb8e5904925acdd4323005dc7eb' } }
);
const data = await response.json();

*/

// #f4f4f5

export default Etapa2;