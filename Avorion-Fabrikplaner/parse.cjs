const fs = require('fs');

const html = fs.readFileSync('/home/nivek/.gemini/antigravity-cli/brain/fc87fd17-64e5-4bb6-a959-cf1e2c10264b/.system_generated/steps/69/content.md', 'utf-8');

const matches = [...html.matchAll(/<tr>\s*<td[^>]*>([\s\S]*?)<\/td>\s*<td>([\s\S]*?)<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>\s*<td>([\s\S]*?)<\/td>\s*<td>([\s\S]*?)<\/td>/g)];

let results = [];
matches.forEach(m => {
    let nameMatch = m[2].match(/<a[^>]*>(.*?)<\/a>/);
    if (!nameMatch) return;
    let name = nameMatch[1].trim();
    let inputsRaw = m[4].replace(/<[^>]+>/g, '').trim();
    let outputsRaw = m[5].replace(/<[^>]+>/g, '').trim();

    const parseGoods = (text) => {
        if (text === '-' || text === '') return [];
        return text.split(',').map(s => {
            let good = s.trim().replace(/\s*\([^\)]*\)/g, '').replace(/^[0-9,]+\s*/, '');
            return good.replace(/\*/g, '').trim(); // remove asterisk
        }).filter(g => g && g !== 'None');
    };

    results.push({
        id: name.toLowerCase().replace(/\s+/g, '_'),
        name,
        inputs: parseGoods(inputsRaw),
        outputs: parseGoods(outputsRaw)
    });
});

// Remove duplicates if any
const uniqueResults = [];
const seen = new Set();
results.forEach(r => {
    if (!seen.has(r.id)) {
        seen.add(r.id);
        uniqueResults.push(r);
    }
});

fs.writeFileSync('parsed_factories.json', JSON.stringify(uniqueResults, null, 2));
console.log(`Parsed ${uniqueResults.length} factories.`);
