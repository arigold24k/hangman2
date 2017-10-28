var letter = function letter(x, letguess) {
    this.letra = x;
    //function to return appropiate letter for display
    this.display = function display()  {
        //checks if character is in space
        if (this.letra === " ") {
            return this.letra;
        }else {
            //checks to see if letter is in letter guess array.
            if (letguess.indexOf(this.letra.toLowerCase()) === -1) {
                return "_";
            } else {
                return this.letra;
            }
        }
    }
};

module.exports = {
    letter: letter
};