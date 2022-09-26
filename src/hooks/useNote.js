import { useEffect, useState } from "react";
const useNote = () => {
    const [card, setCard] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/notes`;

        fetch(url)
            .then(res => res.json())
            .then(data => setCard(data));
    }, []);
    return [card, setCard];
}
export default useNote;