//import styles from './Etapa2.module.css'
import { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCard, CDropdown, CDropdownItemPlain, CDropdownMenu, CDropdownToggle } from '@coreui/react'
import { useEffect } from 'react';

function SetAdminUser() {
   const [admin, setAdmin] = useState(false);

   return (
      <>
         <CCard>
            <h5><b>Status Usúario</b></h5>
            <label htmlFor='admin'>
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
      </>
   );
}


function CountrisList() {

   const [countries, setCountries] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchCountries = async () => {
         try {
            const response = await fetch(
               'https://api.restcountries.com/countries/v5?limit=100&pretty=1',
               { headers: { 'Authorization': 'Bearer rc_live_cb82df6b452d4519a4f23d3e6de9597e' } }
            );
            if (!response.ok) {
               console.error('Error fetching data:', error);
            }
            const responseJson = await response.json();
            const countriesArray = responseJson.data.objects;
            setCountries(countriesArray);
         } catch (err) {
            console.error('Error fetching data:', err);
         } finally {
            setLoading(false);
         }
      };

      fetchCountries();
   }, []);

   return (
      <>
         <CCard>
            <h5><b>100 Países do Mundo</b></h5>
            <CDropdown>
               <CDropdownToggle className='rounded-0' color='dark' variant='outline'>Dropdown button</CDropdownToggle>
               <CDropdownMenu>
                  <CDropdownItemPlain>
                     <div>
                        <ul>
                           {countries.map((country) => (
                              <li key={country.uuid}>
                                 <strong>{country.names.common}</strong>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </CDropdownItemPlain>
               </CDropdownMenu>
            </CDropdown>
         </CCard>
      </>
   );
}



function Etapa2() {
   return (
      <>
         <SetAdminUser />
         <CountrisList />
         <CCard>
            <h5><b>100 Produtos Faker</b></h5>

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
            <h5><b>Pratos de Restaurante</b></h5>

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

export default Etapa2;