let status=()=>{
    let infoAPI='https://v2.jokeapi.dev/joke/Any'
    document.getElementById("headerStatus").innerText='Trạng thái hoạt động';
    fetch(infoAPI)
        .then(function (res){
            return res.json();
        })
        .then(function(info){
            if (info.safe){
                let html=`<h1 class='workingStatus'>Hệ thống đang hoạt động</h1>`
                document.getElementById("root").innerHTML=html;
            }
            else{
                let html=`<h1 class='workingStatus' style="background-color:red">Hệ thống dừng hoạt động</h1>`
                document.getElementById("root").innerHTML=html;
            }
        })
}

let setting=()=>{
    document.getElementById("headerStatus").innerText='Cài đặt và thông số';
    let html=`             <div class="row">
    <div class="content_block col p-5 t-5 m-11">
        <h2>Thông số hoạt động</h2>
        <p id="press">Số lần đã nhấn:</p>
        <p id="pressure">Lực nén hiện tại:</p>
        <p id="time">Thời gian đã giữ:</p>
    </div>
    <form id="form1"
    class="content_block col p-5 t-5 m-11" action="https://formsubmit.co/226434e04ecfaef8414ffd32d50e9f01" method="POST">
   <h2>Cài đặt thông số </h2>
   <input class="input_field" type="number" name="push" placeholder="Số lần nhấn"> 
   <input class="input_field" type="number" name="pressure" placeholder="Lực nén"> 
   <input class="input_field" type="number" name="time" placeholder="Thời gian giữ"> 
   <button type="submit">thiết lập</button>
</form>
</div>
<div class="row">
   
</div>`
    document.getElementById("root").innerHTML=html;
    let infoAPI='https://v2.jokeapi.dev/joke/Any'
    fetch(infoAPI)
        .then(function (res){
            return res.json();
        })
        .then(function(info){
            let htmls=`<p>Số lần đã nhấn: ${info.id}</p>`;
            document.getElementById('press').innerHTML=htmls;
            let htmls1=`<p>Lực nén hiện tại: ${info.id*2}</p>`;
            document.getElementById('pressure').innerHTML=htmls1;
            let htmls2=`<p>Thời gian đã giữ: ${info.id*3}</p>`;
            document.getElementById('time').innerHTML=htmls2;
        })
}
let report=()=>{
    document.getElementById("headerStatus").innerText='Báo cáo';
}