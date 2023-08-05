function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    // Helper function to escape special characters
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
  
    // Replace the matched text in htmlContent with highlighted version
    plainTextPositions.forEach(({ start, end }) => {
      // Get the corresponding text in plainText
      const plainTextToHighlight = plainText.slice(start, end);
      
      // Escape special characters in plainText before using in regex
      const escapedText = escapeRegExp(plainTextToHighlight);
      
      // Create a regex pattern to find the text in htmlContent
      const regexPattern = new RegExp(escapedText, 'g');
      
      // Replace the matched text in htmlContent with highlighted version
      htmlContent = htmlContent.replace(regexPattern, match => `<mark>${match}</mark>`);
    });
    
    return htmlContent;
  }
  
  const htmlContent = '<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>';
  
  const plainText = "Hi David Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar… Read the full article here ------------------------------------- You received this because you are subscribed to news related to ES0113900J37 , and this story was marked as 82% relevant. Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. To unsubscribe change your email preferences, please click here . -------------------------------------";
  
  const plainTextPositions = [
    { start: 241, end: 247 },
    { start: 518, end: 525},
  ];
  
  const highlightedContent = highlightHTMLContent(htmlContent, plainText, plainTextPositions);
  
  console.log(highlightedContent);
  
  module.exports = highlightHTMLContent;