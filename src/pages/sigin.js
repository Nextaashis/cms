import { useState } from "react";


export default function Sigin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();

  const onSinindata = async (e) => {
    e.preventDefault();

    //console.log(`${name}, ${email}, ${password}, ${phone}`)

     //alert(`${name}, ${email}, ${password}, ${phone}`);
     
      const resp = await fetch('http://localhost:3001/api/user',{
       method: "POST",
       headers:{'Content-Type': 'application/json'},
       body: JSON.stringify({
         name,
         email,
         password,
         phone
       })
      })
      const data = await resp.json();
        console.log(data);
      
        localStorage.setItem('user', JSON.stringify(data.token));  // jwt token store in browaser.....
        

  };

  return (
    <>
      <form>
        <div className="row">
          <div className="col-sm-6 offset-3">
            <div className="input-group mb-3 mt-5">
              <span className="input-group-text">Name</span>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group mb-3 mt-1">
              <span className="input-group-text">Email</span>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
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
            <div className="input-group mb-3 mt-1">
              <span className="input-group-text">Phone</span>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="input-group  offset-2 mb-3 mt-2 p-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => onSinindata(e)}
              >
                Sigin
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
