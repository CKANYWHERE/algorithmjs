
function solution (data){
    for(elem of data) {
        const decrypt = elem.replace(/ /g,'').replace(/\+/g,'1').replace(/-/g,'0')
        console.log(String.fromCharCode(parseInt(decrypt,2)));
    }
}
solution(['   + -- + - + -   ',
    '   + --- + - +   ',
    '   + -- + - + -   ',
    '   + - + - + - +   '
])