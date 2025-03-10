import { useRouteError } from 'react-router-dom';
import LinkBtn from './LinkBtn';

function NotFound() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkBtn to="-1">&larr; Go back</LinkBtn>
    </div>
  );
}

export default NotFound;
