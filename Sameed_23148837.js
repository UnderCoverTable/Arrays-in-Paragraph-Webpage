function main(){

    document.getElementById("a1").innerHTML = '<br> Arrays occuring in above paragraph are:';

    var arr = []; // To store the arrays it will read from the input
    var brackets = 0;   // To keep track of opening and closing brackets

    // Counters
    var i = 0;      
    var j = 0;


    // get paragraph from textarea
    var p1Content = document.getElementById("p1").value;

    // iterate through the paragraph input
    for(i; i < p1Content.length; i++){
        
        var brackets = 0;

        // we read it character by character using charAt().
        // If there is a [, we start adding the values that follow
        // We keep adding values to the array, until we read the same amount of ] as we read [
        // this helps out with multidimensional arrays

        if(p1Content.charAt(i) === "["){
            brackets++;

            while(brackets != 0){

                arr.push(p1Content.charAt(i)); // add array character to array
                i++;

                // This block allows us to keep track of opening and closing brackets
                if(p1Content.charAt(i) === "]"){
                    brackets--;
                } 
                if(p1Content.charAt(i) === "["){
                    brackets++;
                } 
            }

            arr.push(p1Content.charAt(i)); // adds the closing bracket to the array
            arr.push("<br>"); // adds new line character to follow. To print each array seperately

        }
    }

    document.getElementById("a1").innerHTML += "<br>";

    // iterate through the array storing the extarcted arrays from the paragraph
    for(j; j < arr.length; j++){

        // Prints everything except blank spaces
        if(arr[j] != ' ') document.getElementById("a1").innerHTML += arr[j];
    
    }

    
}