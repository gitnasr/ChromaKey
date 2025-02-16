
# ChromaKey 📧

A robust TypeScript utility for processing, filtering, and analyzing email data from CSV files. ChromaKey provides a streamlined way to handle email-related operations with built-in validation and filtering capabilities.

## 🚀 Features

- Efficient CSV file processing for email data
- Advanced email validation and extraction
- Smart duplicate detection and removal
- Domain-specific filtering system
- Flexible email search functionality with pattern matching
- Customizable CSV export options
- Type-safe implementation with TypeScript

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## ⚡ Installation

```bash
# Using npm
npm install

# Using yarn
yarn install
```

## 💻 Usage

The library centers around the `CSV` class, which provides all core functionality:

```typescript
import { CSV } from "./csv";

// Initialize with your data file
const emailProcessor = new CSV("source-data.csv");

// Get all unique email addresses
const uniqueEmails = emailProcessor.GetUniqueEmails();

// Filter for specific domain
const gmailAddresses = emailProcessor.GetEmailWithDomain("gmail.com");

// Search for pattern
const matchingEmails = emailProcessor.SearchEmails("john");

// Export results
emailProcessor.SaveIntoCSV(uniqueEmails, "unique-addresses.csv");
```

## 📊 Input File Format

Your input CSV file should follow this structure:

| Column    | Description           | Required |
|----------|-----------------------|----------|
| username | Email address         | Yes      |
| password | Account password      | Yes      |
| url      | Associated URL        | No       |
| name     | User's name          | No       |
| note     | Additional comments   | No       |

## 📁 Output Files

All processed files are stored in the `output/` directory:

```
output/
├── unique-emails.csv      # Deduplicated email addresses
├── domain-filtered.csv    # Domain-specific results
└── custom-exports/        # Custom export location
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Generate documentation
npm run docs
```

## 📂 Project Structure

```
src/
├── csv.ts          # Core CSV processing implementation
├── index.ts        # Main entry point
├── types/          # TypeScript type definitions
├── utils/          # Helper utilities
└── validators/     # Email validation logic
```

## 🔍 API Reference

### CSV Class

#### `constructor(filePath: string)`
Initializes a new CSV processor with the specified file.

#### `GetUniqueEmails(): string[]`
Returns an array of deduplicated email addresses.

#### `GetEmailWithDomain(domain: string): string[]`
Filters emails by specified domain.

#### `SearchEmails(pattern: string): string[]`
Searches emails containing the given pattern.

#### `SaveIntoCSV(data: string[], filename: string): void`
Exports data to a CSV file.

Made with ❤️ by [gitnasr](@gitnasr)

