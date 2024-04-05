

import React, { useState } from 'react'


const LoginPage = () => {

  const [formHeader, setFormHeader] =useState('SignUp')
  const [formType, setFormType] = useState('SignUp')
  const [message, setMessage] = useState('already an existing user!')

  const changeFormHeader =()=>{
    if(formHeader=='SignUp') setFormHeader('SignIn')
    if(formType=='SignIn') setFormHeader('SignUp')
  }

  const changeFormtype =()=>{
    if(formType=='SignUp') setFormType('SignIn')
    if(formType=='SignIn') setFormType('SignUp')
  }

  const changeMessage=()=>{
    if(message=='already an existing user!') setMessage('create a new account!')
    if(message=='create a new account!') setMessage('already an existing user!')
  }

  return (
    <div>
      <img src='https://i.pinimg.com/736x/73/5d/0b/735d0b694df06cd13b94de1e8e7c3583.jpg' className='left-[25%] top-[20%] absolute '></img>

      <section className='w-3/12 mx-auto shadow-lg shadow-gray-600 bg-gray-400 opacity-80 border rounded-2xl absolute left-[37%] top-[25%]'>
          <section className='p-3 text-3xl text-bold text-center font-semibold text-blue-900'>{formHeader}</section>

        <div className='p-2'>
          {
          formType=='SignUp'?
          <section className='my-2'>
            <input className='w-[20rem] px-3 h-12 mx-7 border rounded-3xl outline-none text-bold font-semibold text-gray-600' type='text' placeholder='name'>
            </input>
          </section>
          : <section></section>
          }

          <section className='my-2'>
            <input className='w-[20rem] px-3 h-12 mx-7 border rounded-3xl outline-none' type='email' placeholder='email'>
            </input>
          </section>

          <section className='my-2'>
            <input className='w-[20rem] px-3 h-12 mx-7 border rounded-3xl outline-none' type='password' placeholder='password'>
            </input>
          </section>
        </div>
        
        <div className='mx-8 rounded-3xl bg-gray-300'>
          <button className='h-10 w-full'>{formType}</button>
        </div>

        <section className='px-8 py-2 text-sm text-bold font-semibold cursor-pointer text-blue-800'
          onClick={()=>{
            changeFormHeader()
            changeFormtype()
            changeMessage()
          }}
        >{message}</section>

      </section>
    </div>
  )
}

export default LoginPage