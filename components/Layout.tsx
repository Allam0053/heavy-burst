import Footer from './Footer'
import Navbar from './Navbar'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="content px-2">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
  
export default Layout;