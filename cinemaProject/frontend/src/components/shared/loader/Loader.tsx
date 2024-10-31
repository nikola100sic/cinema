import React from 'react';
import { ClipLoader } from 'react-spinners';

interface LoaderProps {
  loading: boolean;
}

const Loader = ({ loading }: LoaderProps) => {
  return (
    <center style={{ marginTop: '30vh' }}>
      <ClipLoader size={40} loading={loading}></ClipLoader>
    </center>
  );
};

export default Loader;
