import React from 'react';
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: process.env.REACT_APP_TYPESENSE_KEY, // Be sure to use the search-only-api-key
    nodes: [
      {
        host: 'public-api.trustmedis.id',
        port: '443',
        protocol: 'https',
      },
    ],
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  queryBy is required.
  additionalSearchParameters: {
    queryBy: 'kebutuhan,keterangan,lokasi',
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">wbw-gsheets-demo</a>
        </h1>
        <p className="header-subtitle">Cari bantuan</p>
      </header>

      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="wbw-gsheets">
          <div className="search-panel">
            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: '',
                }}
              />
              <Hits hitComponent={Hit} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

function Hit(props) {
  return (
    <div>
      <div>
        <span style={{ fontSize: '0.8rem', display: 'block' }}>Kebutuhan</span>
        <span style={{ paddingBottom: '10px', display: 'block' }}>
          <Highlight hit={props.hit} attribute={'kebutuhan'}></Highlight>
        </span>
      </div>
      <div>
        <span style={{ fontSize: '0.8rem', display: 'block' }}>Keterangan</span>
        <span style={{ paddingBottom: '10px', display: 'block' }}>
          <Highlight hit={props.hit} attribute={'keterangan'}></Highlight>
        </span>
      </div>
      <div>
        <span style={{ fontSize: '0.8rem', display: 'block' }}>Lokasi</span>
        <span style={{ paddingBottom: '10px', display: 'block' }}>
          <Highlight hit={props.hit} attribute={'lokasi'}></Highlight>
        </span>
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
