import React from "react";
// import { useForm } from "react-hook-form"


export default function Form() {
   console.log(React.version );
   

   // const {register, handleSubmit} = useForm({})
   return (
      <form>

         <div className="flex items-center mb-3 pb-1">
            <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
            <h1 className="text-5xl font-bold font-mono mb-0">Logo</h1>
         </div>

         <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5>

         <div className="flex flex-col items-start justify-center gap-y-2 mb-4">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control form-control-lg" />
         </div>

         <div className="flex flex-col items-start justify-center gap-y-2 mb-4">
            <label className="form-label">Password</label>
            <input type="password" className="form-control form-control-lg" />
         </div>

         <div className="pt-1 mb-4">
            <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
         </div>

         <a className="small text-muted" href="#!">Forgot password?</a>
         <p className="mb-5 pb-lg-2 text-[#393f81]">Don't have an account?
            <a href="#!" className="text-[#393f81]">Register here</a></p>
         <a href="#!" className="small text-muted">Terms of use.</a>
         <a href="#!" className="small text-muted">Privacy policy</a>
      </form>
   )
}
