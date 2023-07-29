import GenresList from "../Constant/GenresList"
import MoviesList from "./MoviesList"


function GenreMoviesList() {
  return (
    <div>{GenresList.genere.map((item,index)=> index<=4&&(
        <div className="p-8 px-8 md:px-16 bg-[#131520]">
            <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
            <MoviesList genereId={item.id}/>
        </div>
    ))}</div>
  )
}

export default GenreMoviesList