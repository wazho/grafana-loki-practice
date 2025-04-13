setInterval(() => {
  console.log(JSON.stringify({
    level: 'info',
    message: 'This is info level log',
    timestamp: new Date().toISOString()
  }));
}, 3000);

setInterval(() => {
  console.error(JSON.stringify({
    level: 'error',
    message: 'Oops, something went wrong',
    timestamp: new Date().toISOString()
  }));
}, 10000);
