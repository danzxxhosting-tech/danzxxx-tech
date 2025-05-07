// Listen for clicks on the quote and sticker buttons
document.getElementById('quoteButton').addEventListener('click', getAnimeQuote);
document.getElementById('stickerButton').addEventListener('click', getAnimeSticker);

// Function to copy text to clipboard
function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

async function getAnimeQuote() {
  try {
    // Fetch quote from the API (replace with your actual API URL)
    const response = await fetch('http://localhost:3000/quotes/random');
    const data = await response.json();
    
    // Display quote data
    const quoteText = data.text;
    const characterName = data.character;
    const animeName = data.anime;
    const quoteUrl = data.url; // Assuming API provides a URL for the quote

    // Display the quote on the page
    document.getElementById('quoteText').innerText = quoteText;
    document.getElementById('characterName').innerText = characterName;
    document.getElementById('animeName').innerText = animeName;
    
    // Show "Open Quote URL" and "Copy Quote URL" buttons
    const quoteUrlButton = document.getElementById('quoteUrlButton');
    const copyQuoteUrlButton = document.getElementById('copyQuoteUrlButton');
    quoteUrlButton.style.display = 'inline-block';
    copyQuoteUrlButton.style.display = 'inline-block';

    // Link "Open Quote URL" button to the URL
    quoteUrlButton.onclick = function() {
      window.open(quoteUrl, '_blank');
    };

    // Copy URL to clipboard
    copyQuoteUrlButton.onclick = function() {
      copyToClipboard(quoteUrl);
      alert('Quote URL copied to clipboard!');
    };
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}

async function getAnimeSticker() {
  try {
    // Fetch sticker from the API (replace with your actual API URL)
    const response = await fetch('http://localhost:3000/stickers/random');
    const data = await response.json();
    
    // Display sticker data
    const stickerUrl = data.url;
    const stickerCharacterName = data.character;
    const stickerAnimeName = data.anime;
    const stickerApiUrl = data.api_url; // Assuming API provides a URL for the sticker

    // Display the sticker image
    const stickerImage = document.getElementById('stickerImage');
    stickerImage.style.display = 'block'; // Make image visible
    stickerImage.src = stickerUrl;

    document.getElementById('stickerCharacterName').innerText = stickerCharacterName;
    document.getElementById('stickerAnimeName').innerText = stickerAnimeName;
    
    // Show "Open Sticker URL" and "Copy Sticker URL" buttons
    const stickerUrlButton = document.getElementById('stickerUrlButton');
    const copyStickerUrlButton = document.getElementById('copyStickerUrlButton');
    stickerUrlButton.style.display = 'inline-block';
    copyStickerUrlButton.style.display = 'inline-block';

    // Link "Open Sticker URL" button to the API URL
    stickerUrlButton.onclick = function() {
      window.open(stickerApiUrl, '_blank');
    };

    // Copy sticker URL to clipboard
    copyStickerUrlButton.onclick = function() {
      copyToClipboard(stickerApiUrl);
      alert('Sticker URL copied to clipboard!');
    };
  } catch (error) {
    console.error('Error fetching sticker:', error);
  }
}
