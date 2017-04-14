module.exports = function(grunt) {

    // Load the package JSON file
    var pkg = grunt.file.readJSON('package.json');
    var pkgMeta = grunt.file.readJSON('config/meta.json');

    // get the root path of the project
    var projectRoot = 'src/' + pkg.name + '/';

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
                            pkg.name + '.dll',
                            pkg.name + '.xml'
                        ],
                        dest: 'files/bin/'
                    }
                ]
            }
        },
        nugetpack: {
            release: {
                src: 'package.nuspec', //src: 'src/' + pkg.name + '/' + pkg.name + '.csproj',
                dest: 'releases/nuget/',
            }
        },
        zip: {
            release: {
                cwd: 'app/',
                src: [
                    'app/**/*.*'
                ],
                dest: 'releases/github/' + pkg.name + '.v' + pkgMeta.version + '.zip'
            }
        },
        umbracoPackage: {
            release: {
                src: 'app/',
                dest: 'releases/umbraco',
                options: {
                    name: pkg.name,
                    version: pkgMeta.version,
                    url: pkg.url,
                    license: pkg.license.name,
                    licenseUrl: pkg.license.url,
                    author: pkg.author.name,
                    authorUrl: pkg.author.url,
                    readme: pkg.readme,
                    outputName: pkg.name + '.v' + pkgMeta.version + '.zip'
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