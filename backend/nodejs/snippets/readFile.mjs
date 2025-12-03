import { readFile } from "fs/promises";
import { join } from "path";

const __dirname = process.cwd();

const file = "__dirname.mjs";

const absoluteFilePath = join(__dirname, file);

// Using readFile to asynchronously read the contents of the file
async function readAndPrintFile() {
  try {
    // Read file contents asynchronously
    const data = await readFile(absoluteFilePath, "utf8");

    // The file contents are available in the 'data' variable
    console.log("File contents:", data);
  } catch (error) {
    // Handle errors, if any
    console.error("Error reading file:", error);
  }
}

// Call the function to read and print the file contents
readAndPrintFile();
