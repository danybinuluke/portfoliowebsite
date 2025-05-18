import { useEffect, useState } from "react";

export function useTypeWriter(text:string, speed:number = 50){
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    useEffect(() => {

        let i=0;
        const timer = setInterval(() => {
            if(i < text.length){
                setDisplayedText((prev) => prev + text.charAt(i));
                i++;
            }
            else{
                setIsComplete(true);
                clearInterval(timer); 

            }
        }, speed);
        return () => clearInterval(timer);
    },[speed, text]);
    return { displayedText, isComplete };
}