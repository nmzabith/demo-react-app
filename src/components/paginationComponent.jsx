import React, {Component} from 'react';

class Pagination extends Component {
    render() {
        const {pageSize, moviesCount, currentPage} = this.props;
        let numberOfPages = Math.ceil(moviesCount/pageSize)
        if (numberOfPages === 1) return null;
        const pages = [...Array(numberOfPages)]
            .map((x,i) => i+1);

        return (
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {pages.map(page => <li
                            className={currentPage === page ? "page-item active" : "page-item"}
                            onClick={() => {this.props.onPageChange(page)}}
                        >
                            <a
                                className="page-link"
                                key={page}>{page}
                            </a>
                        </li>)}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Pagination;