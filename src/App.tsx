import './index.css';
import IMAGE from './assets/react-logo.png';

export const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500">Привет мир!</h1>
      <img src={IMAGE} alt="react-logo" width="300" height="200" />
    </>
  );
};

export default App;
