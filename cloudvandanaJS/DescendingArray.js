var a = [1,2,3,4,5,6];

function Descending(a) 
{
    for (var i = 0; i < a.length ; i++) {
        for (var j = 0; j < a.length ; j++) {
            if (a[i] > a[j]) {
               
                var temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    return a;
}
var sorte = Descending(a);
console.log(sorte);
