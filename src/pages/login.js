import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();

    //  alert(`${name}, ${password}`);
  };

  return (
    <>
      <form>
        <div className="row">
          <div className="col-sm-6 offset-3">
            <div className="input-group mb-3 mt-5">
              <span className="input-group-text">Email</span>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group mb-3 mt-1">
              <span className="input-group-text">Password</span>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="input-group  offset-2 mb-3 mt-2 p-2">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => onLogin(e)}
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
