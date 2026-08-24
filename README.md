# SkinCare Finder

SkinCare Finder is a React application that allows users to search for skincare products and view their ingredients. Users can search for a product or brand and see information such as the product name, brand, image, and ingredients.

This project was built using React and Vite and uses an external API to retrieve skincare product information.

## Features

* Search for skincare products
* View product names and brands
* View product images when available
* View product ingredients
* Filters out products that do not have a product name or ingredient information
* Navigate between Home, Search, and About pages
* Loading message while searching
* Error handling for failed searches
* Message when no products are found

## Setup

1. Clone the repository.
2. Open the project folder in your terminal.
3. Install the dependencies:

```bash
npm install
```

4. Start the application:

```bash
npm run dev
```

5. Open the local URL shown in the terminal.

## API Used

This project uses the Open Beauty Facts API to retrieve skincare and cosmetic product information.

Search endpoint used:

```text
https://world.openbeautyfacts.org/cgi/search.pl
```

The application sends the user's search term to the API and displays products returned from the request. Products without a product name or ingredient information are not displayed.

## Technologies Used

* React
* JavaScript
* Vite
* React Router
* CSS
* Open Beauty Facts API

## Challenges

One challenge was working with the data returned from the API because some products do not have all of their information available. Some products were missing names, images, brands, or ingredient information.

To make the search results more useful, I filtered out products that do not have a product name or ingredient information. Products without an image or brand may still appear.

## Known Bugs

Because Open Beauty Facts is an open product database, some product information may be incomplete. Some products may not have an image or brand available, and some searches may return limited results.
