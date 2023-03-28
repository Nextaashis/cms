import Header from '../component/Header';
import Footer from '../component/Footer';

export default function Layout({children}){
    return(
        <>
          <div className="container">
                <div className="row">
          <Header />
              {children}
          <Footer />
          </div>
          </div>
        </>
    )
}