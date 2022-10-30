"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionSearchState = void 0;
var RegionSearchState;
(function (RegionSearchState) {
    RegionSearchState[RegionSearchState["REGION_SEARCH_STATE_NONE"] = 0] = "REGION_SEARCH_STATE_NONE";
    RegionSearchState[RegionSearchState["REGION_SEARCH_STATE_UNSTARTED"] = 1] = "REGION_SEARCH_STATE_UNSTARTED";
    RegionSearchState[RegionSearchState["REGION_SEARCH_STATE_STARTED"] = 2] = "REGION_SEARCH_STATE_STARTED";
    RegionSearchState[RegionSearchState["REGION_SEARCH_STATE_WAIT_REWARD"] = 3] = "REGION_SEARCH_STATE_WAIT_REWARD";
    RegionSearchState[RegionSearchState["REGION_SEARCH_STATE_FINISHED"] = 4] = "REGION_SEARCH_STATE_FINISHED";
})(RegionSearchState = exports.RegionSearchState || (exports.RegionSearchState = {}));
