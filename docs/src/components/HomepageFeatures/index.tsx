import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'
import React from 'react'
import config from '@site/docusaurus.config'

type FeatureItem = {
  title: string
  svg: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: '易用性',
    svg: './img/mountain.svg',
    description: (
      <>
        完全拥有 Docusaurus 的易用性，同时提供一套可直接使用的 React 组件库和 Utils
        类库开发解决方案。
      </>
    ),
  },
  {
    title: '专注性',
    svg: './img/tree.svg',
    description: (
      <>
        业务组件和 Utils 文档展示统一， 使用 PropsTable、CodeShow、TsDoc
        三个组件即可解决大部分文档场景。
      </>
    ),
  },
  {
    title: '由 React 驱动',
    svg: './img/react.svg',
    description: (
      <>
        用 React 打造，使用 React 实现扩展与自定义 提供你自己的 React
        组件，从而完全掌控网站的浏览体验。
      </>
    ),
  },
]

function Feature({ title, svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img alt="svg" src={svg} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
