const eslintrc = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": [
    "react",
    "babel",
    "jsx-a11y"
  ],
  "rules": {
    "no-new": 0,
    "react/button-has-type": 0,
    "global-require": 0,
    "react/destructuring-assignment": 0,
    "react/prefer-stateless-function": 0,
    "import/prefer-default-export": 0,
    "consistent-return": 0,
    "no-multi-assign": 0,
    "no-plusplus": 0,
    "react/forbid-prop-types": 0,
    "no-bitwise": 0,
    "one-var": 0,
    "camelcase": 0,
    "eqeqeq": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "class-methods-use-this": 0,
    "func-names": 0,
    "react/sort-comp": 0,
    "react/prop-types": 0,
    "react/jsx-first-prop-new-line": 0,
    "no-param-reassign": 0,
    "no-return-assign": 0,
    "max-len": 0,
    "react/no-multi-comp": 0,
    "array-callback-return": 0,
    "import/no-unresolved": 0,
    "jsx-a11y/img-has-alt": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "react/no-string-refs": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx", ".md"] }],
    "react/no-array-index-key": 0,
    "react/no-find-dom-node": 0,
    "react/require-extension": 0,
    "jsx-a11y/anchor-has-content": 0,
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "prefer-destructuring": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/jsx-no-comment-textnodes": 0,
    "object-curly-newline": 0
  }
}

if (process.env.NODE_ENV === "development") {
  Object.assign(eslintrc.rules, {
    "no-debugger": 0,
    "no-console": 0,
    "no-alert": 0,
    "no-plusplus": 0,
    "import/no-webpack-loader-syntax": 0,
    "eol-last": 0,
    "prefer-rest-params": 0
  });
}


module.exports = eslintrc;
