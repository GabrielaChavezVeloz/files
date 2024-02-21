import { useContext } from "react";
import Genre from "./Genre";
import GenresContext from "../../store/genres-context";



const AvailableGenres = (props) => {

  const genCtx = useContext(GenresContext);

  // useEffect(() => {
  //     const fetchGenres = async () => {
  //       const response = await fetch(
  //         'https://react-exercise1-1b7f5-default-rtdb.firebaseio.com/genres.json'
  //       );
  
  //       if (!response.ok) {
  //         throw new Error('Something went wrong!');
  //       }
  
  //       const responseData = await response.json();
  
  //       const loadedGenres = [];
  
  //       for (const key in responseData) {
  //         loadedGenres.push({
  //           id: key,
  //           name: responseData[key].name
  //         });
  //       }
  
  //       setGenres(loadedGenres);
  //       setIsLoading(false);
  //     };
  
  //     fetchGenres().catch((error) => {
  //       setIsLoading(false);
  //       setHttpError(error.message);
  //     });
  //   }, []);
  
  //   if (isLoading) {
  //     return (
  //       <section className={classes.GenresLoading}>
  //         <p>Loading...</p>
  //       </section>
  //     );
  //   }
  
  //   if (httpError) {
  //     return (
  //       <section className={classes.GenresError}>
  //         <p>{httpError}</p>
  //       </section>
  //     );
  //   }


    //genCtx.addGenres(genres);

    const genresList = genCtx.genres.map(genre => (
      <Genre
        key={genre.id}
        name={genre.name}
      />
    ));
    return (
      <>
        <div>
            <h3>Genres List!</h3>
        </div>
        <ul>
          {genresList}
        </ul>
      </>
      
    );
  }
  
  export default AvailableGenres;