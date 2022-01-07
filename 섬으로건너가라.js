
function solution (data){
    /*
    * 9:00 25
    * 9:10 40
    * 9:20 55
    * 9:30 70
    * 9:40 85
    * 9:50 100
    * */
    let yearDate = 0;
    for(let i = 1 ; i < 11 ; i++) {
        yearDate += 2 ** i;
    }
    const year = (data/1200) / yearDate;
    let day = (data/1200) %yearDate;
    let month = 0;
    for(let i = 10; i > 0; i--) {
        month++;
        if(day < 2**i ){
            break;
        }
        day -= 2**i;
    }
    let hour = (data%1200)/100 + 9;
    let startMinutes = [25,40,55,70,85,100];
    let minute = 0;
    for (const i in startMinutes) {
        if(startMinutes[i] > (data%1200)%100){
            minute = i * 10;
            break;
        }
    }
    return [year,month,day,hour,minute]
}
const answer = solution(14000605)
console.log(answer)