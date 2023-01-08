import Image from "next/image"
import { Movie } from "../../types"
import { useRecoilState } from "recoil"
import { modalState, movieState } from "../../atoms/modalAtom"

type ThumbnailCardProps = {
  movie: Movie
}

function ThumbnailCard({ movie }: ThumbnailCardProps) {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  return (
    <div
      className="cursor-pointer relative h-28 min-w-[180px] transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie)
        setShowModal(true)
      }}
    >
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
