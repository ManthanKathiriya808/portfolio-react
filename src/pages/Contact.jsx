import React from 'react'
import Layout from '../comonents/layout/Layout'
import Contacts from '../comonents/contact/Contact'

const Contact = () => {
  return (
   <div>
      <Layout>
        <div className=' text-white mx-auto mt-10 pt-10'>

        <Contacts/>
        </div>
      </Layout>
    </div>
  )
}

export default Contact
