import Cursor from '@/components/common/Cursor';
import Preloader from '@/components/common/Preloader';
import SmoothScroll from '@/constants/utils/SmoothScroll';
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link';
// import "@/styles/styles.scss";
export default function App({ Component, pageProps, router }) {
    return (
      <SmoothScroll>
        {/* <Cursor/> */}
        <Preloader/>
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </SmoothScroll>
    );
}
