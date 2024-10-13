const craft_table = document.getElementById("craftingTable"),
recipe = document.getElementById("recipe");

recipe.childNodes.item(1).addEventListener("click", (e) => {
    e.preventDefault();
    run(1)
})

/**
 * @overload
 * @returns {void}
 * 
 * 
 * @overload
 * @param {number} num 
 * @returns {void}
 */
function run(num){
    if (num !== undefined){
        alert("It's Message.")
    }
    else{
        throw new SyntaxError("It's Error.");
    }
}