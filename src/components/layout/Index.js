import React from 'react';
import Tracks from '../tracks/Tracks';
import Search from '../tracks/Search';

// The main container that will hold the 'Search' component & 'Tracks' component
const Index = () => {
  return (
    <React.Fragment>
        <Search />
        <Tracks />
    </React.Fragment>
  )
}

export default Index;
