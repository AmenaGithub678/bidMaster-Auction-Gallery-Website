
# 🏷️ Auction Gallery – Bid & Favorites 

This project is a React-based Auction Web App where users can view bid items, mark favorites, and track total amounts dynamically. The design strictly follows the provided Figma file.

## 📌 Main Features


🔝 Navbar

Designed exactly as per Figma.

Includes brand logo and navigation links.

🎯 Banner

Banner layout is pixel-perfect with Figma design.

📂 Bid Items (JSON Data)

Created a bidItems.json file containing at least 6 auction items with:

id

title

description

currentBidPrice

timeLeft

bidsCount

image

🏷️ Active Auctions Section

Section Title + Subtitle from Figma.

Displays 6 items, each with:

🖼️ Image

🏷️ Item Name

💰 Current Bid Price

⏳ Time Left

❤️ "Bid Now" button

❤️ Favorite Items Section

Initially:

Section title

"No items" message

Total Amount = 0

When item is favorited (❤️):

Show Item Name

Show Current Bid Price

Show Bids Count

Show ❌ Remove Icon

Update Total Amount dynamically

📦 React-Toastify Integration

Shows toast notification when an item is added to favorites.

🦶 Footer

Footer matches Figma design exactly.

⚔️ Challenge Requirements

✔️ Show Data in Table – Bid items are displayed in table format.
✔️ Disable ❤️ Button after click:

Cursor changes to not-allowed

Button color turns red

Button becomes disabled
✔️ Remove from Favorites:

Clicking ❌ removes the item

Deducts its price from Total Amount
## 🛠️ Tech Stack

React.js

React-Toastify

Tailwind CSS / CSS Modules (based on setup)

JSON (Local file for data)
## Documentation

[Client_Side_Link](https://github.com/AmenaGithub678/bidMaster-Auction-Gallery-Website)

[LIVE DEMO](https://radiant-eclair-fd0e33.netlify.app/)
