import './index.css';
import Header from './components/Header';
import Certificate_details from './components/Certificate_details';
import Signupform from './components/Signupform';
import JoinComponent from './components/JoinComponent';
import ProvideCertificate from './components/ProvideCertificate';
import Footer from './components/footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="bg-gray flex-grow pl-2">
        <Certificate_details />
        <Signupform />
        <JoinComponent />
        <ProvideCertificate />
        <Footer />
      </main>
    </div>
  );
}

export default App;
