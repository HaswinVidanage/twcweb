var webpack = require('webpack');
var path = require ('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development' ;

module.exports = {
  entry:[
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals :{
    jquery: 'jQuery'
  },
  plugins :[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery',
      '@' :'transform-decorators-legacy'

    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor :  {
        warnings : false
      }
    })
  ],
  output: {
    path : __dirname,
    filename: './public/bundle.js'
  },
  resolve:{
    root:__dirname,
    modulesDirectories : [
      'node_modules',
      './app/components',
      './app/api',
      './app/styles/*'
    ],
    alias:{
    Main : 'app/components/Main.jsx',
    Nav  : 'app/components/Nav.jsx',
    Footer : 'app/components/Footer.jsx',
    Home : 'app/components/Home.jsx',
    Weather:'app/components/Weather.jsx',
    About:'app/components/About.jsx',
    Blog:'app/components/blog/Blog.jsx',
    BlogSingle:'app/components/blog/BlogSingle.jsx',
    Examples:'app/components/Examples.jsx',
    WeatherForm:'app/components/WeatherForm.jsx',
    WeatherMessage:'app/components/WeatherMessage.jsx',
    openWeatherMap:'app/api/openWeatherMap.jsx',
    projectsApi:'app/api/projectsApi.jsx',
    enquiryAPI:'app/api/enquiryAPI.jsx',
    blogAPI:'app/api/blogAPI.jsx',
    ErrorModal :'app/components/ErrorModal.jsx',
    Portfolio : 'app/components/portfolio/Portfolio.jsx',
    SingleProject: 'app/components/portfolio/SingleProject.jsx',
    applicationStyles: 'app/styles/app.scss',
    ContactUsBar:  'app/components/common/ContactUsBar.jsx',
    ImageLoader:  'app/components/common/ImageLoader.jsx',
    MiniContactForm: 'app/components/home/MiniContactForm.jsx',
    MapBox: 'app/components/common/Map.jsx',
    // AboutMap : 'app/components/common/Map.jsx',
    // TitleBar: 'app/components/common/AboutMap.jsx',
    TeamGrid : 'app/components/about/TeamGrid',
    ServicesCore : 'app/components/services/ServicesCore.jsx',
    Web : 'app/components/services/Web.jsx',
    MobileApps : 'app/components/services/MobileApps.jsx',
    ContactUs : 'app/components/contact/contactus.jsx',
    DescPanel : 'app/components/contact/DescPanel.jsx',
    DetailPanel : 'app/components/contact/DetailPanel.jsx',
    ContactForm : 'app/components/contact/ContactForm.jsx'
    },
    extensions:['','.js','.jsx']
  },
  module:{

    loaders:[
      {
        loader:'babel-loader',
        query:{
          presets:['react','es2015','stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,

      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]

  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
