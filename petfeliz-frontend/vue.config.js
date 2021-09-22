module.exports = {
    devServer: {
      proxy: {
        '^/api/*': {
          target: 'http://127.0.0.1:8000',
          changeOrigin: true
        },
      }
    },
    css: {
      loaderOptions: {
        sass: {
          additionalData: `
            @import "@/styles/global.scss";
            @import "@/styles/_mixins.scss";
          `
        }
      }
    }
  }

/* 

outra solução para importar a folha de estilos global

chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addScssResource(config.module.rule('scss').oneOf(type)))
  },
}

function addScssResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/*.scss'),
      ],
    })
} */