module.exports = {
  userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || 'duoxiaonian@yunwu50.onmicrosoft.com',
  icon: '/icons/128.png',


  kvPrefix: process.env.KV_PREFIX || '',

 
  title: "二元世界",

  
  baseDirectory: '/云盘',


  maxItems: 50,

  // [OPTIONAL] We use Google Fonts natively for font customisations.
  // You can check and generate the required links and names at https://fonts.google.com.
  // googleFontSans - the sans serif font used in onedrive-vercel-index.
  googleFontSans: 'Inter',
  // googleFontMono - the monospace font used in onedrive-vercel-index.
  googleFontMono: 'Fira Mono',
  // googleFontLinks -  an array of links for referencing the google font assets.
  googleFontLinks: ['https://www.unpkg.com/font-online/fonts/SourceHanSans/SourceHanSans-Normal.otf'],

  // [OPTIONAL] The footer component of your website. You can write HTML here, but you need to escape double
  // quotes - changing " to \". You can write anything here, and if you like badges, generate some with https://shields.io
  footer:
    'Powered by duoxiaonian.',

  // [OPTIONAL] This is where you specify the folders that are password protected. It is an array of paths pointing to all
  // the directories in which you have .password set. Check the documentation for details.
  protectedRoutes: ['/画师选集/胡麻乃りお/18+','/画师选集/Budesonide/18+','/画师选集/箩莉即正义/18+','/画师选集/魔法書夫人/18+','/画师选集/千夜QYS3/18+','/画师选集/室埴 ポコ/18+','/画师选集/無惑桑/18+','/画师选集/桐野/18+','/画师选集/藤ちょこ（藤原）/18+'],

  // [OPTIONAL] Use "" here if you want to remove this email address from the nav bar.
  email: '',

  // [OPTIONAL] This is an array of names and links for setting your social information and links.
  // In the latest update, all brand icons inside font awesome is supported and the icon to render is based on the name
  // you provide. See the documentation for details.
  links: [
    {
      name: '',
      link: '',
    },
  ],

  // This is a day.js-style datetime format string to format datetimes in the app. Ref to
  // https://day.js.org/docs/en/display/format for detailed specification. The default value is ISO 8601 full datetime
  // without timezone and replacing T with space.
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
}
