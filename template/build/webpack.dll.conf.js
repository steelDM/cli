const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
var config = require('./config')
var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory




const vendors = [
  'vue',
  'vue-router',
  'vuex'
];

module.exports = {
  entry: {
    'vendor_dll': vendors
  },
  output: {
    path: path.join(__dirname, '../src/resource/js/dll/'),
    filename: '[name]_[chunkhash].js',
    library: '[name]_[chunkhash]'
  },
  plugins: [
    //生成resource/js/vendor.xxxxx.js
    new webpack.DllPlugin({
      path: path.join(__dirname, './manifest.json'),
      name: '[name]_[chunkhash]',
      context: __dirname,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      } 
    }),
    //动态修改入口html,支持数组
    new ReplaceHtmlVendorPlugin({
      path:[path.join(__dirname, '../index.html')],
      cachename:'dllcache.json',
      context:__dirname
    })
  ]
};

//动态修改入口html
function ReplaceHtmlVendorPlugin(options) {
    this.htmlPaths = options.path;
    this.cachename = options.cachename;
    this.context = options.context;
}

ReplaceHtmlVendorPlugin.prototype.apply = function(compiler) {

  const htmlPaths = this.htmlPaths;
  const cachename = this.cachename;
  const context = this.context;
  const cachePath = path.join(context,cachename);

  //读取上次编译所用的entry
  var c = fs.existsSync(cachePath);
  var preCompileEntrys = c ? JSON.parse(fs.readFileSync(cachePath,"utf-8")) : false;

  compiler.plugin("compilation", function(compilation) {

    compilation.plugin('optimize-chunk-assets', function(chunks,callback) {
        
        htmlPaths.forEach(function(htmlPath,index){
            
            var htmlData = fs.readFileSync(htmlPath,"utf-8");

            //把html中上次编译的dll都干掉
            preCompileEntrys && preCompileEntrys.forEach(function(name){
                //非贪婪模式匹配
                var reg =  new RegExp('<script.*(' + name + '.*?\.js).><\/script>','g');
                htmlData = htmlData.replace(reg,'');
            });

            chunks.forEach(function(chunk){

                var name = chunk.name;
                var chunkhash = chunk.renderedHash;
                var replaceHash = chunk.files[0];
                //非贪婪模式匹配
                var reg =  new RegExp('<script.*(' + name + '.*?\.js).><\/script>','g')

                if(reg.test(htmlData)){
                    htmlData = htmlData.replace(reg,function($1,$2){            
                        return $1.replace($2,replaceHash);
                    });

                }else{
                    //不存在则在body后插入
                    htmlData = htmlData.replace(/.*<\/body>(.*)/,function($1,$2){
                        var injectScript = '<script type="text/javascript" src="' + assetsSubDirectory + '/js/dll/'+ replaceHash +'"></script>' + $2
                        return $1.replace($2,injectScript);
                    });
                }
               
            });

            fs.writeFileSync(htmlPath,htmlData,'utf-8');

        });

        callback();
    });

  });

  //产出dllCache方便下次输出做对比
  compiler.plugin('emit', function(compilation, callback) {
    var dllSource = JSON.stringify(Object.keys(compiler.options.entry));
    fs.writeFileSync(cachePath,dllSource,'utf-8');

    callback();
  });

};
