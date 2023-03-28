import Link from "next/link";
import { useEffect, useState } from "react";


export default function Category() {
    const [user, setUser] = useState("");
  useEffect(() => {
    const  token = JSON.parse(localStorage.getItem('user'))
      console.log(user);
      setUser(token);
  }, [user])




  return (
    <>
      <div className="col-12 mt-1">
        <ul>
          <li>
            {" "}
            <Link href="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/news"> News</Link>{" "}
          </li>

          { !user  && ( <>
          <li className="offset-md-6">
            {" "}
            <Link href="/login">Login</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/sigin">Sigin</Link>{" "}
            </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}
