"use client"
const { createContext, useState, useEffect, useContext } = require("react");

const LOCAL_STORAGE_KEY = "itemsInfo";

const itemsInfoContext = createContext();

export const ItemsInfoProvider = ({children}) => {
    const [itemsInfo, setItemsInfo] = useState(null);

    useEffect(() => {
        const storedItemsInfo = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedItemsInfo){
            setItemsInfo(JSON.parse(storedItemsInfo));
        }
    }, []);

    useEffect(() => {
        if(itemsInfo){
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(itemsInfo));
        }
    }, [itemsInfo]);

    return(
        <itemsInfoContext.Provider value={{ itemsInfo, setItemsInfo }}>
            {children}
        </itemsInfoContext.Provider>
    );
};

export const useInfo = () => {
    const context = useContext(itemsInfoContext);
    if (!context){
        throw new Error("useInfo must be used into a provider");
    }

    return context;
}