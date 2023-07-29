window.onload = function() {
    // Add event listeners to the buttons
    document.getElementById("buy-now").addEventListener("click", buyNow);
    // The buyNow function will open a new window to the product page
    function buyNow() {
      window.open("product-page.html");
    }
  };