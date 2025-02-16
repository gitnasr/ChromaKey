import CSV from "./csv";

const c = new CSV("passwords.csv");

async function main() {
  const emails = c.GetUniqueEmails();

  const emailsWithGmail = c.GetEmailWithDomain("gmail.com");

  c.SaveIntoCSV(emails, "unique-emails.csv");
  c.SaveIntoCSV(emailsWithGmail, "gmail-emails.csv");
}

main();
