import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDish({dish}){
    return(
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>    
        </Card>
                        
    );
}

function RenderComments({commentDetail}){
    return(
        <div className='list-unstyled'>
            <li className='mt-3'>{commentDetail.comment}</li>
            <li className='mt-3'>--{commentDetail.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentDetail.date)))}</li>
        </div>
    );
}

const Dishdetail = (props) => {
    if(props.dish != undefined || props.dish != null){
        const commentsdata = props.comments.map((commentDetail) => {
            return(
                <RenderComments commentDetail={commentDetail} />
            );
        }); 
        return(
            <div className='container'>
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderDish dish={props.dish} />
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

export default Dishdetail;