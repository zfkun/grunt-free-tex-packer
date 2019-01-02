/*
 * grunt-free-tex-packer
 * http://free-tex-packer/grunt
 *
 * Copyright (c) 2019 Alexander Norinchak
 * Licensed under the MIT license.
 */

'use strict';

const texturePacker = require("free-tex-packer-core");

module.exports = function(grunt) {

    grunt.registerMultiTask('free_tex_packer', 'Grunt free texture packer', function() {
        let done = this.async();
        let options = this.options();
        let dest = options.dest || '';
        
        let images = [];
        
        this.files.forEach((f) => {
            f.src.filter((filepath) => {
                if(grunt.file.exists(filepath)) {
                    let imagePath = filepath;
                    if(f.basePath && imagePath.substr(0, f.basePath.length) === f.basePath) {
                        imagePath = imagePath.substr(f.basePath.length);
                    }
                    
                    images.push({path: imagePath, contents: grunt.file.read(filepath, {encoding: null})});
                }
            });
        });
        
        texturePacker(images, options, (files) => {
            for(let item of files) {
                grunt.file.write(dest + '/' + item.name, item.buffer);
			}
            
            done();
		});
    });
};