import Image from "./Image";
import { Card } from "react-bootstrap";

export default function CardBody({blocks}) {

     return (
          <Card className="card-body">
               <h5 className="card-title">{blocks.alt}</h5>
               <Image/>
          </Card>
     );
}

