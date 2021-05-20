import React, { Component } from "react";
import API from "../utils/API";

// This page is not yet working...

class Saved extends Component {
// This sets the state. In future I want to refactor this to a functional component because it would look cleaner and I would have a chance to practice using the useState hook.
    state = {
        savedBooks: [],
    }

// I would also like to use the useEffect hook someday to eliminate this...
    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }
// I don't think this is necessary, but I just thought I would leave it here so you could see my thought process...basically I took this over from the search page and haven't decided how to use it yet.
    handleSave = book => {
        if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
// This would delete a book...this I would keep
            API.deleteBook(book._id)
                .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) }))
                .catch(err => console.error(err));
        } else {
// This saves a book...this would go away...no need to save a book that is already saved to the database.
            API.saveBook(book)
                .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
                .catch(err => console.error(err));
        }
    }

    render() {
// There is an especially large amount of work to be done here not only to get it to render on the page, but also to render in a way to match the layout of the search page.
        return (
            <div className="container">
                <h2>Saved books</h2>
                <div>
                {!this.books.length ? (
                    <h1 className="text-center">No Results to Display</h1>
                ) : (
                        <div>
                            {this.books.map(result => (
                                <div className="card mb-3" key={result._id}>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img alt={result.title} className="img-fluid" src={result.image} />
                                        </div>
                                        <div className="col-md-10">
                                            <div className="card-body">
                                                <h5 className="card-title">{result.title} by {result.authors}</h5>
                                                <p className="card-text">{result.description}</p>
                                                <div>
                                                    <a href={result.link} className="btn badge-pill btn-outline-dark mt-3" target="_blank" >View</a>
                                                    <button onClick={() => this.handleSave(result)} className="btn badge-pill btn-outline-warning mt-3 ml-3" >
                                                        {this.state.savedBooks.map(book => book._id).includes(result._id) ? "Unsave" : "Save"}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Saved;

{/* <Results books={this.state.savedBooks} /> */}