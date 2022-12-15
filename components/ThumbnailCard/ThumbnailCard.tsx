import Image from "next/image"
import { Movie } from "../../types"

type ThumbnailCardProps = {
  movie: Movie
}

function ThumbnailCard({ movie }: ThumbnailCardProps) {
  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt={movie.title || "Movie title"}
        className="rounded-sm object-cover md:rounded"
        fill
      />
    </div>
  )
}

export default ThumbnailCard
