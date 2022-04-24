import { Routes, Route } from 'react-router-dom'

import { Home, OrgDetail } from 'src/pages'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:org" element={<OrgDetail />} />
    </Routes>
  )
}
