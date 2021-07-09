import { people } from '../../../data'

export default function personHandler({ query: { id, test }, }, res) {
  const filtered = people.filter((p) => p.id === id)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json({ message: `User id: ${id}. Test: ${test} not found.` })
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}