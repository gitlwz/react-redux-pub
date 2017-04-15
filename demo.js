/**
*action
*/
var actions = {
    "loadWaitPurchaseTable": function (prevState, tableData) {
        if (!prevState.idobj) {
            prevState.idobj = {};
        }
        return assign({}, prevState, {tableData: tableData});
    },
    "changeQueryListParam": function (prevState, queryParam) {
        return assign({}, prevState, {queryParam: queryParam});
    },
    "WaitPurchaseSelectArray": function (prevState, queryParam) {
        let newState = _.cloneDeep(prevState)
        if (queryParam.isChecked) {
            newState.idobj[queryParam.id] = queryParam.ids;
        } else {
            delete newState.idobj[queryParam.id];
        }
        return newState;
    }
}

module.exports = actions;


/**
*page
*
*/
module.exports = ReduxUtils.connect(PuPlanList, mapStateToProps);




/**
 *	reducers
 * 将所有State组织成一个状态树来进行维护
 */
export default combineReducers({
    routing: routerReducer,
    refinfo,
    home:ReduxUtils.listen(Home),
    plan : ReduxUtils.listen(PuPlanAction),
    cart : ReduxUtils.listen(Cart),
    pureq: ReduxUtils.listen(PuReq),
    product: ReduxUtils.listen(Product),
    waitPurchase : ReduxUtils.listen(waitPurchaseAction),
    PurchaseNow : ReduxUtils.listen(PurchaseNow),
    materieRefer,
    bidmore:ReduxUtils.listen(BidAction),
    tendermore:ReduxUtils.listen(TenderAction),
    entrancePurchase : ReduxUtils.listen(EntranceAction),
});