let paragraph = document.getElementById("para")

export function get_names (){

    let names = ["ali" , "saad" , "hamza" , "sara"]

    names.forEach(  (elem ) => {
            
   paragraph.innerText +=  `${elem} <br>`
 } )
}






