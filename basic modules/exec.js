const exec = requrie('child_process').exec;

var process = exec('dir');

process.stdout.on('data', function (data) ) {
    console.log(data.toString());
}