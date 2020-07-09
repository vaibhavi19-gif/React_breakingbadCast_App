import React from "react";
import CharItem from "./CharItem";
import Load from '../../components/ui/load'

const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? ( <
        Load / >
    ) : ( <
        section className = "cards" > { " " } {
            items.map((item) => ( <
                CharItem key = { item.char_id }
                item = { item } > { " " } <
                /CharItem>
            ))
        } { " " } <
        /section>
    );
};

export default CharacterGrid;