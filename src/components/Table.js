import styled from "styled-components";

import { capitalizeFirstLetter } from "../shared/utils";

const StyledTable = styled.table`
    padding-top: 30px;
    border: none;
    border-collapse: collapse;
    border-collapse: separate;
    td,
    th {
        border: 1px solid;
    }
    td {
        padding: 5px 10px;
    }
    tbody tr {
        :nth-of-type(even){
            background-color: ${(props) => props.theme.primary.light};
        }
        :hover {
            background-color: ${(props) => props.theme.primary.dark};
        }
    }
    thead > tr {
        background-color: ${(props) => props.theme.primary.main};
    }

    tr > th {
        padding: 10px;
    }

    tr > td {
        cursor: pointer;
    }

    caption{
        font-size: 0.9em;
        padding-top: ${(props) => props.theme.spacing(1)};
        font-weight: bold;
    }
    
`;

const TableMarkup = ({ titles, data, handleClick, caption }) => (
    <StyledTable>
        <caption>{caption}</caption>
        <colgroup>
            {titles.map((title, index) => (
                <col key={index} />
            ))}
        </colgroup>
        <thead>
            <tr>
                {titles.map((title, index) => (
                    <th key={index}> {capitalizeFirstLetter(title)} </th>
                ))} 
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (  //data.map => map each data elements in array list
                <tr key={index} onClick={()=>handleClick(item.id)}>
                    {titles.map((title, index) => (
                        <td key={index}> 
                            {typeof item[title] === "boolean"
                                ? item[title]
                                    ?"Yes"
                                    :"No"
                                : item[title]} 
                        </td>   //populate data to table
                    ))} 
                </tr>
            ))}
        </tbody>
    </StyledTable>
);

const Table = ({ data, handleRowClick, instruction }) => 
    data ? (
        <TableMarkup 
            titles={Object.keys(data[0])} 
            data={data} 
            handleClick={handleRowClick}
            caption={instruction}
        />
        ) : (
            "No data to populate"
        );
export default Table;