import React from 'react'
import { useStyles } from './styles'
import { Box } from '@material-ui/core'
import clsx from 'clsx'
import TokenCard from '../TokenCard'

const TokensPage = () => {
  const classes = useStyles()

  const packInfo = [
    {
      id: 1,
      name: 'get TRIP',
      token: 100/0.1,
      price: 100,
    },
    // {
    //   id: 2,
    //   name: 'Enthusiast pack',
    //   token: 150,
    //   price: 270,
    // },
    // {
    //   id: 3,
    //   name: 'Pro pack',
    //   token: 300,
    //   price: 270,
    // },
  ]

  const TrvlInfo = (props) => {
    const title = props.title
    const text = props.text
    return (
      <div className={classes.trvlInfo}>
        {title === 'Utility' ? (
          <div className={clsx(classes.imgCircle, classes.utilityImg)} />
        ) : title === 'Rewards' ? (
          <div className={clsx(classes.imgCircle, classes.rewardsImg)} />
        ) : (
          <div className={clsx(classes.imgCircle, classes.infrastructureImg)} />
        )}
        <h4> {title}</h4>
        <p>{text}</p>
      </div>
    )
  }

  return (
    <>
      <Box className={classes.boxWidth}>
        <section className={classes.packsSection}>
          <div className={classes.tokensHeadingText}>
            <h2>Buy TRIP tokens</h2>
            <p>Use TRIP tokens to book hotels and trade NFTs</p>
          </div>
          <div className={classes.tokensPack}>
            {packInfo.map((packInfo) => (
              <TokenCard packInfo={packInfo} key={packInfo.id} />
            ))}
          </div>
        </section>
      </Box>
      <div className={classes.trvlTokenInfoMain}>
        <section className={classes.trvlTokenInfoSection}>
          <h3>What is a TRIP token?</h3>
          <div className={classes.flexSpaceEvenly}>
            <TrvlInfo title='Utility' text='Use TRIP to pay for hotels and services across decentralized.travel' />
            <TrvlInfo title='Rewards' text='TRIP is a reward from hotels and services' />
            <TrvlInfo title='Infrastructure' text='Hotels pay to be part of the network in TRIP. Node hosts will be rewarded in TRIP' />
          </div>
        </section>
      </div>
      <div className={classes.frequentAskedMain}>
        <section className={clsx(classes.frequentAskedSection, classes.flex)}>
          <div className={classes.leftContainer}>
            <h2>Frequent asked questions</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className={classes.askedImg}></div>
          </div>
          <div className={classes.rightContainer}>
            <div className={classes.question}>
              <h3>Why use TRIP?</h3>
              <p>
                TRIP is designed to give the travel industry a native token as it allows all
                stakeholders to have an equal share on network direction, and create conformity for
                messages, sales and architectures.
              </p>
            </div>
            <div className={classes.questionBorder}></div>
            <div className={classes.question}>
              <h3>What can you purchase with TRIP tokens?</h3>
              <p>TRIP allows users to book hotels, holiday lets on decentralized.travel and in the future flights, experiences and taxis.</p>
                <p>TRIP is intended to be made available on exchanges, and is currently available to trade on decentralized exchanges such as SushiSwap.</p>
            </div>

        <div className={classes.questionBorder}></div>
            <div className={classes.question}>
              <h3>How does the TRIP token work?</h3>
              <p>TRIP is help by partners in the system, these are hotels and investors which vote to change the network. By Holding TRIP a user is able to vote in these network changes;
                As an example, this could be network cost corrections, a change of format to guest registration, or something new entirely.
                This is covered in more detail in our <a href="/litepaper">Litepaper</a>.</p>

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default TokensPage
