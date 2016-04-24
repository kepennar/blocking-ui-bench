import path from 'path';
import webpack from 'webpack';

const DEBUG = !process.argv.includes('release');
const VERBOSE = process.argv.includes('verbose');
const WATCH = global.WATCH === undefined ? false : global.WATCH;
const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];
const GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  __DEV__: DEBUG,
};

const JS_LOADER = {
  test: /\.js?$/,
  include: [
    path.resolve(__dirname, '../src'),
  ],
  loader: 'babel-loader',
};
const SASS_INCLUDES_PATHS = [];
SASS_INCLUDES_PATHS.push(require('node-neat').includePaths);

export default {
  entry: {
    'react-app': [
      ...(WATCH ? ['webpack-hot-middleware/client'] : []),
      './src/app/react-index.js',
    ],
    'mi-app': [
      ...(WATCH ? ['webpack-hot-middleware/client'] : []),
      './src/app/mi-index.js',
    ],
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js',
  },

  cache: DEBUG,
  debug: DEBUG,

  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE,
  },
  devtool: DEBUG ? 'source-map' : false,
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    ...(!DEBUG ? [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: VERBOSE,
        }
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
    ] : []),
    ...(WATCH ? [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ] : []),
  ],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
  },
  node: {
    fs: "empty"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, '../src'),
        ],
        loader: 'babel-loader',
      },
      {
        test: /mi-.*.js$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0'],
          plugins: [
            ['transform-react-jsx', {'pragma': 'h'}],
            'h-children-fix'
          ]
        },
        exclude: /node_modules/
      },
      // React
      {
        test: /react-.*.js$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        },
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.txt$/,
        loader: 'raw-loader',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff',
      },
      {
        test: /\.css$/,
        loader: 'style-loader/useable!css-loader!postcss-loader',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /picto/,
        loader: 'file-loader',
      },
      {
        test: /\.scss$/,
        loader: 'raw-loader!css-loader!sass?includePaths[]=' + SASS_INCLUDES_PATHS,
      },
    ],
  },
};
