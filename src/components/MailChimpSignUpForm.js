import React from 'react'

function MailChimpSignUpForm() {
  return (

    <div id="mc_embed_signup">
      <form action="https://pyladies.us14.list-manage.com/subscribe/post?u=7876931419c06d06b9d0f1600&amp;id=6869b8d331" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <p><strong>Přihlašte se k odběru newsletteru</strong></p>
          <div className="mc-field-group">
            <label for="mce-EMAIL">E-mailová adresa:</label>
            <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
          </div>
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style="display:none"></div>
            <div className="response" id="mce-success-response" style="display:none"></div>
          </div>    {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_7876931419c06d06b9d0f1600_6869b8d331" tabindex="-1" value="" /></div>
          <div className="clear"><input type="submit" className='btn btn-subscribe' value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
        </div>
      </form>
      {/*
      <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
      */}
    </div>
  )
}

export default MailChimpSignUpForm