// Update the live clock in the navbar
function updateTime() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('time').textContent = formattedTime;
  }
  
  // Call updateTime every second
  setInterval(updateTime, 1000);
  updateTime();

 // Capture form values and display the smoothie order summary
document.getElementById('smoothieForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Retrieve form values
  const name = document.getElementById('customerName').value;
  const size = document.getElementById('size').value;
  const ingredients = Array.from(document.querySelectorAll('input[name="ingredients"]:checked')).map(el => el.value);
  const base = document.getElementById('base').value;
  const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(el => el.value);
  const quantity = document.getElementById('quantity').value;

  // Construct the smoothie description
  let description = `<strong>${name}</strong>, here is your smoothie order:<br>`;
  description += `- <strong>Size:</strong> ${size}<br>`;
  description += `- <strong>Ingredients:</strong> ${ingredients.length > 0 ? ingredients.join(', ') : 'None'}<br>`;
  description += `- <strong>Base:</strong> ${base}<br>`;
  description += `- <strong>Toppings:</strong> ${toppings.length > 0 ? toppings.join(', ') : 'None'}<br>`;
  description += `- <strong>Quantity:</strong> ${quantity}`;

  // Display the description in the order summary
  document.getElementById('output').innerHTML = description;
});

// Reset functionality for both form and output area
document.getElementById('smoothieForm').addEventListener('reset', function () {
  // Clear the order summary
  document.getElementById('output').innerHTML = '';
});

  