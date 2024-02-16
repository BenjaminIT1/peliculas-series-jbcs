import React, { useState, useEffect } from "react";
import data from "../../data/sample.json";
import Carga from "../carga/carga";


function Series() {

  
  const [yearFilter, setYearFilter] = useState("");
  const [resultsPerPage, setResultsPerPage] = useState(5);
  const seriesData = data.entries
    .filter((item) => item.programType === "movie")
    .sort((a, b) => a.title.localeCompare(b.title));

  const yearsAvailable = Array.from(new Set(seriesData.map((item) => item.releaseYear)));
  const filteredMovies = seriesData.filter(item => yearFilter === "" || item.releaseYear === Number(yearFilter));
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastMovie = currentPage * resultsPerPage;
  const indexOfFirstMovie = indexOfLastMovie - resultsPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(filteredMovies.length / resultsPerPage);
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  function mostrarInformacion(series) {
    setSelectedMovie(series);
    setModalOpen(true);
  }

  if (isLoading) {
    return <Carga />;
  }

  const handlePreviousPage = () => {
    setCurrentPage(currentPage => Math.max(1, currentPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage => Math.min(totalPages, currentPage + 1));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="flex justify-between mb-4">
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
        >
          <option value="">Filtrar por año</option>
          {yearsAvailable
            .sort((a, b) => a - b)
            .map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
        </select>
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={resultsPerPage}
          onChange={(e) => setResultsPerPage(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentMovies.map((series, index) => (
          <div
            key={index}
            className="card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer"
            onClick={() => mostrarInformacion(series)}
          >
            <img
              className="w-full h-48 object-cover"
              src={series.images["Poster Art"].url}
              alt={series.title}
            />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{series.title}</h2>
              <p className="text-gray-700 text-base">Año de lanzamiento: {series.releaseYear}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={handlePreviousPage}
          className="mx-2 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button
          onClick={handleNextPage}
          className="mx-2 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
      {modalOpen && selectedMovie && (
        <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
          <div className="modal-background absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="modal-content container bg-white p-5 rounded-lg shadow-lg z-50 overflow-y-auto">
            <img
              className="w-full object-cover rounded-t-lg"
              src={selectedMovie.images["Poster Art"].url}
              alt={selectedMovie.title}
            />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{selectedMovie.title}</h2>
              <p>Año de lanzamiento: {selectedMovie.releaseYear}</p>
              <p>{selectedMovie.description}</p>
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-700"
                onClick={() => setModalOpen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Series;
