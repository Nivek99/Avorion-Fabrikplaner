const { JSDOM } = require('jsdom');

JSDOM.fromURL("https://avorion.fandom.com/wiki/Factories").then(dom => {
    const document = dom.window.document;
    const tables = document.querySelectorAll('.article-table');
    // Usually the main factories table is one of the article tables
    let results = [];
    
    tables.forEach(table => {
        const rows = table.querySelectorAll('tr');
        rows.forEach((row, i) => {
            if (i === 0) return; // header
            const cols = row.querySelectorAll('td');
            if (cols.length >= 3) {
                const name = cols[0].textContent.trim();
                const inputsText = cols[1].textContent.trim();
                const outputsText = cols[2].textContent.trim();
                
                const parseGoods = (text) => {
                    if (text === '-' || text === '') return [];
                    return text.split(',').map(s => s.trim().replace(/\s*\([^\)]*\)/g, '')); // remove brackets like (x2)
                };
                
                results.push({
                    name,
                    inputs: parseGoods(inputsText),
                    outputs: parseGoods(outputsText)
                });
            }
        });
    });
    console.log(JSON.stringify(results, null, 2));
}).catch(err => {
    console.error(err);
});
