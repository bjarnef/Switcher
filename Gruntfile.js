module.exports = function(grunt) {

    // Load the package JSON file
    var pkg = grunt.file.readJSON('package.json');
    var pkgMeta = grunt.file.readJSON('config/meta.json');

    // get the root path of the project
    var projectRoot = 'src/' + pkgMeta.name + '/';

    // Load information about the assembly
    //var assembly = grunt.file.readJSON(projectRoot + 'Properties/AssemblyInfo.json');

    // Get the version of the package
    //var version = assembly.informationalVersion ? assembly.informationalVersion : assembly.version;

    grunt.initConfig({
        pkg: pkg,
        pkgMeta: pkgMeta,
        clean: {
            files: [
                'files/**/*.*'
            ]
        },
        copy: {
            release: {
                files: [
                    {
                        expand: true,
                        cwd: projectRoot + 'bin/Release/',
                        src: [
                            pkgMeta.name + '.dll',
                            pkgMeta.name + '.xml'
                        ],
                        dest: 'files/bin/'
                    }
                ]
            }
        },
        nugetpack: {
            release: {
                src: 'package.nuspec', //src: 'src/' + pkgMeta.name + '/' + pkgMeta.name + '.csproj',
                dest: 'releases/nuget/',
            }
        },
        zip: {
            release: {
                cwd: 'app/',
                src: [
                    'app/**/*.*'
                ],
                dest: 'releases/github/' + pkgMeta.name + '.v' + pkgMeta.version + '.zip'
            }
        },
        umbracoPackage: {
            release: {
                src: 'app/',
                dest: 'releases/umbraco',
                options: {
                    name: pkgMeta.name,
                    version: pkgMeta.version,
                    url: pkgMeta.url,
                    license: pkgMeta.license,
                    licenseUrl: pkgMeta.licenseUrl,
                    author: pkgMeta.author,
                    authorUrl: pkgMeta.authorUrl,
                    readme: 'config/readme.txt',
                    outputName: pkgMeta.name + '.v' + pkgMeta.version + '.zip'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-nuget');
    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-umbraco-package');

    grunt.registerTask('dev', ['clean', 'copy', 'nugetpack', 'zip', 'umbracoPackage']);
    grunt.registerTask('default', ['dev']);

};