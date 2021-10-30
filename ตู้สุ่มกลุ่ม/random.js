var prachakorn1 = ['พี', 'บิ๊ก', 'นุ่น', 'นัท', 'ตุ้ย', 'โน๊ต', 'คิม', 'เติ้ล', 'เนย', 'หยก', 'เจ', 'โดนัท', 'สปาย', 'บอส', 'เบส', 'เบน', 'นุ่ม', 'โจม', 'ฟิล์ม', 'ฟิว', 'เกม'];
var pic = ["kuy.jpg", "ben.jpg", "j.jpg", "หล่อเท่.jpg", "tle.jpg"]
let quantityEachGroup = 5;

function random() {
    document.querySelector(".ans").innerHTML = '';
    let prachakorn = [];
    let group = [
        [],
        [],
        [],
        [],
        []
    ];
    prachakorn1.map((x) => { prachakorn.push(x) })
    console.log(prachakorn);
    let ran = 0;
    for (let i = 0; i < group.length; i++) {
        ran = Math.floor(Math.random() * (prachakorn.length - 0) + 0);
        if (group[i].length < quantityEachGroup) {
            group[i].push(prachakorn[ran])
            prachakorn.splice(ran, 1)
            i--;
        }
        if (prachakorn.every((x) => { x == '' })) {
            group.map((x, index) => {
                if (index == 4) {
                    document.querySelector(".ans").innerHTML += `Group ${Math.floor(Math.random() * (5 - 1) + 1)} ${x} <br>`
                } else
                    document.querySelector(".ans").innerHTML += `Group${index+1} ${x} <br>`
            });
            document.querySelector('.ig').innerHTML = `<img src="${pic[Math.floor(Math.random() * (5 - 0) + 0)]}" width="25%" hight="25%" class="rounded mx-auto d-block">`;

            console.log("Complete");
            return
        }
    }

}



function setquantity(params) {
    quantityEachGroup = params;
    return "เย้";

}

function addPrachakorn(params) {
    if (prachakorn.entries(params)) {
        prachakorn.push(params);
        console.log(prachakorn);
        return params + " เข้าแล้ว";
    }
    return "ไม่ได้แดก";
}

function delPrachakorn(params) {
    console.log(prachakorn);
    if (prachakorn.entries(params)) {
        prachakorn.splice(prachakorn.indexOf(params), 1);
        console.log(prachakorn);
        return 'ลบไม่ได้ช่วยให้ลืม';
    }
    return 'ไม่มีไอชิบหาย';
}

// console.log(random());
// console.log(group);
// console.log(Math.floor(Math.random() * (4 - 1) + 1));
// console.log(delPrachakorn('เติ้ล'));
// console.log(prachakorn);
// console.log(addPrachakorn("คน"));