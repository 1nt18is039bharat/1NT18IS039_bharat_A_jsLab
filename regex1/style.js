function compute1(){
    let strs = ['eat', 'sleep', 'give', 'book']
    strs.forEach(element => document.getElementById('str').innerHTML= element)
    document.getElementById('str').innerHTML = strs
    const regex = new RegExp("e" )
    strs.filter((val) => {

        if(regex.test(val)==true){
            console.log(val)
        }
   
       })
    
}