import { GetStaticProps } from 'next'
// import Link from 'next/link'

// import { routes } from '../routes'

// import { Layout } from '../components/common/Layout'
// import { TableOuterLayout } from '../components/common/TableOuterLayout'
// import { CardDataType } from '../types/CardDataType'
// import { Cards } from '../constant/cards'
// import { CustomHead } from '../components/common/Head'

import prisma from '../lib/prisma'

export const getStaticProp: GetStaticProps = async()=>{
  // const cardsData = await prisma.card.findMany({
  //   include: {
  //     skill: {
  //       select: {
  //         name: true,
  //         type: true
  //       }
  //     },
  //     unitSkill: {
  //       select: {
  //         name: true,
  //         type: true
  //       }
  //     }
  //   }
  // })
  // return { props: { cardsData } }
  const count = await prisma.card.count()
  console.log(typeof count)
  return {
    props: {
      count
    }
  }
}

type Props = {
  count: number
}

export default function Component(props: Props) {
  return <div>card count: {props.count}</div>
}