import React, { useState } from "react";
import { Card, Badge, Button, Collapse } from "react-bootstrap";
import "./jobs.style.css";
const Job = ({ job }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mb-3 card">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title style={{ color: "black" }}>
              {job.title} -{" "}
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">
              {job.type}
            </Badge>
            <Badge variant="secondary">{job.location}</Badge>
            <div style={{ wordBreak: "break-all" }}>
              <h1 className="type">Type:{job.type}</h1>
            </div>
          </div>
          <img
            className="d-none d-md-block"
            height="50"
            alt={job.company}
            src={job.company_logo}
          />
        </div>
        <Card.Text>
          <Button
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            variant="primary"
          >
            {open ? "Hide Details" : "View Details"}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4 details">
            <p>location: {job.location}</p>
            <p className="url" >Visit us at : <h3 id="url">{job.company_url}</h3></p>
            <p> Discription: <br/> {job.description}</p>
            <p>How to apply: <br/>{job.how_to_apply}</p>
            <p className="url">Job link:  <h3 id="url">{job.url}</h3></p>

          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

export default Job;
