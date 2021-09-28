import React, { useEffect, useState } from 'react';

import Tabs  from "../../components/Tabs";
import { getBooks } from "../../api/bookAPI"
import Spinner  from "../../components/Spinner";

import Books from './Books';

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [books, setBooks] = useState([])

    useEffect(() => {
        setIsLoading(true);
        getBooks()
            .then((response)=>{
                if (!response.error) {
                    console.log(response.data);
                    setBooks(response.data);
                }
            })
            .catch((error)=>{
                console.log(error);
            })
            .finally(()=>{
                setIsLoading(false);
            })
    }, [])  // by using [] useEfect is only running in first run

    const contents = [
        {
            title: "Books", 
            elements: <Books catalog={books}/>,
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