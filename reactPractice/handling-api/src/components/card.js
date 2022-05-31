import React from "react";
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import {FaEnvelope, FaMapMarkedAlt, FaPen} from 'react-icons/fa';

const MyCard = ({details}) => {
    return (
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150" 
                    className="rounded-circle img-thumbnail border-danger"
                    src={details.picture?.large}
                />
                <CardTitle className="text-primary">
                    <h4>
                        <span className="pr-2">{details.name?.title}</span>
                        <span className="pr-2">{details.name?.first}</span>
                        <span>{details.name?.last}</span>
                    </h4>
                </CardTitle>
            </CardBody>
        </Card>
    )
}

export default MyCard;

