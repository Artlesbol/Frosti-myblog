import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_LANG = "zh-cn";
export const SITE_TAB = "Artlesbol.top";
export const SITE_TITLE = "Artlesbol.top";
export const SITE_DESCRIPTION = "Artlesbol的个人博客，主要发布技术文章和人生思考，有时候也会分享一些奇怪的东西。";
dayjs.locale('zh-cn');
export const DATE_FORMAT = "YYYY年MM月DD日 ddd";

// User profile information
export const USER_NAME = "Artlesbol";
export const USER_SITE = "http://172.27.149.129:4321/"; // At the same time, this is also the site retrieved by the i18n configuration.
export const USER_AVATAR = "/profile.jpg";

// Server and transition settings
export const SERVER_URL = "https://demo.saroprock.com";

// Theme settings
export const DAISYUI_THEME = {
  light: "winter",
  dark: "dim",
};
export const CODE_THEME = {
  light: "github-light",
  dark: "github-dark",
};

// Menu items for navigation
export const menuItems = [
  {
    id: "home",
    text: "主页",
    href: "/",
    svg: "material-symbols:home-outline-rounded",
    target: "_self",
    showOnSmallScreenOnly: false,
  }, // Home page
  {
    id: "blog",
    text: "博客",
    href: "/blog",
    svg: "material-symbols:book-2-outline-rounded",
    target: "_self",
    showOnSmallScreenOnly: false,
    // subItems: [
    //   {
    //     id: "all",
    //     text: "All blogs",
    //     href: "/blog",
    //     svg: "material-symbols:ink-pen-outline-rounded",
    //     target: "_self",
    //   }, // All blog
    //   {
    //     id: "tech",
    //     text: "Tech blogs",
    //     href: "/blog/categories/tech",
    //     svg: "material-symbols:deployed-code-outline",
    //     target: "_self",
    //   }, // Technology category
    //   {
    //     id: "life",
    //     text: "Life blogs",
    //     href: "/blog/categories/life",
    //     svg: "material-symbols:earthquake-rounded",
    //     target: "_self",
    //   }, // Life category
    // ],
  }, // Blog page with sub-items
  {
    id: "category",
    text: "分类",
    href: "/category",
    svg: "material-symbols:inbox",
    target: "_self",
    showOnSmallScreenOnly: true,
  }, // Projects page
  {
    id: "project",
    text: "项目",
    href: "/project",
    svg: "material-symbols:code-blocks-outline",
    target: "_self",
    showOnSmallScreenOnly: false,
  }, // Projects page
  {
    id: "friend",
    text: "友链",
    href: "/friend",
    svg: "material-symbols:supervisor-account-outline-rounded",
    target: "_self",
    showOnSmallScreenOnly: false,
  }, // Friends page
  // {
  //   id: "contact",
  //   text: "联系我",
  //   href: "mailto:contact.evesunmaple@outlook.com", // Contact email
  //   target: "_blank", // Open in a new tab
  //   svg: "material-symbols:attach-email-outline-rounded",
  // },
  {
    id: "about",
    text: "关于",
    href: "/about",
    svg: "material-symbols:info-outline-rounded",
    target: "_self",
    showOnSmallScreenOnly: false,
  }, // About page
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "mailto:artlesbol@gmail.com",
    ariaLabel: "email",
    title: "发一封邮件给我",
    svg: "ri:mail-line",
  },
  {
    href: "https://github.com/Artlesbol",
    ariaLabel: "Github",
    title: "Github",
    svg: "ri:github-line",
  },
  {
    href: "https://space.bilibili.com/3209156",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "ri:bilibili-line",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "ri:rss-line",
  },
];
