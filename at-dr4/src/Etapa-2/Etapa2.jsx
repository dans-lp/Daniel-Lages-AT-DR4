import { useState, useEffect, useRef } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import {
   CCard,
   CDropdown,
   CDropdownItem,
   CDropdownItemPlain,
   CDropdownMenu,
   CDropdownToggle,
   CFormInput,
   CCardTitle,
   CCardBody,
   CCardText,
   CCardImage
} from '@coreui/react'
import { faker } from '@faker-js/faker';
import { useMemo } from 'react';

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
   const cache = useRef(null);

   useEffect(() => {

      if (cache.current) {
         setCountries(cache.current);
         setLoading(false);
         return;
      }

      const fetchCountries = async () => {
         try {
            const response = await fetch(
               // Capaz que o link não funcione por ter ultrapassado o limite mensal de requests da minha conta.
               //Enquanto desenvolvia a parte 2, o limite já havia passado dos 50%.
               'https://api.restcountries.com/countries/v5?limit=100&pretty=1',
               { headers: { 'Authorization': 'Bearer rc_live_cb82df6b452d4519a4f23d3e6de9597e' } }
            );
            if (!response.ok) {
               throw new Error(`HTTP error! Status: ${response.status}`);
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
                     {loading ? (
                        <p>Carregando...</p>
                     ) : (
                        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                           <ul>
                              {countries.map((country) => (
                                 <li key={country.uuid}>
                                    <strong>{country.names.common}</strong>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     )}
                  </CDropdownItemPlain>
               </CDropdownMenu>
            </CDropdown>
         </CCard>
      </>
   );
}


function FilterFakerProducts() {

   const [search, setSearch] = useState('');

   const fakerProducts = useMemo(
      () => faker.helpers.uniqueArray(faker.commerce.productName, 100)
      , []
   );


   const filtragem = useMemo(() => {
      if (!search) return fakerProducts;

      return fakerProducts.filter((item) =>
         item.toLowerCase().includes(search.toLowerCase())
      );

   }, [search]);


   return (
      <>
         <CCard>
            <h5><b>100 Produtos Faker</b></h5>
            <CFormInput
               type="text"
               placeholder='busca...'
               value={search}
               onChange={(e) => setSearch(e.target.value)}
            />
            <hr />
            <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
               <ol style={{ marginInline: '80px' }} >
                  {filtragem.length > 0 ? (
                     filtragem.map((product, index) => (
                        <li key={index}>
                           <strong>{product}</strong>
                        </li>
                     ))
                  ) : (
                     <p>Produto não encontrado</p>
                  )}
               </ol>
            </div>
         </CCard>
      </>
   );
}

function MealsCategories() {
   const [categories, setCategories] = useState([]);
   const [loading, setLoading] = useState(true);
   const [selectedCategory, setSelectedCategory] = useState(null);

   useEffect(() => {
      const fetchMeals = async () => {
         try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            if (!response.ok) {
               console.error('Error fetching data:', error);
            }

            const responseJson = await response.json();
            const categoriesArray = responseJson.categories;
            setCategories(categoriesArray);
         } catch (err) {
            console.error('Error fetching data:', err);
         } finally {
            setLoading(false);
         }
      }
      fetchMeals();
   }, [])

   const MealCard = ({ meal }) => {

      const title = meal.strCategory;
      const img = meal.strCategoryThumb;
      const description = meal.strCategoryDescription;

      return (
         <>
            <div style={{ display: "flex", justifyContent: "center" }}>
               <CCard className="mb-3 text-start border-dark" textBgColor={'light'} style={{ maxWidth: '540px' }}>
                  <CCardImage orientation="top" src={img} /><hr />
                  <CCardBody>
                     <CCardTitle>{title}</CCardTitle>
                     <CCardText>
                        {description}
                     </CCardText>
                  </CCardBody>
               </CCard>
            </div>
         </>
      );
   };

   return (
      <div>
         <CCard>
            <h5><b>Tipos de Pratos</b></h5>

            <CDropdown>
               <CDropdownToggle className='rounded-0' color='dark' variant='outline'>Dropdown button</CDropdownToggle>
               <CDropdownMenu>
                  {loading ? (
                     <p>Carregando...</p>
                  ) : (
                     <div>
                        <ul>
                           {categories.map((item) => (
                              <li key={item.idCategory}>
                                 <CDropdownItem as={"button"} onClick={() => setSelectedCategory(item)}>
                                    {item.strCategory}
                                 </CDropdownItem>
                              </li>
                           ))}
                        </ul>
                     </div>
                  )}
               </CDropdownMenu>
            </CDropdown>
            <hr />
            {selectedCategory ? (<MealCard meal={selectedCategory} />) : (" ")}
         </CCard>
      </div>
   );
}


function Etapa2() {
   return (
      <>
         <SetAdminUser />
         <CountrisList />
         <FilterFakerProducts />
         <MealsCategories />
      </>
   );
}

export default Etapa2;