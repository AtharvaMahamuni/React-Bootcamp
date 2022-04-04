import React from "react";

import {Card, CardBody, CardTitle, CardText} from "reactstrap";
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from 'react-icons/fa'

const MyCard = ({details}) => {
    return(
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150"
                className="rounded-circle img-thumbnail border-danger"
                src={details.picture?.large}
                />
            </CardBody>
        </Card>
    );
}

export default MyCard;