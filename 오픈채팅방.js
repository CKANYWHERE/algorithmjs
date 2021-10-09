function solution(record) {
    var answer = [];
    const users = {};
    const histories = []
    for (const elem of record) {
        const [cmd, userId, nickname] = elem.split(' ');
        if(cmd === "Enter"){
            users[userId] = nickname;
            histories.push({cmd, userId});
        }
        else if(cmd === "Leave"){
            histories.push({cmd, userId})
        }
        else if(cmd === "Change"){
            users[userId] = nickname;
        }
    }

    for (const history of histories) {
        if(history.cmd === 'Enter') {
            answer.push(`${users[history.userId]}님이 들어왔습니다.`)
        }
        else if(history.cmd === 'Leave'){
            answer.push(`${users[history.userId]}님이 나갔습니다.`)
        }
    }
    return answer;
}

const answer = solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"])
console.log(answer)