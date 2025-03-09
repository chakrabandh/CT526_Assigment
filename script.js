function inputarr(){
    try{
        let value = [];
        let text = "";
        let round = prompt("กรุณาระบุจำนวนสิ่งของที่คุณชอบมีกี่ชนิด???", 3);
        if ((round === null) || (isNaN(round) || (round == ""))) {
            alert("คุณไม่ได้ระบุจำนวน หรือ ไม่ได้ระบุเป็นตัวเลข")
            document.getElementById("data").innerHTML = "";
            return;
        }else{
            for (let i = 1; i <= round; i++) {
                value[i] = prompt("กรุณาระบุสิ่งของที่ชอบ ชนิดที่ "+ i +" จากทั้งหมด "+ round +" รายการ", "ไม่ระบุ");
                if((value[i] === null) || (value[i] == "")){
                    alert("คุณไม่ได้ใส่ข้อมูล หรือ ใส่ข้อมูลไม่ครบตามที่กำหนดไว้")
                    document.getElementById("data").innerHTML = "";
                    return;
                }
            }
        }
        
        if(value.length >= 1){
            for (let i = 1; i <= round; i++) {
                text += "<li>" + value[i] + "</li>";
            }
            text = "<p>รายการสิ่งของที่คุณชื่นชอบมีดังต่อไปนี้ :</p><ol>"+text+"</ol>";
        }
        document.getElementById("data").innerHTML = text;
    }
    catch(err){
        document.getElementById("data").innerHTML = err;
    }
}