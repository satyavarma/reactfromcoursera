import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props)

    }
    render() {
        if(this.props.dish != undefined || this.props.dish != null){
            const commentsdata = this.props.dish.comments.map((CommentDetail) => {
                return(
                    <div className='list-unstyled'>
                        <li className='mt-3'>{CommentDetail.comment}</li>
                        <li className='mt-3'>--{CommentDetail.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(CommentDetail.date)))}</li>
                    </div>
                );
            }); 
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-5 m-1'>
                            <Card>
                                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>    
                            </Card>
                        </div>
                        <div className='col-12 col-md-5 m-1'>
                            <h5>Comments</h5>
                            {commentsdata}
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div>
                </div>
            );
        }
            
    }
}

export default Dishdetail;