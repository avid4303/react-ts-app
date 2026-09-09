import { Link } from 'react-router-dom';

export default function Blog(){
  return(
    <div className="text-white no-underline font-semibold">
      <Link to="/">Blog</Link>
    </div>
  );
}