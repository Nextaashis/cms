import Image from "next/image"

export default function Logo(){
    return(
        <>
         <nav className="navbar navbar-expand-sm mt-3">
              
                <a className="navbar-brand">
                   <Image src="/../public/logo.png"  className="rounded-pill" height="80" width= "120" /> 
                 </a>
                 <h2>News</h2>
              
         </nav>
        </>
    )
}