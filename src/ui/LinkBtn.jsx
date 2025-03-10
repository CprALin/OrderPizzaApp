import React from 'react'
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function LinkBtn({children , to}) {
  const navigate = useNavigate();
  const className = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';


  if(to === '-1')
  {
    return <button onClick={() => navigate(-1)} className={className}>{children}</button>
  }

  return (
    <Link to="/menu" className={className}>{children}</Link>
  )
}
