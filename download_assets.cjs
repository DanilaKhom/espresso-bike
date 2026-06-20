const fs = require('fs');
const path = require('path');
const https = require('https');

const assetsDir = path.join(__dirname, 'public', 'images');

// Ensure directory exists
if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

const assets = [
    {
        url: 'https://eb-coffee.ru/wp-content/uploads/2022/12/logo_gorizontalny_variant-White.png',
        filename: 'logo-white.png'
    },
    {
        url: 'https://eb-coffee.ru/wp-content/uploads/2022/11/IMG_9418-1-scaled.jpg',
        filename: 'about-1.jpg'
    },
    {
        url: 'https://eb-coffee.ru/wp-content/uploads/2022/11/IMG_8759-scaled.jpg',
        filename: 'about-2.jpg'
    },
    {
        url: 'https://eb-coffee.ru/wp-content/uploads/2026/04/desktop-menu-1.png',
        filename: 'menu-1.png'
    },
    {
        url: 'https://eb-coffee.ru/wp-content/uploads/2026/04/desktop-menu2-2048x1934.png',
        filename: 'menu-2.png'
    }
];

function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to get '${url}' (Status Code: ${response.statusCode})`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${path.basename(dest)}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {}); // Delete the file on error
            reject(err);
        });
    });
}

async function main() {
    console.log('Starting assets download...');
    for (const asset of assets) {
        const dest = path.join(assetsDir, asset.filename);
        try {
            await download(asset.url, dest);
        } catch (err) {
            console.error(`Error downloading ${asset.filename}:`, err.message);
        }
    }
    console.log('Assets download finished.');
}

main();
