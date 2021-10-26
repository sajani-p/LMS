import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Spinner  from "../../components/Spinner";
import Tabs  from "../../components/Tabs";
import Books from "./Books/index";

import { setBooks } from '../../store/booksSlice';
import { getBooks } from "../../api/bookAPI"

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);
    // const [books, setBooks] = useState(null);

    const booksFromRedux = useSelector((state) => state.books.value)
    const dispatch = useDispatch()

    useEffect(() => {
        setIsLoading(true);
        getBooks()
            .then((response)=>{
                if (!response.error) {
                    console.log(response.data);
                    dispatch(setBooks(response.data));
                }
            })
            .catch((error)=>{
                console.log(error);
            })
            .finally(()=>{
                setIsLoading(false);
            })
    }, [dispatch])  // by using [] useEfect is only running in first run

    const contents = [
        {
            title: "Books", 
            elements: <Books catalog={booksFromRedux}/>,
        },
        {
            title: "Members", 
            elements: <h1>Content of members go here</h1>,
        },
    ]

    return (
        isLoading ? <Spinner /> : <Tabs contents={contents} />
    );
};

export default Dashboard