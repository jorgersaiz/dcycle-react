import React from 'react';
import './Table.css'

interface Props {
  tableHead: string[];
  data: string[][];
  showImage: boolean;
}

const Table: React.FC<Props> = ({ tableHead, data, showImage }) => (
    <table className="table">
        <thead>
          <tr className="first-row">
            {tableHead.map((headItem, index) => (
                <th scope="col" key={index}>{ headItem }</th>
            ))}
          </tr>
        </thead>
        <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                    <th scope="row">{ index + 1 }</th>
                    {row.map((item, index) => (
                        <td key={index}>
                            {
                                showImage && 
                                item.length === 2 && 
                                <img className="flag" src={`https://flagcdn.com/w320/${item.toLowerCase()}.png`} alt=""></img>
                            }
                            { item }
                      </td>
                    ))}
                    

                </tr>
            ))}
        </tbody>
    </table>
);

export default Table;
