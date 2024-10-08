/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend:{
      colors: {
        'black': '#000000',
        'white': '#FFFFFF',
        'gray-bg':'#D1D5DB',
        primary: {
          '800': '#0E345D',
          '700': '#124378',
          '600': '#17569A',
          '500': '#195FA9',
          '400': '#477FBA',
          '300': '#6594C5',
          '200': '#95B5D7',
          '100': '#B8CDE4',
          '50' : '#E8EFF6',
        },
        success: {
          '700': '#027A48',
          '50': '#ECFDF3',
        },
        danger : {
          '600': '#D92D20',
          '400': '#F97066',
          '700': '#C4320A'
        },
        neutral : {
          '700': '#374151',
          '600': '#4B5563',
          '500': '#6B7280',
          '400': '#9CA3AF',
          '200': '#E5E7EB',
        },
      },
    }
   },
  plugins: [],
}