import React, { useState, useEffect } from 'react';

import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import { useQuestions } from './api.ts';
import './App.css'


const App = () => {

  const { data, error } = useQuestions();
  const [filter, setFilter] = useState('');

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  const filteredData = data.filter((item: any) => 
    item.question.toLowerCase().includes(filter.toLowerCase()) ||
    item.answer.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      {/* Grid system */}
      <Row>
        <h1>Frequent questions</h1>

        <input type="text" placeholder="Search" className="mr-sm-2"
            onChange={(e) => setFilter(e.target.value)}>
        </input>  

        {filteredData.map((item: any) => (
          <Col key={item.id} sm={6}>
            <h3>{item.question}</h3>
            <p>{item.answer.length > 200 ? item.answer.substring(0, 200) : item.answer}</p>
          </Col>
        ))}
      </Row>

    </Container>
  );
};

export default App


// https://react-bootstrap.netlify.app/docs/layout/grid/
// https://dev.to/sidramaqbool/best-practices-for-using-the-filter-method-in-reactjs-3dog
// https://www.dhiwise.com/post/reactjs-filter-array-of-objects-effortless-data-handling -> filter
// npm run dev -> run vite
// 
/**
 * 
 *       <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ width: '50%' }}>Left column</th>
            <th style={{ width: '50%' }}>Right column</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {leftColumnData.map((item) => (
                <div key={item.id} style={{ marginBottom: '1em' }}>
                  <h3>{item.question}</h3>
                  <p>{item.answer.length > 200 ? item.answer.substring(0, 200) + '...' : item.answer}</p>
                </div>
              ))}
            </td>
            <td>
              {rightColumnData.map((item) => (
                <div key={item.id} style={{ marginBottom: '1em' }}>
                  <h3>{item.question}</h3>
                  <p>{item.answer.length > 200 ? item.answer.substring(0, 200) + '...' : item.answer}</p>
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
 */