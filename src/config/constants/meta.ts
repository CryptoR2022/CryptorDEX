import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'cryptoR',
  description:
    'The most popular AMM on BSC by user count! Earn CNR through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by cryptoR), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('cryptoR')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('cryptoR')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('cryptoR')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('cryptoR')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('cryptoR')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('cryptoR')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('cryptoR')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('cryptoR')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('cryptoR')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('cryptoR')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('cryptoR')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('cryptoR')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('cryptoR')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('cryptoR')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('cryptoR')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('cryptoR')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('cryptoR')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('cryptoR')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('cryptoR Info & Analytics')}`,
        description: 'View statistics for cryptoR exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('cryptoR Info & Analytics')}`,
        description: 'View statistics for cryptoR exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('cryptoR Info & Analytics')}`,
        description: 'View statistics for cryptoR exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('cryptoR')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('cryptoR')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('cryptoR')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('cryptoR')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('cryptoR Squad')} | ${t('cryptoR')}`,
      }
    default:
      return null
  }
}
