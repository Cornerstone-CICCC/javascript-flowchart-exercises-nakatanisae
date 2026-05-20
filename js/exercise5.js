let name = 'Sae'
let score = 95

if( score >= 40 ){
    if ( score >= 80){
        console.log(`Grade A, ${name}`)
    }else{
        if( score >= 60){
            console.log(`Grade B, ${name}`)
        }else{
            console.log(`Grade C, ${name}`)
        }
    }

}else{
            console.log(`No Grade, ${name}`)
        }
