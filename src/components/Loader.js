import { MutatingDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <MutatingDots
      height='100'
      width='100'
      ariaLabel='loading'
      color='blue'
      secondaryColor='orange'
    />
  );
};

export default Loader;
