"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReason = void 0;
var MatchReason;
(function (MatchReason) {
    MatchReason[MatchReason["MATCH_REASON_NONE"] = 0] = "MATCH_REASON_NONE";
    MatchReason[MatchReason["MATCH_REASON_FINISH"] = 1] = "MATCH_REASON_FINISH";
    MatchReason[MatchReason["MATCH_REASON_PLAYER_CANCEL"] = 2] = "MATCH_REASON_PLAYER_CANCEL";
    MatchReason[MatchReason["MATCH_REASON_TIMEOUT"] = 3] = "MATCH_REASON_TIMEOUT";
    MatchReason[MatchReason["MATCH_REASON_PLAYER_CONFIRM"] = 4] = "MATCH_REASON_PLAYER_CONFIRM";
    MatchReason[MatchReason["MATCH_REASON_FAILED"] = 5] = "MATCH_REASON_FAILED";
    MatchReason[MatchReason["MATCH_REASON_SYSTEM_ERROR"] = 6] = "MATCH_REASON_SYSTEM_ERROR";
    MatchReason[MatchReason["MATCH_REASON_INTERRUPTED"] = 7] = "MATCH_REASON_INTERRUPTED";
    MatchReason[MatchReason["MATCH_REASON_MP_UNAVAILABLE"] = 8] = "MATCH_REASON_MP_UNAVAILABLE";
    MatchReason[MatchReason["MATCH_REASON_CONFIRM_TIMEOUT"] = 9] = "MATCH_REASON_CONFIRM_TIMEOUT";
})(MatchReason = exports.MatchReason || (exports.MatchReason = {}));
