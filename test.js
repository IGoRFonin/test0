const { exec } = require('child_process');

exec("git branch -r", { cwd: `/Users/ifonin/mp/megaphone/react-universal-unite` }, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    const t = stdout.split('\n').map(item => item.trim().replace('origin/', ''));
    console.log(t);
    console.log(`stderr: ${stderr}`);
});

