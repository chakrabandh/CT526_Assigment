# โครงสร้างและการทำงานของ WebApp
โดย นายจักรพันธุ์ ฤทธิแผลง รหัสนักศึกษา 67130401

## 📄 ภาพรวมของโปรแกรม

โปรแกรมนี้เป็นส่วนหนึ่งของรายวิชา CT526 การโปรแกรมและขั้นตอนวิธี (Assign #4) โดยมีวัตถุประสงค์เพื่อสร้างเว็บแอพพลิเคชันอย่างง่ายและทดสอบการทำงานของ DOM โปรแกรมประกอบด้วย 3 ไฟล์หลัก ได้แก่:

1. **index.html** - โครงสร้างหน้าเว็บและองค์ประกอบ HTML
2. **script.js** - โค้ด JavaScript สำหรับจัดการการทำงานและตรรกะของโปรแกรม
3. **style.css** - การจัดรูปแบบและสไตล์ด้วย CSS

## 🔍 รายละเอียดของแต่ละไฟล์

### 1. index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="script.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>วันนี้...เรียนเรื่องอะไรดี</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <label>CT526 การโปรแกรมและขั้นตอนวิธี Assign #4</label></br></br>
        <button onclick="inputarr()">กดเพื่อ Input ข้อมูล</button>
        <p id="data"></p>
    </div>
</body>
</html>
```

ไฟล์นี้กำหนดโครงสร้างพื้นฐานของหน้าเว็บ โดยมีส่วนประกอบหลักดังนี้:
- การกำหนดชนิดเอกสารเป็น HTML5 ด้วย `<!DOCTYPE html>`
- การเชื่อมโยงไฟล์ JavaScript และ CSS ด้วย `<script>` และ `<link>`
- การกำหนดเมตาแท็กสำหรับการแสดงผลบนอุปกรณ์ต่างๆ
- องค์ประกอบหลักประกอบด้วยข้อความชื่อวิชา, ปุ่มสำหรับป้อนข้อมูล และพื้นที่แสดงผล `<p id="data">`

### 2. script.js

```javascript
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
```

ไฟล์นี้ประกอบด้วยฟังก์ชัน `inputarr()` ซึ่งเป็นหัวใจของการทำงานของแอพพลิเคชัน:

1. **การจัดการข้อมูลนำเข้า**:
   - ใช้ `prompt()` เพื่อรับจำนวนสิ่งของที่ผู้ใช้ต้องการป้อน
   - ตรวจสอบความถูกต้องของข้อมูล (ไม่เป็นค่าว่างหรือไม่ใช่ตัวเลข)
   - ใช้ลูป `for` เพื่อรับข้อมูลสิ่งของแต่ละรายการ

2. **การตรวจสอบข้อผิดพลาด**:
   - มีการใช้ `try-catch` เพื่อจัดการข้อผิดพลาดที่อาจเกิดขึ้น
   - ตรวจสอบการยกเลิกโดยผู้ใช้ (`null`) หรือการไม่ป้อนข้อมูล (`""`)
   - แสดงข้อความเตือนด้วย `alert()` เมื่อพบข้อผิดพลาด

3. **การสร้างรายการและแสดงผล**:
   - สร้าง HTML สำหรับแสดงรายการด้วย `<ol>` และ `<li>`
   - ใช้ `document.getElementById("data").innerHTML` เพื่อแสดงผลข้อมูลในหน้าเว็บ

### 3. style.css

ไฟล์นี้กำหนดรูปแบบและการจัดวางองค์ประกอบต่างๆ ในหน้าเว็บ โดยมีจุดเด่นดังนี้:

1. **การนำเข้าฟอนต์**:
   - ใช้ฟอนต์ 'Prompt' จาก Google Fonts ซึ่งเป็นฟอนต์ที่รองรับภาษาไทยได้ดี

2. **การจัดรูปแบบพื้นฐาน**:
   - กำหนดค่าเริ่มต้นด้วย CSS Reset
   - สร้างพื้นหลังแบบไล่ระดับสี (Gradient)
   - จัดวางเนื้อหาให้อยู่กึ่งกลางหน้าจอด้วย Flexbox

3. **การออกแบบองค์ประกอบ**:
   - สร้างคอนเทนเนอร์ด้วยพื้นหลังสีขาวและเงา
   - ออกแบบปุ่มที่มีเอฟเฟกต์เมื่อ hover และกด
   - สร้างพื้นที่แสดงผลข้อมูลที่มีเส้นขอบด้านซ้ายสีน้ำเงิน

4. **การตอบสนองต่อขนาดหน้าจอ**:
   - ใช้ Media Queries เพื่อปรับขนาดและการจัดวางเมื่อใช้งานบนอุปกรณ์ขนาดเล็ก

## 🔄 การทำงานของโปรแกรม

1. เมื่อผู้ใช้เปิดหน้าเว็บ จะเห็นข้อความชื่อวิชาและปุ่มสำหรับป้อนข้อมูล
2. เมื่อคลิกที่ปุ่ม ฟังก์ชัน `inputarr()` จะถูกเรียกใช้งาน
3. โปรแกรมจะถามจำนวนสิ่งของที่ผู้ใช้ชื่นชอบ
4. จากนั้นจะถามชื่อสิ่งของแต่ละรายการตามจำนวนที่ระบุ
5. หากผู้ใช้ป้อนข้อมูลไม่ถูกต้องหรือไม่ครบถ้วน จะแสดงข้อความเตือน
6. เมื่อป้อนข้อมูลครบถ้วน โปรแกรมจะสร้างรายการเรียงลำดับและแสดงผลในส่วน `<p id="data">`

## 🛠️ เทคนิคการเขียนโปรแกรมที่น่าสนใจ

1. **การจัดการข้อผิดพลาด**: มีการใช้ `try-catch` และการตรวจสอบเงื่อนไขเพื่อจัดการกับข้อมูลที่ไม่ถูกต้อง
2. **การใช้ CSS ขั้นสูง**: มีการใช้ Linear Gradient, Box-shadow, Transition และ Transform เพื่อสร้างเอฟเฟกต์การเคลื่อนไหว
3. **การออกแบบที่ตอบสนอง**: มีการใช้ Media Queries เพื่อรองรับการแสดงผลบนอุปกรณ์ที่หลากหลาย
4. **การสร้าง HTML แบบไดนามิก**: มีการสร้าง HTML tags ในระหว่างการทำงานของโปรแกรมเพื่อแสดงผลข้อมูล

โดยสรุป โปรแกรมนี้แสดงให้เห็นถึงการประยุกต์ใช้ HTML, CSS และ JavaScript เพื่อสร้างเว็บแอพพลิเคชันอย่างง่ายที่มีความสามารถในการรับข้อมูลจากผู้ใช้และแสดงผลในรูปแบบที่น่าสนใจ ซึ่งสอดคล้องกับวัตถุประสงค์ของวิชา CT526 การโปรแกรมและขั้นตอนวิธี
