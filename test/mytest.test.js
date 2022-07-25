import Vue from "../src/index";

test('My tests',()=>{
    const fs = require("fs");
    const { JSDOM } = require("jsdom");
    document.body.innerHTML = fs.readFileSync("example/demo.html")
    const html = fs.readFileSync("example/demo.html");
    const page = new JSDOM(html)
    
    let obj = {}
    obj.$el = page.window.document.querySelector('#app')
    obj.$data = page.window.data || {}

    let obj2 = {
        el: '#app',
        data: {
            num1: 0,
            num2: 0,
            res: 0,
        },
        methods: {
            handleClick: function () {
              if(!Number(this.num1) || !Number(this.num2)){
                alert('Error! 输入的不为数字')
              }
              this.res = Number(this.num1) + Number(this.num2);
            },
          },

    }
    document = page.window.document;
    new Vue(obj2)
    expect(document.getElementById('inputNums').innerHTML).toBe('您正在输入：0+0=0')
    obj2.data.num1=4;
    obj2.data.num2=6;
    expect(document.getElementById('inputNums').innerHTML).toBe('您正在输入：4+6=0')
    document.getElementById('calButton').click();
    expect(document.getElementById('inputNums').innerHTML).toBe('您正在输入：4+6=10')
});
