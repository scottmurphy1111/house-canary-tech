import React, { useEffect, useState } from 'react';
import { fetchUsers } from './api/fetchUsers';

import './App.css';
import MultiSelect from './components/MultiSelect';

const App =() => {
  const [data, setData] = useState([])
  const [zips, setZips] = useState<string[]>([]);

  const processResults = (data: any[]) => {
    const filter = data.map(item => item.location.postcode.toString())
    setZips(filter)
  }

  useEffect(() => {
    fetchUsers().then(data => setData(data.results))
  }, []);

  useEffect(() => {
    if(data) {
      processResults(data)
    }
  }, [data])

  return (
    <div className="wrapper">
      <h2>Zips</h2>
      {/* <ul>{zips.map((zip: string) => <li key={zip}>{zip}</li>)}</ul> */}
      <MultiSelect zips={zips} />
    </div>
  );
}

export default App;
