const craft_table = document.getElementById("craftingTable"),
recipe = document.getElementById("recipe");

recipe.childNodes.item(1).addEventListener("click", (e) => {
    e.preventDefault();
    run(1)
})

/** @typedef {boolean} bool */
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

/**
 * @param {HTMLElement} elm 
 * @param {number} num1 
 * @param {number} num2 
 * @param {bool} isTable 
 */
function select(elm, num1, num2, isTable){
    isTable?
    elm.children.item(1).children.item(num1).children.item(num2):
    elm.children.item(num1).children.item(num2);
}