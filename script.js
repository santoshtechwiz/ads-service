// Ad server script

(function () {
    // Function to parse query string parameters
    function getQueryParam(name) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    }
  
    // Retrieve parameters from the query string
    const adTitle = getQueryParam('title') || 'Default Ad Title';
    const adDescription = getQueryParam('description') || 'Default Ad Description';
    const adLink = getQueryParam('link') || '#';
  
    // Create ad HTML
    const adHTML = `
      <div style="background-color: #f0f0f0; padding: 20px; text-align: center;">
        <div style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">${adTitle}</div>
        <div style="font-size: 16px;">${adDescription}</div>
        <a href="${adLink}" style="display: inline-block; margin-top: 15px; padding: 10px 20px; background-color: #3498db; color: #fff; text-decoration: none; font-weight: bold; border-radius: 5px;" target="_blank">Learn More</a>
      </div>
    `;
  
    // Append the ad HTML to the body of the document
    document.body.insertAdjacentHTML('beforeend', adHTML);
  })();
  