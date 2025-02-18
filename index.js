console.log("iTS A PRIME NUMBER");
const n =9; 
const prime=()=>{
    if(n<2) return false;
    if(n==2) return true;
    for(let i =2; i<n; i++){
        if(n%i==0){
        return  false;
        }
    }
return true;
}

if(prime()){
    console.log("prime");
    
}
else{
    console.log("not prime");
    
}
