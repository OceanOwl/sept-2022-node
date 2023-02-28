const fs = require('node:fs/promises');
const path = require('node:path');

const builder = async () => {
    try {
        const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt']
        const folderNames = ['folder1', 'folder2', 'folder3', 'folder4', 'folder5']

        await Promise.all(folderNames.map(async (folderName,index)=>{
            const folderPath = path.join(process.cwd(), folderName)

            await fs.mkdir(folderPath, {recursive: true})
            await fs.writeFile(path.join(folderPath, fileNames[index]), 'Hello')
        }))}
    catch (e) {
        console.error(e.message)
    }
}

builder().then();

