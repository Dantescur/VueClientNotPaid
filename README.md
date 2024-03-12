# vue-plugin-notpaid

![npm](https://img.shields.io/npm/v/vue-plugin-notpaid)
![license](https://img.shields.io/npm/l/vue-plugin-notpaid)
![size](https://img.shields.io/bundlephobia/min/vue-plugin-notpaid)
![downloads](https://img.shields.io/npm/dw/vue-plugin-notpaid)

`vue-plugin-notpaid` is a Vue.js plugin that fades your website's content progressively until it becomes completely transparent, based on the payment due date and deadline. It's inspired by the [not-paid](https://github.com/kleampa/not-paid) JavaScript project.

## Features

- Easy to integrate with any Vue.js project.
- Customizable due date and deadline.
- Progressive transparency to encourage client payments.

## Installation

```bash
npm install vue-client-notpaid
```

or

```bash
yarn add vue-client-notpaid
```

## Usage

Import `vue-client-notpaid` in your main Vue.js file:

```javascript
import Vue from "vue";
import VueClientNotPaid from "vue-client-notpaid";

Vue.use(VuePluginNotPaid, { dueDate: "YYYY-MM-DD", deadline: 60 });
```

## Options

- `dueDate`: The date by which payment should be received (format: `YYYY-MM-DD`).
- `deadline`: The number of days after the due date when the website will be fully transparent.

## Demo

To see `vue-client-notpaid` in action, visit this [link](#).

## License

`vue-client-notpaid` is open-sourced software licensed under the [MIT license](LICENSE).

## Acknowledgments

- Inspired by [not-paid](https://github.com/kleampa/not-paid) created by [kleampa](https://github.com/kleampa).
- Thanks to all contributors who help maintain and improve this project.

## Support

If you find this plugin helpful, consider starring the repository to show your support. Any donations to support the development are appreciated!

[![Star on GitHub](https://img.shields.io/github/stars/Dantescur/vue-client-notpaid.svg?style=social)](https://github.com/your-username/vue-plugin-notpaid/stargazers)
