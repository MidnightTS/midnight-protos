"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PlayerQuitFromHomeNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerQuitFromHomeNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerQuitFromHomeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class PlayerQuitFromHomeNotify extends pb_1.Message {
    constructor(data) {
        super();
        _PlayerQuitFromHomeNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _PlayerQuitFromHomeNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("reason" in data && data.reason != undefined) {
                this.reason = data.reason;
            }
        }
    }
    get reason() {
        return pb_1.Message.getFieldWithDefault(this, 6, PlayerQuitFromHomeNotify.QuitReason.QUIT_REASON_INVALID);
    }
    set reason(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new PlayerQuitFromHomeNotify({});
        if (data.reason != null) {
            message.reason = data.reason;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.reason != null) {
            data.reason = this.reason;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.reason != PlayerQuitFromHomeNotify.QuitReason.QUIT_REASON_INVALID)
            writer.writeEnum(6, this.reason);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerQuitFromHomeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.reason = reader.readEnum();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return PlayerQuitFromHomeNotify.deserialize(bytes);
    }
}
exports.PlayerQuitFromHomeNotify = PlayerQuitFromHomeNotify;
_PlayerQuitFromHomeNotify_one_of_decls = new WeakMap();
(function (PlayerQuitFromHomeNotify) {
    let QuitReason;
    (function (QuitReason) {
        QuitReason[QuitReason["QUIT_REASON_INVALID"] = 0] = "QUIT_REASON_INVALID";
        QuitReason[QuitReason["QUIT_REASON_KICK_BY_HOST"] = 1] = "QUIT_REASON_KICK_BY_HOST";
        QuitReason[QuitReason["QUIT_REASON_BACK_TO_MY_WORLD"] = 2] = "QUIT_REASON_BACK_TO_MY_WORLD";
        QuitReason[QuitReason["QUIT_REASON_HOME_BLOCKED"] = 3] = "QUIT_REASON_HOME_BLOCKED";
        QuitReason[QuitReason["QUIT_REASON_HOME_IN_EDIT_MODE"] = 4] = "QUIT_REASON_HOME_IN_EDIT_MODE";
        QuitReason[QuitReason["QUIT_REASON_BY_MUIP"] = 5] = "QUIT_REASON_BY_MUIP";
        QuitReason[QuitReason["QUIT_REASON_CUR_MODULE_CLOSED"] = 6] = "QUIT_REASON_CUR_MODULE_CLOSED";
    })(QuitReason = PlayerQuitFromHomeNotify.QuitReason || (PlayerQuitFromHomeNotify.QuitReason = {}));
})(PlayerQuitFromHomeNotify = exports.PlayerQuitFromHomeNotify || (exports.PlayerQuitFromHomeNotify = {}));