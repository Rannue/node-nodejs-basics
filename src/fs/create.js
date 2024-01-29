import { writeFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';

const currentFileUrl = import.meta.url;
const currentDirectory = join(fileURLToPath(new URL('.', currentFileUrl)), 'files', 'fresh.txt');

const create = async () => {
    try {
        await writeFile(currentDirectory, 'I am fresh and young', { flag: 'wx' });
        console.log('New file fresh.txt');
      
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();
