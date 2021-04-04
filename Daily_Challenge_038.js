// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"



function acum(s){
    let strs = s.toLowerCase().split('')
   
    let str = []
    let strss = []

    for( let i = 0; i <= strs.length - 1 ; i++){
    str.push(strs[i].repeat(i + 1))
    }
    
    for(let i = 0; i <= str.length - 1; i++){
        strss.push(str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1))
    }


    console.log(strss.join('-'))
    

}
acum('cwAT')