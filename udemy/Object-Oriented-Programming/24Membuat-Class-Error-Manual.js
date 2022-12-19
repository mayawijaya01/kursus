// Walaupun JavaScript sudah memiliki standard class Error
// Namun alangkah baiknya, kita membedakan tiap jenis error
// Untuk membuat error sendiri secara manual sangatlah mudah, cukup membuat class turunan dari class Error
// Dan jangan lupa tambahkan parameter message, agar bisa dikirimkan ke parameter di constructor class Error

//class validationError
class validationError extends Error {
    constructor(message, field){
        super(message);
        this.field = field;
    }
}



class MathUtil {
    static sum(...numbers) {
        if (numbers.length === 0) {
            throw new validationError(`"total parameter harus lebih dari 0", "numbers"`)
        }

        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total;
    }

}
try {
    console.log(MathUtil.sum());
    console.log("maya");
} catch (error) {
if (error instanceof validationError) {
    console.log(`terjadi error di field ${error.field} dengan error : ${error.message}`);
    
}else{
    console.log(`terjadi error : ${error.message}`);
    
}
    

} finally {
    console.log("program selesai");

}

console.log("veronica");