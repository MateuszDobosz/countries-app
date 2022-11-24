import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

const DetailsRoute: FunctionComponent = () => {
  const { id } = useParams();
  return <div>Hello details {id}</div>;
};

export default DetailsRoute;
