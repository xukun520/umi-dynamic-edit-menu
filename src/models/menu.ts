import { useState } from 'react';

export default function () {
  const [routes, setRoutes] = useState();

  return {
    routes, setRoutes
  };
}
