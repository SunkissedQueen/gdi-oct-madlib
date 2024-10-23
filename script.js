// Function to generate the story
function generateStory() {
  // Get values from input fields
  const firstName = document.getElementById('firstName').value;
  const favoriteDish = document.getElementById('favoriteDish').value;
  const snackItem = document.getElementById('snackItem').value;

  // Check if all fields are filled
  if (!firstName || !favoriteDish || !snackItem) {
      alert('Please fill in all fields!');
      return;
  }

  // Create the story using template literals
  const story = `Once upon a time, ${firstName} was excited to bring their famous ${favoriteDish} to the town potluck. However, in a moment of distraction, they accidentally grabbed a bag of ${snackItem} instead. When it was time to unveil their contribution, the room fell silent, and then someone shouted, "What's this? A snack attack?" Laughter erupted as everyone gathered around to see what was going on.

Not one to back down, ${firstName} turned the mishap into a game: "Let's see who can create the most ridiculous dish using only ${snackItem}!"`;

  // Display the story and hide the input form
  document.getElementById('story-text').innerText = story;
  document.getElementById('input-form').classList.add('hidden');
  document.getElementById('story').classList.remove('hidden');
}

// Function to reset the form
function resetForm() {
  // Clear input fields
  document.getElementById('firstName').value = '';
  document.getElementById('favoriteDish').value = '';
  document.getElementById('snackItem').value = '';
  // Show the input form and hide the story
  document.getElementById('input-form').classList.remove('hidden');
  document.getElementById('story').classList.add('hidden');
}