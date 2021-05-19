import React, { Component } from 'react';
import { Button, Card, CardColumns, Col, Container, Row } from 'react-bootstrap';
import API from '../utils/API.js'

class Search extends Component {
    state = {
        search: "",
        books: [],
        results: [],
        savedBooks: [],
        error: ""
      };

    handleInputChange = event => {
     this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks(this.state.search)
          .then(res => {
            this.setState({ results: res.data.items, error: "" });
            // console.log(res.data.items)
          })
          .catch(err => this.setState({ error: err.message }));
      };
    
    handleSave = book => {
        console.log(book)
        let bookData = {
            image: book.volumeInfo.imageLinks.thumbnail,
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors.join(", "),
            description: book.volumeInfo.description,
            link: book.volumeInfo.previewLink
        };
            API.saveBook(bookData)
                .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
                .catch(err => console.error(err));

        // if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
        //     API.deleteBook(book._id)
        //         .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) }))
        //         .catch(err => console.error(err));
        // } else {
        //     API.saveBook(book)
        //         .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
        //         .catch(err => console.error(err));
        // }
    }
    
    render() {
        console.log(this.state.results)
        return (
            <div>
                <h1>Google Books Search:</h1>
                <form>
                    <input 
                        placeholder="Enter title here"
                        value={this.search}
                        name="book"
                        type="text"
                        onChange={this.handleInputChange}
                    >
                    </input>
                    <button
                        type="submit"
                        onClick={this.handleFormSubmit}
                    >Search</button>
                </form>
                <h3>Results:</h3>
                <Container>
                    <Row>
                        <CardColumns>
                        {this.state.results.map(result => (
                            // console.log(result.volumeInfo.imageLinks.thumbnail),
                            <Col>
                                <Card style={{ width: '190px' }}>
                                    <Card.Img variant="top" src={result.volumeInfo.imageLinks.thumbnail} />
                                    <Card.Body>
                                        <Card.Title>{result.volumeInfo.title} by {result.volumeInfo.authors}</Card.Title>
                                        <Card.Text style={{ fontSize: 13 }}>{result.volumeInfo.description}</Card.Text>
                                        <Button variant="primary" href={result.volumeInfo.previewLink} target="_blank" style={{margin: '10px'}}>Preview Book</Button>
                                        <Button variant="primary" onClick={() => this.handleSave(result)}>Save Book</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                        </CardColumns>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Search;
