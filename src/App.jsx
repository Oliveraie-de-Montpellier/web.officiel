import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import PageTitle from './components/PageTitle'
import Layout from './components/layout/Layout'
import CartModal from './components/cart/CartModal'
import NavSub from './components/layout/NavSub'
import FooterSub from './components/layout/FooterSub'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Visits from './pages/Visits'
import Professionals from './pages/Professionals'
import Assistance from './pages/Assistance'
import Certifications from './pages/Certifications'
import Parrainage from './pages/Parrainage'
import VisiteDecouverte from './pages/VisiteDecouverte'
import ExperienceComplete from './pages/ExperienceComplete'
import EspaceEnfants from './pages/EspaceEnfants'

function SubLayout({ subtitle, children }) {
  return (
    <>
      <NavSub subtitle={subtitle} />
      {children}
      <FooterSub />
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <CartModal />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<><PageTitle title="Accueil" /><Home /></>} />
          <Route path="boutique" element={<><PageTitle title="Boutique" /><Shop /></>} />
          <Route path="visites" element={<><PageTitle title="Visites & Réservations" /><Visits /></>} />
          <Route path="certifications" element={<><PageTitle title="Certifications & Labels" /><Certifications /></>} />
          <Route path="parrainage" element={<><PageTitle title="Parrainer un Olivier" /><Parrainage /></>} />
          <Route path="professionnels" element={<><PageTitle title="Espace Professionnels" /><Professionals /></>} />
          <Route path="assistance" element={<><PageTitle title="Assistance" /><Assistance /></>} />
        </Route>
        <Route
          path="visites/decouverte"
          element={
            <SubLayout subtitle="Visite Découverte">
              <PageTitle title="Visite Découverte" />
              <VisiteDecouverte />
            </SubLayout>
          }
        />
        <Route
          path="visites/experience-complete"
          element={
            <SubLayout subtitle="Expérience Complète">
              <PageTitle title="Expérience Complète" />
              <ExperienceComplete />
            </SubLayout>
          }
        />
        <Route
          path="visites/espace-enfants"
          element={
            <SubLayout subtitle="Espace Enfants">
              <PageTitle title="Espace Enfants" />
              <EspaceEnfants />
            </SubLayout>
          }
        />
      </Routes>
    </>
  )
}
