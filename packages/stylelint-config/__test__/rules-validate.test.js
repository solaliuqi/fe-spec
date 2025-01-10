const assert = require('assert');
const stylelint = require('stylelint');
const path = require('path');

describe('test rule.test.js',()=>{
    it('validate default', async()=>{
        const filePaths = [path.join(__dirname, './fixtures/index.css')];

        const result = await stylelint.lint({
          configFile: path.join(__dirname, '../index.js'),
          files: filePaths,
          fix: false,
        });
    
        if (result && result.errored) {
          const filesResult = JSON.parse(result.output || '[]') || [];
          filesResult.forEach((fileResult) => {
            console.log(`========= ${filePaths} ==========`);
            console.log(fileResult.warnings);
          });
    
          assert.ok(filesResult.length !== 0);
        }
    });

    it('validate sass', async()=>{
        const filePath = [path.join(__dirname, './sass-test.scss')];
        const result = await stylelint.lint({
            configFile:path.join(__dirname,'../index.js'),
            files:filePath,
            fix:false
        });

        if(result && result.errored){
            const filesResult = JSON.parse(result.output || '[]') || [];
            filesResult.forEach((fileResult)=>{
                console.log(`==========${filePath}`)
                console.log(fileResult.warnings);
            })
            assert.ok(filesResult.length !== 0)
        }
        
    });

    it('validate css', async()=>{
        const filePath = [path.join(__dirname,'./fixtures/css-test.less')];
        const result = await stylelint.lint({
            configFile:path.join(__dirname,'../index.js'),
            files:filePath,
            fix: false
        })

        if(result && result.errored){
            const filesResult = JSON.parse(result.output || '[]') || [];
            filesResult.forEach((fileResult)=>{
                console.log(`==========${filePath}`)
                console.log(fileResult.warnings);
            })
            assert.ok(filesResult.length !== 0)
        }
    });

    it('validate css-module', async ()=>{
        const filePaths = [path.join(__dirname, './fixtures/css-module-test.css')];

        const result = await stylelint.lint({
          configFile: path.join(__dirname, '../index.js'),
          files: filePaths,
          fix: false,
        });
        if (result && result.errored) {
            const filesResult = JSON.parse(result.output || '[]') || [];
            filesResult.forEach((fileResult) => {
              console.log(`========= ${filePaths} ==========`);
              console.log(fileResult.warnings);
            });
      
            assert.ok(filesResult.length !== 0);
          }
    })
})