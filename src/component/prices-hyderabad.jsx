import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { FaClock } from 'react-icons/fa'; // Import FaClock icon from react-icons/fa

function PricesHyderabad() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
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
                  <Tab label="Information" />
                  <Tab label="Tour plan" />
                  <Tab label="Location" />
                </Tabs>
                <div className="col-12 mt-3 mb-3">
                  {value === 0 && (
                    <div>
                      <div className="row">
                        <div className="col-12">
                          <h2>15000 / per person</h2>
                          <div className="d-flex align-items-center mt-3 mb-3 ">
                            <FaClock size={18} /> {/* Use FaClock icon */}
                            <h4 className='ms-3'> 8 Nights / 9 Days</h4>
                            <FaClock className='ms-3' size={18} /> {/* Use FaClock icon */}
                            <h4 className='ms-3'> 8 Nights / 9 Days</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {value === 1 && <div>Item Two Content</div>}
                  {value === 2 && <div>Item Three Content</div>}
                </div>
              </Box>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricesHyderabad;
