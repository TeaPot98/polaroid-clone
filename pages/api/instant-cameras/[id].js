import { cameraModels } from '../../../data'

export default function handler({ query: { id } }, res) {
  const filtered = cameraModels.find(c => {
    return c.colors.find(color => color.id === id)
  })
  if (filtered) {
    res.status(200).json(filtered)
  } else {
    res.status(404).json({
      message: `Product with id ${id} is not found`
    })
  }
}