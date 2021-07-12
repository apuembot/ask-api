import { questions } from '../../../data'

export default function questionHandler({ query: { category }, }, res) {
  const filtered = questions.filter((p) => p.category === category)

  // User with id exists
  if (filtered.length > 0) {
    var randomQuestionId = Math.floor((Math.random() * filtered.length) + 0);
    res.status(200).json(filtered[randomQuestionId])
  } else {
    res.status(404).json({ message: `Category with name: ${category} not found.` })
  }
}