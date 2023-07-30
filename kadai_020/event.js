// ボタンがクリックされたら２秒後に文章を書き換えるプログラムの記述をする

const text = document.getElementById('text')
const btn = document.getElementById('btn')

btn.addEventListener('click',() =>{

    // 2000ミリ秒後に表示する処理
    setTimeout(() => {
        text.textContent="ボタンをクリックしました。"
    },2000)
})