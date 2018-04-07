import React from "react";
import './Results.css';

const Results = props => (

  <div className='container'>
    <div className="row">
      {props.results.map(result => (
        <div className="col-xs-4 result-item" key={result.id}>
          <img alt={result.title} src={result.images.original.url} style={{maxWidth: '100%'} , {maxHeight: '100%'
          }} />
        </div>
      ))}
    </div>
  </div>

);

export default Results;
