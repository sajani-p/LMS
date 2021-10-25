import { createSlice } from '@reduxjs/toolkit';


export const bookSlice = createSlice({
    name: 'books',
    initialState: {
      value: null,
    },
   
    reducers: {  //redux states update krna functions walata kiynne reducers functions kyl
      setBooks: (state, action) => {   //reducer eke thiyna state ekata hamawelema createSlice eke intial state ek pass wenwa = useState ekt dena initial value eka
          state.value = action.payload;   //reducer function wla state ek update krnn one data ewnne, action kiyna parameter eka athule

      },
      updateBook: (state, action) => {  //handleLend,handleDelete,handleReturn function
        const updatedBooks = [...state.value];  //array eka access krnn puluwn wenwa
        const id = action.payload.id;
        const index = updatedBooks.findIndex(
          (element) => element.id === id    //element = book
        );
        updatedBooks.splice(index , 1 , action.payload);  //action.payload = book eke updated information thiyna object ekak
        state.value = updatedBooks;
      },
    },
  });

  // Action creators are generated for each case reducer function
export const { setBooks, updateBook } = bookSlice.actions;

export default bookSlice.reducer;