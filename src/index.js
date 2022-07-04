module.exports = function toReadable (number) {
   let onez = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
   let ten = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
   let hun = 'hundred'.split(' ');
   
 

   if(number<20) {return onez[number]}
   if(number<100 && number>19){
        number = number.toString().split('');
        number = number.map(Number);
        if(number[1] == 0) {return ten[number[0]-2]} else {
        return ten[number[0]-2] + ' ' + onez[number[1]]}
   }
   if(number<1000 && number > 99){
       number = number.toString().split('');
        number = number.map(Number);
       
        if(number[1] == 0 && number[2] == 0){
           return onez[number[0]] + ' ' + hun[0];
        }
        if(number[2] == 0){
           return onez[number[0]] + ' ' +hun[0] + (number[1] === 1 ? ' ten' : ' ' + ten[number[1]-2])
        }
        if (number[1] == 1){
           // let z = number.shift();
           // z = z.toString().split('');
           // z= z.map(Number);
           let z = Number(number.join('')) % 100;
           return onez[number[0]] + ' ' +hun[0] +' ' + onez[z] ;
        }
                    
        return onez[number[0]] + ' ' +hun[0] +' ' + (number[1] === 0 ? '' : ten[number[1]-2] + ' ')  +onez[number[2]];
   }
}
    

