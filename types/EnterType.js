"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterType = void 0;
var EnterType;
(function (EnterType) {
    EnterType[EnterType["ENTER_TYPE_NONE"] = 0] = "ENTER_TYPE_NONE";
    EnterType[EnterType["ENTER_TYPE_SELF"] = 1] = "ENTER_TYPE_SELF";
    EnterType[EnterType["ENTER_TYPE_GOTO"] = 2] = "ENTER_TYPE_GOTO";
    EnterType[EnterType["ENTER_TYPE_JUMP"] = 3] = "ENTER_TYPE_JUMP";
    EnterType[EnterType["ENTER_TYPE_OTHER"] = 4] = "ENTER_TYPE_OTHER";
    EnterType[EnterType["ENTER_TYPE_BACK"] = 5] = "ENTER_TYPE_BACK";
    EnterType[EnterType["ENTER_TYPE_DUNGEON"] = 6] = "ENTER_TYPE_DUNGEON";
    EnterType[EnterType["ENTER_TYPE_DUNGEON_REPLAY"] = 7] = "ENTER_TYPE_DUNGEON_REPLAY";
    EnterType[EnterType["ENTER_TYPE_GOTO_BY_PORTAL"] = 8] = "ENTER_TYPE_GOTO_BY_PORTAL";
    EnterType[EnterType["ENTER_TYPE_SELF_HOME"] = 9] = "ENTER_TYPE_SELF_HOME";
    EnterType[EnterType["ENTER_TYPE_OTHER_HOME"] = 10] = "ENTER_TYPE_OTHER_HOME";
    EnterType[EnterType["ENTER_TYPE_GOTO_RECREATE"] = 11] = "ENTER_TYPE_GOTO_RECREATE";
})(EnterType = exports.EnterType || (exports.EnterType = {}));
