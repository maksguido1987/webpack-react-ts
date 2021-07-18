import './styles.scss';
import IMAGE from './assets/react-logo.png';
import IMAGE2 from './assets/3c74b3bcc57b446c25b6.svg';

export const App = () => {
  return (
    <>
      <h1>
        React TypeScript Webpack Started Template - {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img src={IMAGE} alt='react-logo' width='300' height='200' />
      <img src={IMAGE2} alt='react-logo' width='300' height='200' />
    </>
  );
};
