import React from 'react'

function SessionsInfo() {
  return (
    <div>
      <h2 className='ws-title'>Sessions</h2>

      <p>
        <strong>PyWorking sessions</strong> jsou jednou za dva týdny &ndash; každé druhé pondělí &ndash;
        pořádaná setkání začátečníků a pokročilých začátečníků.
        Můžete na nich:
      </p>
      <ul className='relaxed'>
        <li>
            konzultovat domácí úkoly z&nbsp;kurzu
            <a href='http://naucse.python.cz/'>naučse.python.cz</a>,
            <a href='http://www.pyladies.cz/'>Pyladies</a>
            nebo jakéhokoli jiného kurzu o Pythonu a příbuzných tématech
        </li>
        <li>
            pracovat na open-source anebo komunitních projektech
        </li>
      </ul>

      <h3 className='event-list-title'>Příští setkání</h3>

        <p>
            <span className='event-title'>
            <a href='https://www.meetup.com/pyworking/events/266383621/' target="_blank" rel="noopener noreferrer">PyWorking session #91</a>
            </span>
            <span className='event-date'>
            <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
            pondělí 25. listopadu 2019
            </span>
            <span className='event-location'>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            Praha
            </span>
        </p>

        <h3 className='event-list-title'>Místo setkání</h3>

        {/* Akamai logo */}
        <div style={{ float: 'right', marginTop: -20, marginRight: -8 }}>
          <img src='/static/akamai-logo.png' alt='Akamai' style={{ height: 60 }} />
        </div>

        <p>
          Kanceláře Akamai<br />
          Karla Engliše 4, Praha 5
          &nbsp; <a href="https://goo.gl/maps/KvRFT26bY4v" target="_blank" rel="noopener noreferrer">→ Google mapy</a><br />
          5. patro<br />
        </p>

        <p>Zpravidla od 18.00 do 20.00.</p>

        <h2>Odkazy &ndash; sessions</h2>

        <div className="links">
          <p><a href="https://www.facebook.com/groups/PyWorkingPraha/">
          <img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-facebook.png" alt="FB" style={{ height: '1.2em', marginBottom: 4 }} />
          &nbsp;
          PyWorking Praha</a></p>
          <p><a href="https://www.meetup.com/pyladiescz/">
          <img src="/static/icons/meetup_com.png" alt="Meetup.com" style={{ height: '1.3rem', marginBottom: 2, marginLeft: -2 }} />
          PyWorking Sessions - Praha</a></p>
          <p><a href="https://python.cz/">
          <img src="https://python.cz/static/images/logo-plain.png" alt="" style={{ height: '1.1rem', marginBottom: 2 }} />
          Python.cz</a></p>
        </div>

        <h2>Kontakt &ndash; sessions</h2>

        <p>Organizátoři Praha:</p>

        <ul>
          <li>Iva Fingerová</li>
          <li>Petr Messner</li>
        </ul>

        <p>Pište na <a href="mailto:info@pyworking.cz">info@pyworking.cz</a></p>
    </div>
  )
}

export default SessionsInfo
