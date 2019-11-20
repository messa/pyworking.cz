import React from 'react'
// import MailChimpSignUpForm from '../MailChimpSignUpForm'
import WorkshopList from './WorkshopList'

function WorkshopsInfo() {
  return (
    <div>
      <h2 className='ws-title'>Workshops</h2>

      <p>
        <strong>PyWorking workshopy</strong> jsou zhruba jednou měsíčně pořádané celodenní workshopy pro pokročilé začátečníky
        v&nbsp;programovacím jazyce <a href="https://python.cz/">Python</a> a příbuzných technologiích.
        Každý workshop je na nějaké téma z&nbsp;praxe, dopoledne je přednáška a odpoledne samostatná práce pod vedením zkušených koučů.
      </p>

      {/*
        <MailChimpSignUpForm />
      */}

      <h3 className='event-list-title'>Proběhlé workshopy</h3>

      <WorkshopList />

      <p>
        <span className='event-title'>
          <a href='/workshops/20191116_Prace_s_XLSX_tabulkami'>Práce s XLSX tabulkami</a>
        </span>
        <span className='event-date'>
          <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
          Sobota 16. listopadu 2019
        </span>
        <span className='event-location'>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          Brno
        </span>
      </p>

      <h2>Odkazy &ndash; workshopy</h2>

      <div className="links">
        <p>
          <a href="https://www.facebook.com/groups/PyWorkingPraha/">
            <img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-facebook.png" alt="FB" style={{ height: '1.2em', marginBottom: 4 }} />
            &nbsp;PyWorking Praha
          </a>
        </p>
        <p>
          <a href="https://github.com/pyvec/pyworking-materials">
            <img src="/static/icons/github.png" alt="Github" style={{ height: '1.1rem', marginBottom: 2 }} />
            pyworking-materials
          </a>
        </p>
        <p>
          <a href="https://python.cz/">
            <img src="https://python.cz/static/images/logo-plain.png" alt="" style={{ height: '1.1rem', marginBottom: 2 }} />
            Python.cz
          </a>
        </p>
        <p>
          <a href="/workshops.ics">iCal export</a>
        </p>
      </div>

      <h2>Kontakt &ndash; workshopy</h2>

      <p>Organizátoři Praha:</p>

      <ul>
      <li>Radka Planková</li>
      <li>Eliška Doktorová</li>
      </ul>

      <p>Organizátoři Brno:</p>

      <ul>
      <li>Anežka Müller</li>
      </ul>

      <p>Pište na <a href="mailto:info@pyworking.cz">info@pyworking.cz</a></p>

    </div>
  )
}

export default WorkshopsInfo
