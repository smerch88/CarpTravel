import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './page-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          sm: '20px',
          md: '32px',
          xl: '24px',
        },
      },
      backgroundImage: {
        gradient:
          'linear-gradient(180deg, rgba(0, 24, 38, 0.5) 0%, rgba(0, 37, 49, 0.00) 100%)',
        sectionBg: 'rgba(0, 37, 49, 0.00)',
        hero: "image-set(url('/bgImages/hero.png') 1x,url('/bgImages/hero@2x.png') 2x);",
        heroMd:
          "image-set(url('/bgImages/heroMd.png') 1x,url('/bgImages/heroMd@2x.png') 2x);",
        heroXl:
          "image-set(url('/bgImages/heroXl.png') 1x,url('/bgImages/heroXl@2x.png') 2x);",
        who: "image-set(url('/bgImages/who.png') 1x,url('/bgImages/who@2x.png') 2x);",
        whoMd:
          "image-set(url('/bgImages/whoMd.png') 1x,url('/bgImages/whoMd@2x.png') 2x);",
        whoXl:
          "image-set(url('/bgImages/whoXl.png') 1x,url('/bgImages/whoXl@2x.png') 2x);",
        career:
          "image-set(url('/bgImages/career.png') 1x,url('/bgImages/career@2x.png') 2x);",
        careerMd:
          "image-set(url('/bgImages/careerMd.png') 1x,url('/bgImages/careerMd@2x.png') 2x);",
        careerXl:
          "image-set(url('/bgImages/careerXl.png') 1x,url('/bgImages/careerXl@2x.png') 2x);",
        gallery:
          "image-set(url('/bgImages/gallery.png') 1x,url('/bgImages/gallery@2x.png') 2x);",
        galleryMd:
          "image-set(url('/bgImages/galleryMd.png') 1x,url('/bgImages/galleryMd@2x.png') 2x);",
        galleryXl:
          "image-set(url('/bgImages/galleryXl.png') 1x,url('/bgImages/galleryXl@2x.png') 2x);",
        contacts:
          "image-set(url('/bgImages/contacts.png') 1x,url('/bgImages/contacts@2x.png') 2x);",
        contactsMd:
          "image-set(url('/bgImages/contactsMd.png') 1x,url('/bgImages/contactsMd@2x.png') 2x);",
        contactsXl:
          "image-set(url('/bgImages/contactsXl.png') 1x,url('/bgImages/galleryXl@2x.png') 2x);",
      },
      colors: {
        primary: '#FFFFFF',
        red: '#FF5757',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        logo: ['Karantina', 'sans-serif'],
      },
      fontSize: {
        logo: [
          '14px',
          {
            lineHeight: 'normal',
            letterSpacing: '2.59px',
            fontWeight: '400',
          },
        ],
        quot: [
          '10px',
          {
            lineHeight: '16px',
            fontWeight: '200',
          },
        ],
        quotMd: [
          '14px',
          {
            lineHeight: '16px',
            letterSpacing: '1.26px',
            fontWeight: '200',
          },
        ],
        quotXl: [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '1.44px',
            fontWeight: '200',
          },
        ],
        title: [
          '40px',
          {
            lineHeight: '56px',
            letterSpacing: '-1.6px',
            fontWeight: '100',
          },
        ],
        titleMd: [
          '67px',
          {
            lineHeight: 'normal',
            letterSpacing: '-2.68px',
            fontWeight: '100',
          },
        ],
        titleXl: [
          '98px',
          {
            lineHeight: 'normal',
            letterSpacing: '-3.92px',
            fontWeight: '100',
          },
        ],
        subTitle: [
          '37px',
          {
            lineHeight: 'normal',
            letterSpacing: '1.665px',
            fontWeight: '100',
          },
        ],
        subTitleMd: [
          '67px',
          {
            lineHeight: 'normal',
            letterSpacing: '7px',
            fontWeight: '100',
          },
        ],
        subTitleXl: [
          '98px',
          {
            lineHeight: 'normal',
            letterSpacing: '0',
            fontWeight: '100',
          },
        ],
        subTitleQuot: [
          '12px',
          {
            lineHeight: 'normal',
            letterSpacing: '9.48px',
            fontWeight: '300',
          },
        ],
        subTitleQuotMd: [
          '14px',
          {
            lineHeight: 'normal',
            letterSpacing: '25.9px',
            fontWeight: '300',
          },
        ],
        subTitleQuotXl: [
          '16px',
          {
            lineHeight: 'normal',
            letterSpacing: '36.48px',
            fontWeight: '300',
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
