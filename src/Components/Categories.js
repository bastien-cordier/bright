import React from 'react'
import Card from 'react-bootstrap/Card'
import './Categories.css'

function Categories() {
    return (
        <section className='bg-light text-center' id='#categories'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card className="text-black">
                        <Card.Img src="assets/nicolas-savignat-61OWGObkkCQ-unsplash.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className="text-black">
                            <Card.Img src="assets/nicolas-savignat-61OWGObkkCQ-unsplash.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className="text-black">
                            <Card.Img src="assets/nicolas-savignat-61OWGObkkCQ-unsplash.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories
