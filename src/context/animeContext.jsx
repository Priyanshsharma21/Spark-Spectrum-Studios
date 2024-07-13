import { createContext, useContext, useEffect, useRef, useState } from 'react';

const AnimeContext = createContext()

export const AnimeProvider = ({children})=>{
    const [message, setMessage] = useState("Hi! How you doin'?");
    
    return (
        <AnimeContext.Provider value={{ message, setMessage }}>
          {children}
        </AnimeContext.Provider>
      );
}

export const useAnimeContext = () => useContext(AnimeContext);
