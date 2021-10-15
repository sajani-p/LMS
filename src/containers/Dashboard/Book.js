import React, { useState, useEffect } from "react";
import { IoReturnUpBack } from "react-icons/io5"; //back button icon

import { getBook } from "../../api/bookAPI"; 
import { 
    Button, 
    Container, 
    ContainerInLine, 
    FlexRow 
} from "../../components/CommonComponents";
import Spinner from "../../components/Spinner";

const Book = ({id, handleBackClick}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [book, setBook] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getBook(id)
            .then((response) =>{
                if(!response.error) {
                    setBook(response.data)
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(()=> {
                setIsLoading(false);
            });
    }, [id]);
    
    return (
        <Container>
            <Button onClick={handleBackClick}>
                <IoReturnUpBack/>
            </Button>
            {!isLoading && book!== null ? (
                <FlexRow>
                    <ContainerInLine>
                        <h1>{book.title}</h1>
                        <h2>{book.author}</h2>
                        <p>
                        Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document
                        </p>
                        {book.isAvailable ? (
                            ""
                        ) : (
                            <> 
                                <h4>{`Burrowed by: ${book.borrowedMemberId}`}</h4>
                                <h4>{`Burrowed date: ${book.borrowedDate}`}</h4>
                            </>
                        )}
                    </ContainerInLine>
                </FlexRow>
            ) : (
                <Spinner />   
            )}
        </Container>
    );
};

export default Book;    