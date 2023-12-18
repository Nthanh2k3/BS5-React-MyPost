import React from "react";

function SignupForm() {
  return(
    <div className="pagination justify-content-center" padding="200px" style={{paddingTop: 50, color: 'rgb(11,11,11)', background: 'rgb(248,248,248)', textAlign: 'left'}}>
  <form className="bootstrap-form-with-validation" style={{width: 500, borderTopStyle: 'groove', borderRadius: 20, padding: 10, background: 'var(--bs-pagination-hover-border-color)'}}>
    <h2 className="text-center">Register&nbsp;</h2>
    <div className="form-group mb-3">
      <label className="form-label" htmlFor="text-input" style={{fontFamily: 'Adamina, serif', textAlign: 'left'}}>Your Name:</label>
      <input className="form-control" type="text" id="text-input" name="text-input" style={{borderRadius: 10, padding: 15}} />
      </div>
    <div className="form-group mb-3">
      <label className="form-label" htmlFor="password-input" style={{fontFamily: 'Adamina, serif'}}>
        Your Email
        </label>
        <input className="form-control" type="password" id="password-input" name="password-input" style={{borderRadius: 10}} /></div>
    <div className="form-group mb-3"><label className="form-label" htmlFor="password-input" style={{fontFamily: 'Adamina, serif'}}>Your Password</label><input className="form-control" type="password" id="password-input-1" name="password-input" style={{borderRadius: 10}} /></div>
    <div className="form-group mb-3"><label className="form-label" htmlFor="password-input" style={{fontFamily: 'Adamina, serif'}}>Repeat Your Password</label><input className="form-control" type="password" id="password-input" name="password-input" style={{borderRadius: 10}} /></div>
    <div className="form-group mb-3">
      <div className="form-check"><input className="form-check-input" type="checkbox" name="checkbox-input" id="formCheck-2" /><label className="form-check-label" htmlFor="formCheck-2">Agree with ours term and privacy</label></div>
    </div>
    <div className="form-group mb-3"><button className="btn btn-primary" type="submit" style={{borderRadius: 10}}>Create Account</button></div>
  </form>
</div>

  )
}

export default SignupForm;