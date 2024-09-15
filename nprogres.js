const os = require('os');
const { exec } = require('child_process'); 
const platform = os.platform();
 
if (platform === 'win32') {
   exec('.\\test\\logo.jpg', (error, stdout, stderr) => {  
});
} else if (platform === 'darwin') {
  console.log('运行在macOS系统上');
} else if (platform === 'linux') {
  console.log('运行在Linux系统上');
} else {
  console.log('未知操作系统');
}