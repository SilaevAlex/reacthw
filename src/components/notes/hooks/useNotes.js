import { useState } from "react";
import dataNotes from "../../../notes.json";

import { useStorage } from "../../../shared";

const useNotes = () => {
    const { setJsonItem, getJsonItem } = useStorage();

    if (!getJsonItem("notes")) {
        setJsonItem("notes", dataNotes);
    }

    const [notes, setPosts] = useState(getJsonItem("notes"));

    const [isClosePopup, setIsClosePopup] = useState(false);

    const addNote = (e) => {
        e.preventDefault();

        const note = {
            id: notes.length + 1,
            title: e.target.title.value,
            description: e.target.description.value,
        };

        const newNotes = [...notes, note];

        setJsonItem("notes", newNotes);

        setPosts(newNotes);

        setIsClosePopup(true);

        setTimeout(() => {
            setIsClosePopup(false);
        }, 1000);
    };

    return {
        notes,
        addNote,
        isClosePopup,
    };
};

export default useNotes;