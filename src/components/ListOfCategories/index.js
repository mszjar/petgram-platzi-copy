import React, { useEffect, useState } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";
import { categories } from '../../../api/db.json';
import db from '../../../api/db.json'


export const ListOfCategories = () => {
    const [categories, setCategories] = useState(db.categories)
    useEffect
    return (
        <List>
            {
                db.categories.map(category => <Item key={category.id}><Category {...category}/></Item>)
            }
        </List>
    )
}