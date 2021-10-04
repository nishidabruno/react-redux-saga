import { all } from "@redux-saga/core/effects";

import cart from './cart/sagas';

export default function* rootSaga() {
  yield all([
    cart,
  ]);
}