var keys = {
    0: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    1: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    2: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    3: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    length: 4
}

var hash = {
    '1': 'zhouwanwen.top',
    'q': 'qianduan.group',
    'w': 'www.w3cschool.cn',
    'e': 'es6.ruanyifeng.com',
    'r': 'css-tricks.com',
    't': 'tool.oschina.net',
    'y': 'jquery.com',
    'u': 'www.ui.cn',
    'i': 'easings.net',
    'o': 'codesandbox.io',
    'p': 'jspang.com',
    'a': 'caniuse.com',
    's': 'sm.ms',
    'd': 'docs.emmet.io',
    'f': 'www.fancynode.com.cn',
    'g': 'github.com',
    'h': 'www.runoob.com',
    'j': 'javascript.ruanyifeng.com',
    'k': 'miku.tools',
    'l': 'leancloud.cn',
    'z': 'www.zhangxinxu.com',
    'x': 'u.tools',
    'c': 'www.colorzilla.com',
    'v': 'www.v2ex.com',
    'b': 'blog.jobbole.com',
    'n': 'cnblogs.com',
    'm': 'developer.mozilla.org'
}

// 取出localstorage中的aaa对应的hash
var hashInLocalStorage = getFromLocalStorage('zzz')
if (hashInLocalStorage) {
    hash = hashInLocalStorage
}

// 遍历keys，生成kbd标签
for (var index = 0; index < keys.length; index++) {
    var div1 = tag('div')// 创建一个div标签
    // div1.className = "row"

    main.appendChild(div1)// 给id为x的父亲加上div标签

    var row = keys[index]// 第一个数组，第二个数组，第三个数组，第四个数组
    // console.log(row)
    for (var index2 = 0; index2 < row.length; index2++) {// index2的取值0~9，0~9，0~8，0~6
        var span1 = createSpan(row[index2])

        // 在kbd标签里面添加button按钮
        var button1 = createButton(row[index2])

        var img1 = createImage(hash[row[index2]])

        var kbd1 = tag('kbd')// 创建一个kbd标签
        kbd1.className = 'key'

        kbd1.appendChild(span1)
        kbd1.appendChild(img1)
        kbd1.appendChild(button1)

        div1.appendChild(kbd1)// 将kbd标签添加到div上
    }
}

// 监听键盘事件
document.onkeypress = function (x) {
    var key = x['key']// 知道用户按了什么键
    var website = hash[key]// 得到键对应的网站
    console.log(website)
    // 把当前地址变成新的网站地址
    // location.href = 'http://' + website
    window.open('http://' + website, '_blank')// 新窗口打开页面
}

function getFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name) || 'null')
}

function tag(tagName) {
    return document.createElement(tagName)
}

function createSpan(textContent) {
    var span1 = tag('span')
    span1.textContent = textContent// 给kbd标签添加内容
    span1.className = "text"
    return span1
}

function createButton(id) {
    // 在kbd标签里面添加button按钮
    var button1 = tag('button')
    button1.textContent = 'edit'
    button1.id = id
    // 添加点击事件
    button1.onclick = function (a) {
        // console.log(a.target.id)
        var button2 = a.target
        // console.log(button2.previousSibling)
        var img2 = button2.previousSibling

        var key = button2.id
        var x = prompt('给我一个网址')
        hash[key] = x// hash变更
        img2.src = 'http://' + x + '/favicon.ico'
        img2.onerror = function (xxx) {
            xxx.target.src = '//i.loli.net/2019/10/03/TxZ93ACQzk1dStm.png'
        }
        localStorage.setItem('aaa', JSON.stringify(hash))
        console.log(hash)
    }
    return button1
}

function createImage(domain) {
    var img1 = tag('img')
    if (domain) {
        img1.src = 'http://' + domain + '/favicon.ico'
    } else {
        img1.src = '//i.loli.net/2019/10/03/TxZ93ACQzk1dStm.png'
    }
    img1.onerror = function (xxx) {
        // console.log('下载失败了哟')
        // console.log(xxx)
        xxx.target.src = '//i.loli.net/2019/10/03/TxZ93ACQzk1dStm.png'
    }
    return img1
}