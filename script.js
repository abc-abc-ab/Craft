const craft_table = document.getElementById("craftingTable"),
recipe = document.getElementById("recipe");
let all = [];/* this is Comment. */

try{
recipe.children.item(1).childNodes.forEach((v, k, p) => {
    if (v instanceof HTMLElement){
        for (let index0 = 0;index0 == v.children.length - 1;index0++){
            all.push(v.children.item(index0))
        }
    }
});
}catch(e){
    alert(e)
}
alert(all.join(","))
select(recipe, 0, 0, true).addEventListener("click", (e) => {
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
        alert("It's item("+num+")")
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
    return (isTable?
    elm.children.item(1).children.item(num1).children.item(num2):
    elm.children.item(num1).children.item(num2));
}
