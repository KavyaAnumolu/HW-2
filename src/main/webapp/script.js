function calculate(numbers) {
    var errormessage = document.getElementById("errormessage");
    errormessage.innerHTML = "";
    
    data = numbers.replace(/(^[,\s]+)|([,\s]+$)/g, '');
    data = numbers.split(',');
    if (data.length !== 10) {
        errormessage.innerHTML = "Enter atleast 10 numbers";
        return false;
    }
    var count = 0;
    var sum = 0;
    var averge = 0;
    var maximum = 0;
    for (var x of data) {
        if (x === "") {
            errormessage.innerHTML = "Enter 10 numbers";
            return false;
        }
        x = x - '0';
        if (x < 1 || x > 100) {
            errormessage.innerHTML = "Enter numbers ranging from 1 through 100 ";
            return false;
        }
        
    }
    
}