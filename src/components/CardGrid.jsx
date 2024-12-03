"use client"
import { useEffect, useState } from "react";
import Card from "./Card";
import { getAllTokens } from "@/helpers/api";

const CardGrid = ({ data }) => {

    const[alltokens,setAllTokens] = useState(null)

    const fetchTokens = async() =>{
        const tokens = await getAllTokens()
        console.log(tokens);
        
        setAllTokens(tokens);
    }
    useEffect(()=>{
        fetchTokens();
    },[])

    return (
        <div className="flex flex-wrap gap-[53px] mt-5 justify-center">
            {data.map((item, index) => (
                <Card key={index} item={item} />
            ))}
        </div>
    );
};

export default CardGrid;
