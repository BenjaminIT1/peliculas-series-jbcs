import { Link } from "react-router-dom";

const Cards = (data) => {
    // El resto de tu componente Cards
    return(
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
        
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absoulte bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 flex font-medium">Peliculas</span>
                    <img className="rounded-lg" src="https://images.pexels.com/photos/14725587/pexels-photo-14725587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Peliculas" />
                    
                
            </figure>

            <p className="flex justify-between gap-5">
            <Link to="/peliculas">
                <span className="text-sm font-light ">Popular Movies ....</span>
                <span  className="text-sm font-medium">Mas .....</span>
            </Link>
            </p>
            
        </div>
        
    )
}



export default Cards;