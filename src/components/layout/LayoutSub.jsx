import { Outlet } from 'react-router-dom'
import NavSub from './NavSub'
import FooterSub from './FooterSub'

export default function LayoutSub({ subtitle }) {
  return (
    <>
      <NavSub subtitle={subtitle} />
      <main>
        <Outlet />
      </main>
      <FooterSub />
    </>
  )
}
