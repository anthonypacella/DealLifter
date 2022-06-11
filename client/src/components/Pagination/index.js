import React from 'react'
import {useNavigate} from 'react-router-dom'

const Pagination = ({entriesPerPage, totalEntries, paginate, previousPage, nextPage}) => {
    const pageNumbers =[];

    for (let i = 1; i <= Math.ceil(totalEntries / entriesPerPage); i++) {
        pageNumbers.push(i);
    }

    const navigate = useNavigate();

    return(
        <nav className = 'pagination is-centered' role = 'navigation'>
            {/* <a className = 'pagination-previous' onClick={(previousPage(-1))}>Previous Page</a>
            <a className = 'pagination-next' onClick={(nextPage(1))}>Next Page</a> */}
            <ul className = 'pagination-list'>
                {pageNumbers.map(number => (
                    <li key={number} className='pagination-link ' onClick={() => paginate(number)}>
                        <a>
                            {number}
                        </a>
                    </li>
                    )
                )}
            </ul>
        </nav>
    )
}

export default Pagination;
