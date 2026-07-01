
/* 
   A questão 10 pede que os campos nome e email sejam obrigatórios.
   
   A validação dos formulários considera que 'espaço em branco' 
   é um preenchimento válido. 

   Também considerei que o campo telefone seja obrigatoriamente preenchido
*/

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
   CCard,
   CCol,
   CButton,
   CForm,
   CFormInput,
   CFormLabel,
   CInputGroup,
   CInputGroupText,
} from '@coreui/react'

function CommonForm() {
   const [validated, setValidated] = useState(false);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const [submittedData, setSubmittedData] = useState(null);

   const handleSubmit = (event) => {
      event.preventDefault();

      const form = event.currentTarget;
      if (form.checkValidity() === false) {
         event.stopPropagation();
      } else {
         const formData = {
            name: name,
            email: email,
            phoneNumber: phoneNumber
         };

         console.log("Form submitted successfully with data:", formData);
         setSubmittedData(formData);
      }

      setValidated(true);
   };

   return (
      <>
         <CCard className="p-3">
            <h5><b>Fomulário Simples</b></h5>
            <div style={{ marginTop: '50px' }}>
               <CForm className="row g-3" noValidate validated={validated} onSubmit={handleSubmit}>

                  <CCol md={4}>
                     <CFormInput
                        type="text"
                        label="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        feedbackInvalid="Nome não pode ser vazio"
                        required
                     />
                  </CCol>

                  <CCol md={4}>
                     <CFormInput
                        type="email"
                        label="Email"
                        value={email}
                        placeholder='user@email.com'
                        onChange={(e) => setEmail(e.target.value)}
                        feedbackInvalid="Email inválido"
                        required
                     />
                  </CCol>

                  <CCol md={4}>
                     <CFormLabel>Telefone</CFormLabel>
                     <CInputGroup className="has-validation">
                        <CInputGroupText>+55 (21)</CInputGroupText>
                        <CFormInput
                           type="text"
                           value={phoneNumber}
                           placeholder='999999999'
                           onChange={(e) => setPhoneNumber(e.target.value)}
                           feedbackInvalid="Telefone inválido. Deve conter 9 valores numéricos"
                           pattern='\d{9}'
                           required
                        />
                     </CInputGroup>
                  </CCol>

                  <CCol>
                     <CButton color="primary" type="submit">
                        Submit form
                     </CButton>
                  </CCol>
               </CForm>
            </div>
            {submittedData && (
               <div style={{ background: '#f5f5f5', padding: '1rem', marginTop: '1rem' }}>
                  <b>Dados Submetidos:</b><br />
                  {JSON.stringify(submittedData, null, 2)}
               </div>
            )}
         </CCard>

      </>
   );
}

function HooksForm() {
   const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
         name: '',
         email: '',
         phoneNumber: ''
      }
   });

   const [submittedData, setSubmittedData] = useState(null);
   const onSubmit = (data) => {
      setSubmittedData(data);
   };

   return (
      <>
         <CCard className="p-3">
            <h5><b>Fomulário com React Hook Form</b></h5>
            <div style={{ marginTop: '50px' }}>
               <CForm className="row g-3" onSubmit={handleSubmit(onSubmit)}>

                  <CCol md={4}>
                     <CFormInput
                        type="text"
                        label="Nome"
                        invalid={!!errors.name}
                        feedbackInvalid={errors.name?.message}
                        {...register('name', {
                           required: "Nome deve ser preenchido"
                        })}
                     />
                  </CCol>

                  <CCol md={4}>
                     <CFormInput
                        type="email"
                        label="Email"
                        placeholder='user@email.com'
                        invalid={!!errors.email}
                        feedbackInvalid={errors.email?.message}
                        {...register('email', {
                           required: "Email deve ser preenchido",
                           pattern: {
                              value: /\S+@\S+/,
                              message: "Email em formato inválido"
                           }
                        })}
                     />
                  </CCol>

                  <CCol md={4}>
                     <CFormLabel>Telefone</CFormLabel>
                     <CInputGroup className="has-validation">
                        <CInputGroupText>+55 (21)</CInputGroupText>
                        <CFormInput
                           type="text"
                           placeholder='999999999'
                           invalid={!!errors.phoneNumber}
                           feedbackInvalid={errors.phoneNumber?.message}
                           {...register('phoneNumber', {
                              required: "Telefone deve ser preenchido",
                              pattern: {
                                 value: /^\d{9}$/,
                                 message: "Telefone inválido. Deve conter 9 valores numéricos"
                              }
                           })}
                        />
                     </CInputGroup>
                  </CCol>

                  <CCol>
                     <CButton color="primary" type="submit">
                        Submit form
                     </CButton>
                  </CCol>
               </CForm>
            </div>
            {submittedData && (
               <div style={{ background: '#f5f5f5', padding: '1rem', marginTop: '1rem' }}>
                  <b>Dados Submetidos:</b><br />
                  {JSON.stringify(submittedData, null, 2)}
               </div>
            )}
         </CCard>
      </>
   );
}

function Etapa3() {
   return (
      <div>
         <CommonForm />
         <HooksForm />
      </div >
   );
}

export default Etapa3;
