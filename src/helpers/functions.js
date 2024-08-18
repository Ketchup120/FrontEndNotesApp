export function initials(a){
    if(a.includes(" ")){
        let words = a.split(" ",2);
        let x = words[0][0]
        let b = x.concat(words[1][0])
        return b.toUpperCase()
    }
    else
        return a[0].toUpperCase()
}
