//有一串数字用冒泡排序进行排序：5，8，20，79，32，68

 function maopao(a) {
    for(let i = 0; i < a.length-1; i++) {
        for(let j = 0; j < a.length-i-1; j++){
            if(a[j] > a[j+1]){
                var swap = a[j];
                a[j] = a[j+1];
                a[j+1] = swap;
            }
        }
    }
    console.log(a);
}
let a = [5,8,20,79,32,68];
maopao(a);



