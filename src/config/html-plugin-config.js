// 获取html-webpack-plugin参数的方法 
var getHtmlConfig = function(name){
  return {
      template    : './src/view/' + name + '.html',
      filename    : 'view/' + name + '.html',
      inject      : true,
      hash        : true,
      chunks      : ['common', name]
  };
};

