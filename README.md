# grunt-free-tex-packer

[![Stats](https://nodei.co/npm/grunt-free-tex-packer.png?downloads=true&stars=true)](https://www.npmjs.com/package/grunt-free-tex-packer) \
Free texture packer plugin for grunt \
Based on https://github.com/zfkun/free-tex-packer

# Install

```shell
npm install git@github.com:zfkun/grunt-free-tex-packer.git
```
   
# Basic usage
```js
module.exports = function(grunt) {
    grunt.initConfig({
        free_tex_packer: {
            demo: {
                files: [
                    {expand: true, src: 'src/**/*', basePath: 'src/', filter: 'isFile'}
                ],
                options: {
                    dest: 'dest'
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-free-tex-packer');
    grunt.registerTask('default', ['free_tex_packer']);
};
```

# Advanced usage

Use packer options object

```js
module.exports = function(grunt) {
    grunt.initConfig({
        free_tex_packer: {
            demo: {
                files: [
                    {expand: true, src: 'src/**/*', basePath: 'src/', filter: 'isFile'}
                ],
                options: {
                    dest: 'dest',
                    textureName: "my-texture",
                    width: 1024,
                    height: 1024,
                    fixedSize: false,
                    padding: 2,
                    allowSort: true,
                    allowRotation: true,
                    detectIdentical: true,
                    allowTrim: true,
                    exporter: "Pixi",
                    removeFileExtension: true,
                    prependFolderName: true
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-free-tex-packer');
    grunt.registerTask('default', ['free_tex_packer']);
};
```

# Additional parameters:

basePath in files - path to be removed from sprite name in texture
dest in options - destination folder path


**Pack options description**: https://github.com/zfkun/free-tex-packer-core#available-options

**Custom exporters description**: https://github.com/zfkun/free-tex-packer-core#custom-exporter

# Used libs

* **Free texture packer core** - https://github.com/zfkun/free-tex-packer-core

---
License: MIT
