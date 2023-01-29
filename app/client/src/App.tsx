import { useEffect, useState } from 'react';

import { Workspace } from '@packages/types';

function App() {
  const [data, setData] = useState<Workspace[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/workspaces');
      const { data } = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Monorepo with PNPM Workspace</h1>
      <h2>Workspaces</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
