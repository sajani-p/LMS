import React from "react";

import Table from "../../components/Table";
import { FluidContainer } from "../../components/CommonComponents";

const Books = ({ catalog }) => {
    const updateCatalog = 
    [...catalog,
        {
            id: "3",
            title: "Little Women",
            author: "Louisa Alcott",
            isAvailable: true,
            burrowedMemberId: "",
            burrowedDate: "",
          },
          {
            id: "4",
            title: "Lord of the rings",
            author: "J.R.R.Tolkien",
            isAvailable: true,
            burrowedMemberId: "",
            burrowedDate: "",
          },
    ]

    return (
        <FluidContainer>
            <Table data={updateCatalog} />
        </FluidContainer>
    );
};

export default Books;