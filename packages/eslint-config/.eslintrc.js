/*
 * @Author: solaliuqi chelsealiuqi@163.com
 * @Date: 2025-01-09 16:04:40
 * @LastEditors: solaliuqi chelsealiuqi@163.com
 * @LastEditTime: 2025-01-09 16:08:33
 * @FilePath: /实战/fe-spec-sola/packages/eslint-config/.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports= {
    extends:['./index.js'].map(require.resolve)
}