import fs from "fs";

export interface Password {
  name: string;
  url: string;
  username: string;
  password: string;
  note: string;
}
class CSV {
  private filePath: string;
  private Passwords: Password[] = [];
  private OutputFolder = "output";
  constructor(filePath: string) {
    this.filePath = filePath;
    this.LoadPasswordFileIntoMemory();
    if (!fs.existsSync(this.OutputFolder)) {
      fs.mkdirSync(this.OutputFolder);
    }
  }
  private LoadPasswordFileIntoMemory() {
    try {
      const fileContent = fs.readFileSync(this.filePath, "utf-8");
      const lines = fileContent
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0);

      const headers = lines[0].split(",");
      const usernameIndex = headers.indexOf("username");
      const passwordIndex = headers.indexOf("password");
      const urlIndex = headers.indexOf("url");
      const nameIndex = headers.indexOf("name");
      const noteIndex = headers.indexOf("note");

      if (usernameIndex === -1 || passwordIndex === -1) {
        throw new Error("CSV file is missing 'username' or 'password' column.");
      }

      this.Passwords = lines.slice(1).map((line) => {
        const values = line.split(",");
        return {
          username: values[usernameIndex],
          password: values[passwordIndex],
          url: values[urlIndex],
          name: values[nameIndex],
          note: values[noteIndex],
        };
      });

      console.log("CSV file loaded successfully");
    } catch (error) {
      console.error("Error reading CSV file:", error);
    }
  }
  private isEmailValid(email: string) {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  }
  public GetUniqueEmails() {
    const emails = this.Passwords.filter((p) =>
      this.isEmailValid(p.username)
    ).sort((a, b) => a.username.localeCompare(b.username));
    return [...new Set(emails)];
  }
  public GetEmailWithDomain(domain: string) {
    const emails = this.GetUniqueEmails();
    return emails.filter((e) => e.username.endsWith(domain));
  }
  public GetEmailBySubstring(substring: string) {
    const emails = this.GetUniqueEmails();
    return emails.filter((e) => e.username.includes(substring));
  }

  public SearchDomain(domain: string) {
    const emails = this.GetUniqueEmails();
    return emails.filter((e) => e.username.endsWith(domain));
  }

  public SaveIntoCSV(
    result: Password | Password[],
    fileName: string = `result-${Date.now()}.csv`
  ) {
    const data = Array.isArray(result) ? result : [result];
    const headers = Object.keys(data[0]).join(",");
    const rows = data.map((d) => Object.values(d).join(","));
    const content = [headers, ...rows].join("\n");

    fs.writeFileSync(`${this.OutputFolder}/${fileName}`, content);
  }
}

export default CSV;
