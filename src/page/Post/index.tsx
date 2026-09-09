import { Outlet } from 'react-router-dom';

import Header from '../../compornents/header/Header';

export default function Post(){
  return(
    <main>
      <Header />
      <div className="max-w-[960px] mx-auto px-4 py-6">
        <Outlet />
      </div>
    </main>
  )
}