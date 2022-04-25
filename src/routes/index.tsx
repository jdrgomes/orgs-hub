import { Routes, Route } from 'react-router-dom'

import { Home, Detail } from 'src/pages'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:org" element={<Detail />} />
    </Routes>
  )
}
