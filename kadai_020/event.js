// ボタンがクリックされたら２秒後に文章を書き換えるプログラムの記述をする

const text = document.getElementById('text')
const btn = document.getElementById('btn')

btn.addEventListener('click',() =>{
    text.textContent="ボタンをクリックしました"
})