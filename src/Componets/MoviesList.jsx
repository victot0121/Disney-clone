import { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MoviesCards from './MoviesCards'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovie from './HrMovie';

function MoviesList({ genereId, index_ }) {

    const [MoviesList, setMoviesList] = useState([])
    const elementRef = useRef(null)


    useEffect(() => {
        getMoviesByGenreId()
    }, [])


    const getMoviesByGenreId = () => {
        GlobalApi.getMovieByGenreId(genereId).then(resp => {
            setMoviesList(resp.data.results)
        })
    }

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }

    return (
        <div className='relative'>
             <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute
           ${index_%3? 'mt-[80px]': 'mt-[220px]'} `}/>
            <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-5 px-3 pb-5 '>
                {MoviesList.map((item,index) => (
                    <>
                       {index_%3? <HrMovie movie={item}/>: <MoviesCards movie={item} />}
                    </>
                    
                ))}
            </div>
            <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 ${index_%3? 'mt-[80px]': 'mt-[220px]'}
           `}/> 
        </div>
    )
}

export default MoviesList