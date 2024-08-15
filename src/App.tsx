import  Dialog  from './components/dialog';
import Loader from './components/index';

export default function App() {
  return (
    <div className="container">
      <div className="text-container">
        <span>R</span>
        <span>U</span>
        <span>X</span>
        <span>SH</span>
        <span>O</span>
        <span>N</span>
        <span>A</span>
      </div>
      <div className="letter">
      <Dialog />

      </div>
      <Loader />
    </div>
  );
}
