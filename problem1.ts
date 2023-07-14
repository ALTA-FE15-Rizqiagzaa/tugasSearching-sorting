function sortBubble(arr:Array <number>){
    let len = arr.length
    let dupe = [...arr] //bikin duplikasi agar array tidak mempengaruhi arry aslinya

    for (let i = 0; i < len; i++){
        for (let j = 0 ; j < len; j++){
            if(dupe [j] > dupe[j + 1]){
                //ketika elemen pertama lebih besar dari elemen selanjutnya, maka dilakukan pertukaran nilai
                let varDupe = dupe[j] //untuk menampung sementara hasil nilai dari dupe
                dupe[j] = dupe[j + 1]//tukar nilai dupe j dengan nilai setelah dupe j
                dupe[j + 1] = varDupe //tukar nilai setelah dupeJ dengan nilai yang sudah ditampung di dupe j
                console.log("nilai terurut: ", varDupe)
            }
        }
    }
    return dupe

}

const nilaiAndi : Array<number> = [80,65,90,75,85,70,95,60]
console.log(sortBubble(nilaiAndi))