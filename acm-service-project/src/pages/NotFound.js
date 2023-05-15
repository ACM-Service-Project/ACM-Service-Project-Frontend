/* Author: Alexander Berryhill
 * 
 * This file defines the NotFound component, 
 * which is used to display a 404 error
 */


// Import the React library
import React from "react";

// Define a functional component named NotFound
function NotFound() {
  return (
    // Return an HTML structure
    <div className="main_container"> 
      <p>There's nothing here: 404!</p>
    </div>
  );
}

// Export the NotFound component as the default export
export default NotFound;