
//변수선언

let date = new Date()

let year = Number(date.getFullYear())

let month = Number(date.getMonth())

let temp = 1

let firstd = new Date(date.getFullYear(),date.getMonth(),temp)


let first = document.querySelector('#current')

let body = document.querySelector('#달력바디')

let plus = document.querySelector("#plus")

let minus = document.querySelector("#minus")



//이벤트리스너

plus.addEventListener("click",click)
minus.addEventListener("click",click)


//함수

function main(){
    const div = document.createElement("div")
    div.setAttribute("id","날짜데이터")
    while (month == firstd.getMonth()){
        const span = document.createElement("span")
        const br = document.createElement("br")
        span.innerText = temp
        span.setAttribute("class","d"+firstd.getDay())
        if(firstd.getDate() == new Date().getDate() && firstd.getMonth() == new Date().getMonth() && firstd.getFullYear() == new Date().getFullYear()){
            span.setAttribute("id","today")
        }
        div.append(span)
        temp += 1
        if (firstd.getDay() == 0){
            div.append(br)
        }
        firstd = new Date(date.getFullYear(),date.getMonth(),temp)
    }
    temp = 1
    body.append(div)
    first.innerText = date.getFullYear() +"."+(month+1)
}

function click(e){
    document.getElementById("날짜데이터").remove();
    if (e.target.id == "plus"){
        month = Number(date.getMonth()) + 1
    }else{
        month = Number(date.getMonth()) - 1
    }
    year = Number(date.getFullYear())
    if (month > 11){
        month = 0
        year += 1
    }
    if (month == -1){
        month = 11
        year -= 1
    }
    date = new Date(year,month)
    firstd = new Date(date.getFullYear(),date.getMonth(),temp)
    main()
}

//실행

main()