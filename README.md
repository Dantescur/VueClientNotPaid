# vue-client-notpaid

![npm](https://img.shields.io/npm/v/vue-client-notpaid)
![size](https://img.shields.io/bundlephobia/min/vue-client-notpaid)
![downloads](https://img.shields.io/npm/dw/vue-client-notpaid)

`vue-client-notpaid` is a Vue.js plugin that fades your website's content progressively until it becomes completely transparent, based on the payment due date and deadline. It's inspired by the [not-paid](https://github.com/kleampa/not-paid) JavaScript project.

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

Import `vue-client-notpaid` in your main app file:

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import VueClientNotPaid from "vue-client-notpaid";

const app = createApp(App);

app.use(VueClientNotPaid, { dueDate: "YYYY-MM-DD", deadline: 60 });
```

Now you can access the $opacity property at any part of your App, for example in App.vue:

```vue
<div :style="{ opacity: $opacity }"></div>
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
