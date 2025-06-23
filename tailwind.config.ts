import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   
  ], 
  darkMode : 'class' ,
  theme: {
    extend: {
      colors: {
        'custom-heading':'#1A1A1A' , 
        'custom-text':'#4A4A4A' ,  
        'custom-subheading':'#2C2C2C' , 
        'custom-bg':'#FAFAFA' ,
        'custom-hover':'#EFEDEC' , 
        'transparent': 'rgba(0,0,0,0.5)'
      }, 

      boxShadow : { 
      custom: '0px 0px 4px 2px rgba(0,0,0,0.2)' , 
      hoverCustom : '0px 0px 4px 3px rgba(0,0,0,0.2)' ,
      } , 
      zIndex  : { 
        'auto' : 'auto' , 
        'n2' : '-2'  
      }
    },
  },
  plugins: [],
} satisfies Config;
