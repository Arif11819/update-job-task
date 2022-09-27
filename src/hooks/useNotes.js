import { useEffect, useState } from "react"

const useNotes = () => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        const url = 'https://blooming-fortress-88596.herokuapp.com/notes';

        fetch(url)
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [notes])
    return [notes, setNotes];
}
export default useNotes;