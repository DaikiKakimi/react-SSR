// start.js内
import { register } from "@babel/register";

// Babelの設定を登録
register({
  extensions: [".js", ".jsx", ".ts", ".tsx"],
  presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
});

// サーバーサイドのコードをインポート
import "./index.js";
