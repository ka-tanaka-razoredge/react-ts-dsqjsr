module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './index.tsx',
  module: {
    rules: [
      {
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: 'ts-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {},
      }
    ]
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: [
      '.ts', '.tsx', '.js', '.json'
    ],
  }
};