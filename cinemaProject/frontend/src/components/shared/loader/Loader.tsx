import React from 'react';
import { ClipLoader } from 'react-spinners';

interface LoaderProps {
  loading: boolean;
}

const loader = ({ loading }: LoaderProps) => {
  <div className="loader">
    <ClipLoader loading={loading} size={50} />
  </div>;
};

export default loader;
