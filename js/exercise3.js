let a = 30;
let b = 15;
let c = 20;

if( a > b ){
    if( a > c ){
        console.log(a);
    }else{
        if( b > c ){
            console.log(b);
        }else{
            console.log(c);
        }
    }
}else{
    if( b > c ){
        console.log(b);
    }else{
        console.log(c);
    }
}
    