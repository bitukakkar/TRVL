import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useStyles, AmountSlider } from './styles'
import clsx from 'clsx'
import coinicon from '../../../Assets/images/coin2.svg'
import { useDispatch } from 'react-redux'
import { saveTokenCardPack } from './tokenCardRedux'

const TokenCard = ({ packInfo }) => {
  const { id, name } = packInfo
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const [inputRangeAmount, setInputRangeAmount] = useState(100)

  const handleAmountChange = (event, newValue) => {
    setInputRangeAmount(newValue)
  }
  let UpdatedpackInfo = {
    id: 1,
    name: 'get TRIP',
    token: inputRangeAmount / 0.1,
    price: inputRangeAmount ? inputRangeAmount : 100
  }

  const purchaseBtnHandler = () => {
    if (inputRangeAmount > 0) {
      dispatch(saveTokenCardPack(UpdatedpackInfo))
      history.push('/tokens-payment')
    }
  }

  return (
    <div className={classes.token}>
      <div className={clsx(classes.tokenPadding)}>
        <div className={classes.flexSpaceBetween}>
          <div className={classes.flex}>
            {id === 1 ? (
              <div className={clsx(classes.imgCircle, classes.basic)} />
            ) : id === 2 ? (
              <div className={clsx(classes.imgCircle, classes.Enthusiast)} />
            ) : (
              <div className={clsx(classes.imgCircle, classes.pro)} />
            )}
            <div className={classes.packDetails}>
              <h1>
                <img src={coinicon} alt='' />
                {UpdatedpackInfo.token} <span>tokens</span>
              </h1>
            </div>
          </div>
          <div className={classes.priceBox}>
            <h3>${inputRangeAmount}</h3>
            <button onClick={purchaseBtnHandler}>Purchase</button>
          </div>
        </div>
        <div className={classes.form_block}>
          <label
            htmlFor='amount'
            className={classes.inputLabel}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            Amount
            <h4 className={classes.input_range_amount}>
              &#36;{inputRangeAmount}
            </h4>
          </label>
          <div className={classes.input_range_amount_input_div}>
            <AmountSlider
              value={inputRangeAmount}
              onChange={handleAmountChange}
              valueLabelDisplay='off'
              aria-label='amount slider'
              min={0}
              max={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenCard
