import { createContext ,useContext ,useState , useEffect } from "react";


export const Content = createContext({
data: []
});
export const AppContext = ({children}) => {

    const [data, setData] = useState([]);
    const [ menu, setmenu ] = useState(false)
    
    
    const toggleMenu = () => {
        setmenu(!menu)
    }

    useEffect(() => {
        fetch('https://animeapi-7l5z.onrender.com/')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    },[])

    const [show, setShow] = useState(data[0])

    
    const value = {
        data,
        menu,
        toggleMenu,
        show,
        setShow
    }
    return(
        <Content.Provider value={value}>
            {children}
        </Content.Provider>
    )
}
