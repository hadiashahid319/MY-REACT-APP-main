import { useRef } from "react";

function Prac() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value);
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3 col-5 ms-2">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            ref={usernameRef}
            type="text"
            id="username"
            className="form-control"
            required
          />
        </div>

        <div className="row mb-3 col-5 ms-2">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            className="form-control"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary col-5 ms-2"
        >
          Log In
        </button>
      </form>
    </>
  );
}

export default Prac;
