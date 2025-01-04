import { ESLint } from "eslint";

(async function main() {
    const eslint = new ESLint({ overrideConfigFile: ".eslintrc.js" });
    const results = await eslint.lintFiles(["src/**/*.ts"]);

    const formatter = await eslint.loadFormatter("stylish");
    const resultText = formatter.format(results);

    console.log(resultText);

    const hasErrors = results.some(result => result.errorCount > 0);
    if (hasErrors) {
        process.exit(1);
    }
})();