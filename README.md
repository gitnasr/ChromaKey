# ChromaKey

A TypeScript utility for processing and filtering email data from CSV files.

## Features

- Load and parse CSV files containing email data
- Extract and validate email addresses
- Filter unique email addresses
- Filter emails by domain
- Search emails by substring
- Export results to CSV files

## Installation

```sh
npm install
```

Usage
The main functionality is provided through the CSV class. Here's a basic example:

import CSV from "./csv";

// Initialize with your CSV file
const csv = new CSV("passwords.csv");

// Get unique emails
const uniqueEmails = csv.GetUniqueEmails();

// Filter Gmail addresses
const gmailEmails = csv.GetEmailWithDomain("gmail.com");

// Save results to CSV
csv.SaveIntoCSV(uniqueEmails, "unique-emails.csv");
Input File Format
The input CSV file should contain the following columns:

username (email address)
password
url
name
note
Output
All generated files are saved in the output directory:

unique-emails.csv: Contains all unique email addresses
gmail-emails.csv: Contains filtered Gmail addresses
Custom named files when using SaveIntoCSV()
Development
This project uses TypeScript. To build the project:

File Structure
csv.ts - Main CSV processing class
index.ts - Entry point
output - Generated CSV files
