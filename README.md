# Earthquake Data Web App Documentation

This is the documentation for the Earthquake Data Web App. It retrieves earthquake data from an external API and displays it in a table format.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

<!-- TOC --><a name="installation"></a>
## Installation
To run the Earthquake Data Web App locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/EmreKaram/AFAD-API.git
   cd AFAD-API
   ```
   
   ```bash
   npm install
   ```
   
   ```bash
   API_URL=https://your-api-url.com
   ```
   
   Start the server:
   ```bash 
   nodemon app.js
   ```
   The app will be accessible at http://localhost:3000.

## Usage

Once the app is running, you can access it through a web browser. There are two main routes:

- `/`: Displays earthquake data retrieved from the dynamic API endpoint.
- `/test`: Displays earthquake data retrieved from the static API endpoint.

## API Reference

This app uses the following external API endpoints:

- Dynamic Earthquake Data: `GET /dynamic`
- Static Earthquake Data: `GET /static`

The app fetches data from these endpoints using the Axios library.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m "Add feature"`
4. Push to your forked repository: `git push origin feature-name`
5. Create a pull request on the original repository.

## License

MIT License

Copyright (c) 2023 Ingenium

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
