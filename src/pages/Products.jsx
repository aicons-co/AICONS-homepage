import { Routes, Route } from 'react-router-dom'
import {
  ProductsIndex,
  BuildingProducts,
  CivilProducts,
  PlantProducts
} from './products/index'

function Products() {
  return (
    <Routes>
      <Route index element={<ProductsIndex />} />
      <Route path="building" element={<BuildingProducts />} />
      <Route path="civil" element={<CivilProducts />} />
      <Route path="plant" element={<PlantProducts />} />
    </Routes>
  )
}

export default Products
