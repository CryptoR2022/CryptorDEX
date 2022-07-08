import { TranslateFunction } from 'contexts/Localization/types'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trading here is trully hassle free'),
  bodyText: t('You just need to connect your waller and you may trade in any token on BNB Smart Chain'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now to Learn'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
     
      { src: 'BTC', alt: t('Shell token') },
      
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Crypto trading beomes fun on CryptoRDEX'),
  bodyText: t('There are several resources and guides available to make your journey joyful'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
    text: t('Learn More'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'folder', alt: t('Folder with cnr token') },
    ],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Its CNR that drives our ecosystem'),
  bodyText: t(
    'Our entire ecosystem and economy runs through CNR. You can swap, trade, stake, spend or buy it. You may use it in fresh farms and green pools to grow your money. There could be many use cases that you will know with the passage of time.',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    text: t('Buy CNR'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/tokenomics/cake',
    text: t('Earn more'),
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      // { src: 'bottom-right', alt: t('br') },
      // { src: 'top-right', alt: t('tr') },
      { src: 'coin', alt: t('CNR token') },
      // { src: 'top-left', alt: t('tl') },
    ],
  },
})
