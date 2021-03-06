module.exports = function(params) {
    if (params._id) {
        return {
            common: {
                resultCode: '1',
                resultMsg: '成功'
            },
            data: {
                title: '记得早先少年时 大家诚诚恳恳',
                _id: params._id,
                sec:
                    '记得早先少年时 大家诚诚恳恳 说一句，是一句 清早上火车站 长街黑暗无行人 卖豆浆的小店冒着热气 从前的日色变得慢 车，马，邮件都慢 一生只够爱一个人 从前的锁也好看 钥匙精美有样子 你锁了，人家就懂了。 记得早先少年时 大家诚诚恳恳 说一句，是一句 清早上火车站 长街黑暗无行人 卖豆浆的小店冒着热气 从前的日色变得慢 车，马，邮件都慢 一生只够爱一个人 从前的锁也好看 钥匙精美有样子 你锁了，人家就懂了 ',
                content:
                    '## 题目\n\n给定一个字符串 (s) 和一个字符模式 (p)。实现支持 \'.\' 和 \'*\' 的正则表达式匹配。\n\n```bash\n\'.\' 匹配任意单个字符。\n\'*\' 匹配零个或多个前面的元素。\n匹配应该覆盖整个字符串 (s) ，而不是部分字符串。\n```\n\n**说明:**\n\n- s 可能为空，且只包含从 a-z 的小写字母。\n- p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。\n\n**示例 1:**\n\n```bash\n输入:\ns = "aa"\np = "a"\n输出: false\n解释: "a" 无法匹配 "aa" 整个字符串。\n```\n\n**示例 2:**\n\n```bash\n输入:\ns = "aa"\np = "a*"\n输出: true\n解释: \'*\' 代表可匹配零个或多个前面的元素, 即可以匹配 \'a\' 。因此, 重复 \'a\' 一次, 字符串可变为 "aa"。\n```\n\n**示例 3:**\n\n```bash\n输入:\ns = "ab"\np = ".*"\n输出: true\n解释: ".*" 表示可匹配零个或多个(\'*\')任意字符(\'.\')。\n```\n\n**示例 4:**\n\n```bash\n输入:\ns = "aab"\np = "c*a*b"\n输出: true\n解释: \'c\' 可以不被重复, \'a\' 可以被重复一次。因此可以匹配字符串 "aab"。\n```\n\n**示例 5:**\n\n```bash\n输入:\ns = "mississippi"\np = "mis*is*p*."\n输出: false\n```\n\n## 代码\n\n```js\n/**\n * @param {string} s\n * @param {string} p\n * @return {boolean}\n */\nvar isMatch = function (s, p) {\n    if (!s && !p) return true\n    if (!p) return false\n\n    function match(s, p) {\n        return (s === p || p === \'.\')\n    }\n\n    let dp = new Array()\n    for (let i = -1; i < s.length; i++) {\n        dp[i] = new Array()\n    }\n    dp[-1][-1] = true\n\n    for (let i = -1; i < s.length; i++) {\n        // 从 -1 开始，因为需要考虑 "a*b*" 匹配 "" 的情况\n        for (let j = 0; j < p.length; j++) {\n            if (i > -1 && dp[i - 1][j - 1] && match(s[i], p[j])) {\n                dp[i][j] = true\n            } else\n                if (p[j] === \'*\') {\n                    if (dp[i][j - 2] || dp[i][j - 1]) {\n                        dp[i][j] = true\n                    } else if (i > -1 && match(s[i], p[j - 1]) && (dp[i - 1][j - 1] || dp[i - 1][j])) {\n                        dp[i][j] = true\n                    } else {\n                        dp[i][j] = false\n                    }\n                } else {\n                    dp[i][j] = false\n                }\n        }\n    }\n    return dp[s.length - 1][p.length - 1]\n};\n```\n\n## 思路\n\n动态规划\n\n```js\ndp[i][j] 表示\n字符串 s.slice(0,i) 是否匹配字符模式 p.slice(0,j)\n```',
                createTime: '2018/02/12',
                updateTime: '2018/02/12',
                tag: '心得'
            }
        }
    } else {
        return {
            common: {
                resultCode: '1',
                resultMsg: '成功'
            },
            data: {
                articleList: [
                    {
                        title: '记得早先少年时 大家诚诚恳恳',
                        _id: '1111111',
                        sec:
                            '记得早先少年时 大家诚诚恳恳 说一句，是一句 清早上火车站 长街黑暗无行人 卖豆浆的小店冒着热气 从前的日色变得慢 车，马，邮件都慢 一生只够爱一个人 从前的锁也好看 钥匙精美有样子 你锁了，人家就懂了。 记得早先少年时 大家诚诚恳恳 说一句，是一句 清早上火车站 长街黑暗无行人 卖豆浆的小店冒着热气 从前的日色变得慢 车，马，邮件都慢 一生只够爱一个人 从前的锁也好看 钥匙精美有样子 你锁了，人家就懂了 ',
                        createTime: '2018/02/12',
                        updateTime: '2018/02/12',
                        img:
                            'http://www.epicc.com.cn/mobile_image/microShop/saveShopPhoto/ca438926e3a5e3ab881f99bec73c1716.jpg',
                        tag: '心得'
                    },
                    {
                        title: '大家诚诚恳恳',
                        _id: '2222222',
                        sec:
                            '大家诚诚恳恳 说一句，是一句 清早上火车站 长街黑暗无行人 卖豆浆的小店冒着热气 从前的日色变得慢 车，马，邮件都慢 一生只够爱一个人 从前的锁也好看 钥匙精美有样子 你锁了，人家就懂了。 记得早先少年时 大家诚诚恳恳 说一句，是一句 清早上火车站 长街黑暗无行人 卖豆浆的小店冒着热气 从前的日色变得慢 车，马，邮件都慢 一生只够爱一个人 从前的锁也好看 钥匙精美有样子 你锁了，人家就懂了 ',
                        createTime: '2018/01/12',
                        updateTime: '2018/01/12',
                        tag: '心得'
                    },
                    {
                        title: '说一句，是一句',
                        _id: '3333333',
                        sec:
                            '说一句，是一句 清早上火车站 长街黑暗无行人 卖豆浆的小店冒着热气 从前的日色变得慢 车，马，邮件都慢 一生只够爱一个人 从前的锁也好看 钥匙精美有样子 你锁了，人家就懂了。 记得早先少年时 大家诚诚恳恳 说一句，是一句 清早上火车站 长街黑暗无行人 卖豆浆的小店冒着热气 从前的日色变得慢 车，马，邮件都慢 一生只够爱一个人 从前的锁也好看 钥匙精美有样子 你锁了，人家就懂了 ',
                        createTime: '2017/02/12',
                        updateTime: '2017/02/12',
                        img:
                            'http://www.epicc.com.cn/mobile_image/microShop/saveShopPhoto/ca438926e3a5e3ab881f99bec73c1716.jpg',
                        tag: '代码'
                    }
                ]
            }
        }
    }
}
