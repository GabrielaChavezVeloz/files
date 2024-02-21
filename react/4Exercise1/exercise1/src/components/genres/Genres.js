import { useState, useEffect, useContext } from "react";
import AvailableGenres from "./AvailableGenres";
import GenreForm from "./GenreForm";
import GenresContext from "../../store/genres-context";


// const DUMMY_GENRES = [
//     {
//         id: 'g1',
//         name: 'Triller',
//     },
//     {
//         id: 'g2',
//         name: 'Fantasy'
//     }
// ];

const Genres = () => {

    const genCtx = useContext(GenresContext);
    


    const submitGenreHandler = async (data) => {
        // const index = genres.findIndex(x => x.name === data.name);
        // const existingGenre = genres[index];
        // let updatedGenres;

        /*if(existingGenre) {
            const updatedGenre = {
                ...existingGenre,
                id: data.id,
                name: data.name
            };
            updatedGenres = [...genres];
            console.log('size' +updatedGenres.length);
            updatedGenres[index] = updatedGenre;
            setGenres([
                ...updatedGenres
            ]);
        } else {
            setGenres([
                ...genres, data
            ]);
        }*/

        // const formData = new FormData();
        // formData.append("name", data.name);
        
        // await fetch('http://localhost:8080/genre', {
        //     method: 'POST',
        //     body: formData
        // });

        genCtx.addGenre(data);
        

    };
  
    
    return (
      <>
        <div>
            
                <AvailableGenres/>
                <GenreForm onAddGenre={submitGenreHandler}/>
            
            
            
        </div>
        
      </>
      
    );
  }
  
  export default Genres;