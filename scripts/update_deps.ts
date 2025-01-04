import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function updateDependencies() {
    try {
        console.log('Updating dependencies...');
        const { stdout, stderr } = await execAsync('npm update');
        if (stderr) {
            console.error(`Error: ${stderr}`);
        }
        console.log(`Output: ${stdout}`);
        console.log('Dependencies updated successfully.');
    } catch (error) {
        console.error(`Failed to update dependencies: ${error.message}`);
    }
}

updateDependencies();