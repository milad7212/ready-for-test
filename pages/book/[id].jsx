import React from 'react'
import ExplainBook from '../../components/ExplainBook'
import Footer from '../../components/Footer'
import SourceExams from '../../components/SourceExams'
import Navbar from '../../components/ui/Navbar/Navbar'

function BookPage() {
  return (
    <div className="relative min-h-screen bg-gray-200  ">
    <Navbar />
    <div className="min-h-screen">
      <ExplainBook/>
      <SourceExams/>
    </div>
      <Footer/>
  </div>
  )
}

export default BookPage