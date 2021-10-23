import React, { useState, useEffect } from "react";
import { IoReturnUpBack} from "react-icons/io5"; //back button icon
import styled from "styled-components";

import { 
    Button, 
    Container, 
    ContainerInLine, 
    FlexRow 
} from "../../../components/CommonComponents";
import Spinner from "../../../components/Spinner";
import ConfirmationDialog from "../../../components/ConfirmationDialog";
import LendDialog from "./LendDialog"

import { getBook, lendBook, returnBook, deleteBook } from "../../../api/bookAPI"; 
import BookCoverPlaceHolder from "../../../shared/b4.jpg";
import { getTodaysDate } from "../../../shared/utils";

const ContainerInLineTextAlignLeft = styled(ContainerInLine)`
    align-item: flex-start;
`;

const H3 = styled.h3`
    text-align: left;
`;

const H4 = styled.h4`
    text-align: left;
`;

const Book = ({id, handleBackClick}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [book, setBook] = useState(null);
    const [showLendConfirmation, setShowLendConfirmation] = useState(false);
    const [showReturnConfirmation, setShowReturnConfirmation] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const handleDelete = (confirmation) => {
        if (confirmation) {
            deleteBook(book.id); 
        }
        setShowDeleteConfirmation(false);
    };

    const handleLend = (confirmed, memberId) => {
        if (confirmed) {
            lendBook(book.id, memberId, getTodaysDate());
        }
        setShowLendConfirmation(false);
    };

    const handleReturn = (confirmation) => {
        if (confirmation) {
            returnBook(book.id);
        }
        setShowReturnConfirmation(false);
    };

    useEffect(() => {
        setIsLoading(true);
        getBook(id)
          .then((response) => {
            if (!response.error) {
              setBook(response.data);
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }, [id]);
    
    return (
        <>
            <Container>
                <Button onClick={handleBackClick} size={1.5}>
                    <IoReturnUpBack/>
                </Button> 
                
                {!isLoading && book !== null ? (
                    <>     
                        <FlexRow>
                            <ContainerInLineTextAlignLeft>
                                <H3>{book.title}</H3>
                                <H4>{`by: ${book.author}`}</H4>
                                <p>
                                    Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document
                                </p>
                                {book.isAvailable ? (
                                    ""
                                ) : (
                                    <> 
                                        <h4>{`burrowed by: ${book.burrowedMemberId}`}</h4>
                                        <h4>{`burrowed date: ${book.burrowedDate}`}</h4>
                                    </>
                                )}
                            </ContainerInLineTextAlignLeft>
                            <ContainerInLine>
                                <img 
                                    src={BookCoverPlaceHolder} 
                                    alt="Book Cover Place Holder" 
                                    style={{
                                        border: "1px solid black",
                                        width: "50%",
                                        height: "50%",
                                    }}
                                
                                />
                            </ContainerInLine>
                        </FlexRow>

                        <FlexRow>
                            {book.isAvailable ? (
                                <>
                                    <Button onClick={()=>setShowLendConfirmation(true)}>
                                        Lend
                                    </Button>
                                    <Button color="danger" onClick={()=>setShowDeleteConfirmation(true)}>
                                        Delete
                                    </Button>
                                </>
                            ) : (
                                    <Button onClick={()=>setShowReturnConfirmation(true)}>
                                        Return
                                    </Button>
                            )} 
                        </FlexRow>
                    </>
                ) : (
                    <Spinner />   
                )}
            </Container>
            <ConfirmationDialog 
                handleClose={handleDelete } 
                show={showDeleteConfirmation}
                headerText="Confirm book deletion"
                detailText="Are you sure want to delete this book? This action can't be undone."
            />
            <LendDialog 
                handleClose={handleLend} 
                show={showLendConfirmation}
            />
            <ConfirmationDialog 
                handleClose={handleReturn } 
                show={showReturnConfirmation}
                headerText="Confirm book return"
                detailText="Press 'confirm' to return book."
            />
        </>
    );
};

export default Book;    