import { useEffect, useState } from "react";
const useNote = () => {
    const [card, setCard] = useState({});

    useEffect(() => {
        const url = `https://blooming-fortress-88596.herokuapp.com/notes`;

        fetch(url)
            .then(res => res.json())
            .then(data => setCard(data));
    }, []);
    return [card, setCard];
}
export default useNote;