let names = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'b', 'c', 'd',];

function removeDuplicate(nam){
    let unique = [];

    // for(let i = 0; i< name.length; i ++){
    //     const element = name[i];
    //     console.log(element);
    // }
    for(let element of nam){
       
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
   
}
const uniqueName = removeDuplicate(names);
console.log(uniqueName);











