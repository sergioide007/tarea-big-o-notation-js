
function main() {
		var inicio = Date.now();
    var secuencia = [];
		for (var i = 0; i <= 45; i++) {
			try {
				var fibonacci = fibonacciLineal(i, secuencia);
				document.getElementById("fibonacci").innerHTML += "<p>"+ i + " => " + fibonacci +"<p/>";
			} catch (e) {
				console.log("error: "+e);
			}
        }
        document.getElementById("fibonacci").innerHTML += "<p>" + "Time elapsed: " + (Date.now() - inicio)/1000 + " seconds. </p>";
		
}
function fibonacciLineal(i, secuencia) {		
		if (i == 0) {
		    secuencia[i - 1] = 0;
		} else {
		    if (i - 1 <= 1) {
			secuencia[i - 1] = 1;
		    } else {
			secuencia[i - 1] = secuencia[i - 2] + secuencia[i - 3];
		    }
		}
		return secuencia[i - 1];			
} 
