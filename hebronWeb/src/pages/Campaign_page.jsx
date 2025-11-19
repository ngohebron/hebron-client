import React from 'react'
import MainLayout from '../layout/MainLayout'

function Campaign_page() {
  return (
    <MainLayout className=" w-full">
             <div className="w-full">
          <img
            src="/campaign/image1.jpg"
            alt="image1"
            className="w-full h-150 object-cover rounded-4xl shadow-md"
          />
        </div>
    </MainLayout>
  )
}

export default Campaign_page
