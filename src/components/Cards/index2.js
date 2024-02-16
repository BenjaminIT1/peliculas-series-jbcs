import { Link } from "react-router-dom";

const Cards2 = (data) => {
    return(
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absoulte bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 flex font-medium">Series</span>
                    <img className="rounded-lg" src="https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Series" />
                   
                
            </figure>

            <p className="flex justify-between">
            <Link to="/Series">
                <span className="text-sm font-light">Popular Series ....</span>
                <span  className="text-sm font-medium">Mas .....</span>
            </Link>
            </p>
        </div>
        
    )
}



export default Cards2;