import fs from 'fs';
import path from 'path';

export function getAllPosts() {
  const filePath = path.join(process.cwd(), 'data', 'blogs.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}
 