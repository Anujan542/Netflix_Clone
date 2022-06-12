import { Movie } from '../typings'

interface Props {
  movie: Movie
}

const Thumnail = ({ movie }: Props) => {
  return (
    <div>
      <h3>Thumnail</h3>
    </div>
  )
}

export default Thumnail
