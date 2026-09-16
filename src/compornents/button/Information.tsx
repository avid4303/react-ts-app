import { Link } from 'react-router-dom';

export default function Information(){
  return(
    <div className="text-white no-underline font-semibold">
      <Link to="/Notice">お問い合わせ</Link>
    </div>
  );
}