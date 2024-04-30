import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';

function PricesHyderabad() {
  const [value, setValue] = useState(0);

  const handleChange = ( newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-3 mt-3">
              <h2>About Prices</h2>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Item One" />
                  <Tab label="Item Two" />
                  <Tab label="Item Three" />
                </Tabs>
              </Box>
              <div role="tabpanel" hidden={value !== 0}>
                {value === 0 && (
                  <div>
                    <h3>Item One Content</h3>
                    <p>This is the content for Item One.</p>
                  </div>
                )}
              </div>
              <div role="tabpanel" hidden={value !== 1}>
                {value === 1 && (
                  <div>
                    <h3>Item Two Content</h3>
                    <p>This is the content for Item Two.</p>
                  </div>
                )}
              </div>
              <div role="tabpanel" hidden={value !== 2}>
                {value === 2 && (
                  <div>
                    <h3>Item Three Content</h3>
                    <p>This is the content for Item Three.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricesHyderabad;
