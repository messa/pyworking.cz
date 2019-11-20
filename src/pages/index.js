import React from 'react'
import Layout from '../components/Layout'
import WorkshopsInfo from '../components/indexPage/WorkshopsInfo'
import SessionsInfo from '../components/indexPage/SessionsInfo'

function IndexPage() {
  return (
    <Layout>
      <div className="container">

        <h1 className="site-title" style={{ textAlign: 'center', marginTop: 80 }}>
          <span style={{ color: '#3776ab' }}>Py</span><span style={{ color: '#eb0' }}>Working</span>
        </h1>

        <h2 className='site-lead-text' style={{ maxWidth: 600, textAlign: 'center', margin: '24px auto', lineHeight: 1.6 }}>
          Pyworkingy jsou setkání Pythonistů začátečníků, kteří se chtějí učit nové věci nebo se zdokonalovat v&nbsp;základech.
          Pořádáme tématické celodenní <b>Workshopy</b> s&nbsp;připravenou výukou, ale také večerní <b>Sessions</b> pro samostudium za dozoru koučů.
        </h2>

        <div className='row'>
          <div className='col-md-6'>
            <WorkshopsInfo />
          </div>
          <div className='col-md-6'>
            <SessionsInfo />
          </div>
        </div>


       </div>
    </Layout>
  )
}

export default IndexPage
