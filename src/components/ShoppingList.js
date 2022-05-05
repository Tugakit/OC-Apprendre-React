import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'

function ShoppingList () {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  )

  return (
    <div>
      <ul>
        {categories.map(cat => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className='lmj-plant-list'>
        {plantList.map(plant => (
          <li key={plant.id} className='lmj-plant-item'>
            {plant.name}
            {plant.isOnSale && <div className='lmj-sales'>Soldes</div>}
            {plant.isBestSale && <span className='lmj-BestSelling'>🔥</span>}
            <CareScale careType='water' scaleValue={plant.water} />
            <CareScale careType='light' scaleValue={plant.light} />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ShoppingList

function CareScale(props) {
  const scaleValue = props.scaleValue

  const range = [1, 2, 3]

  return (
      <div>
          {range.map((rangeElem) =>
              scaleValue >= rangeElem ? <span key={rangeElem.toString()}>☀️</span> : null
          )}
      </div>
  )
}