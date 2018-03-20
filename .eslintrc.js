module.exports = {
    "extends": "airbnb",
    "env": {
        "node": true,
        "browser": true,
    },
    "parser": "babel-eslint",
    "rules": {
        "quotes": [
            "error",
            "double"
        ],
        "no-console": 0,
        "no-underscore-dangle": 0,
        "no-use-before-define": 0,
        "no-plusplus": 0,
        "quote-props": 0,
        "object-curly-newline": 0,
        "react/jsx-filename-extension": 0,
        "jsx-a11y/anchor-is-valid": ["error", {
            components: ["Link"],
            specialLink: ["to"],
            aspects: ["noHref", "invalidHref", "preferButton"],
        }],
    },
};
