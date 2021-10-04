function solution(progresses, speeds) {
    var answer = [];
    const totWorkTime = [];
    for(let i = 0 ;i < progresses.length; i++ ){
        const curProg = progresses[i];
        const curSpeed = speeds[i];
        let tmpProg = curProg;
        let workTime = 0;
        while(true){
            tmpProg = tmpProg + curSpeed;
            workTime = workTime + 1;
            if(tmpProg >= 100){
                break;
            }

        }
        totWorkTime.push(workTime);
    }

    let maxWorkTime = totWorkTime[0];
    let cnt = 0;
    for(let i=0; i < totWorkTime.length; i++ ){
        let curWorkTime = totWorkTime[i];
        if(maxWorkTime >= curWorkTime) {
            console.log(curWorkTime)
            cnt = cnt + 1;
        } else {
            console.log(curWorkTime)
            maxWorkTime = curWorkTime;
            answer.push(cnt);
            cnt = 1;
        }
    }
    answer.push(cnt);
    return answer;
}

const answer = solution([95, 90, 99, 99, 80, 99],[1, 1, 1, 1, 1, 1])
console.log(answer)