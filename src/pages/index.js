import Title from '../component/title';



export default function Home({data}) {
    
  return (
    <> 
     <Title title="Home" />
      <div className="conatainer">
        <div className="row">
          <div className="col-6 offset-2">
            <table className="table">
                  <thead>
                     <tr>
                       <th scope="col">ID</th>
                       <th scope="col">Name</th>
                       <th scope="col">Email</th>
                       <th scope="col">phone</th>
                     </tr>
                   </thead>
               <tbody>
                    {data.map((post, i)=>{
                      return(
                        <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{post.name}</td>
                        <td>{post.email}</td>
                        <td>{post.phone}</td>
                      </tr>
                      )
                      })
                    }
                 </tbody>
              </table>
          

              </div> 
        </div>    
      </div>  
    </>
  )
}



export async function getStaticProps(){
  const responce = await fetch('http://localhost:3001/api/all');
   const data = await responce.json();
   return{
    props:{
      data
    }
   }

}
