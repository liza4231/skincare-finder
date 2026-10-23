# SkinCare Finder

SkinCare Finder is a React application that allows users to search for skincare products and view information about their ingredients. The goal of the project is to make it easier to search through skincare products without showing too much information at once.

Users can search for a product or brand directly from the main page, filter the results by brand, and click on a product to see its full ingredient information.

This project was built using React and Vite and uses the Open Beauty Facts API for product information.

## Features

- Search for skincare products directly from the main page
- View product names, brands, and images
- View the number of search results
- Filter search results by brand
- Click a product to view more details
- View full ingredient information on a separate product page
- Return to previous search results after viewing a product
- Preserve the selected brand when returning to search results
- Loading message while API data is being retrieved
- Error handling for failed requests
- Message when no products are found
- 404 page for invalid URLs
- Responsive layout for smaller screens

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

The search request uses the Open Beauty Facts search API to find products based on the user's search.

Product details are retrieved using the product's code. This allows the Product Details page to request information about one specific product.

No API key is required for this project.

## Technologies Used

- React
- JavaScript
- Vite
- React Router
- CSS
- Open Beauty Facts API

## Project Structure

The application uses separate pages and reusable components.

The main pages include:

- Home
- Product Details
- 404 Page

The Home page contains the product search so users do not have to navigate to a separate search page.

Some of the reusable components include:

- NavBar
- SearchBar
- ProductList
- ProductCard

Separating the search bar, product list, and product cards into different components helped keep the search functionality easier to read and maintain.

## Challenges

One challenge was working with the data returned from the API because some products do not have all of their information available. Some products may be missing names, images, brands, or ingredient information.

To make the search results more useful, products without a product name or ingredient information are filtered out.

Another challenge was keeping the user's search results when they clicked on a product. React Router state is used to pass the search information to the Product Details page and back to the Home page.

The Home and Search pages were also combined so users can search directly from the main page without unnecessary navigation.

## Known Bugs

Because Open Beauty Facts is an open product database, some information may be incomplete or inconsistent. Some products may not have an image or brand available, and some searches may return limited results.

Search results are preserved when using the Back to Search Results link in the application. Refreshing the browser or navigating directly to another page may reset the search state.