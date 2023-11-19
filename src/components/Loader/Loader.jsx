import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <TailSpin
      height='80'
      width='80'
      color='#fc842d'
      ariaLabel='tail-spin-loading'
      radius='1'
      wrapperStyle={{
        position: 'fixed',
        top: '65%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass=''
      visible={true}
    />
  )
};

export default Loader;