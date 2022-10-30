"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PlayerApplyEnterHomeResultNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerApplyEnterHomeResultNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerApplyEnterHomeResultNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class PlayerApplyEnterHomeResultNotify extends pb_1.Message {
    constructor(data) {
        super();
        _PlayerApplyEnterHomeResultNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _PlayerApplyEnterHomeResultNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("target_nickname" in data && data.target_nickname != undefined) {
                this.target_nickname = data.target_nickname;
            }
            if ("reason" in data && data.reason != undefined) {
                this.reason = data.reason;
            }
            if ("target_uid" in data && data.target_uid != undefined) {
                this.target_uid = data.target_uid;
            }
            if ("is_agreed" in data && data.is_agreed != undefined) {
                this.is_agreed = data.is_agreed;
            }
        }
    }
    get target_nickname() {
        return pb_1.Message.getFieldWithDefault(this, 7, "");
    }
    set target_nickname(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get reason() {
        return pb_1.Message.getFieldWithDefault(this, 5, PlayerApplyEnterHomeResultNotify.Reason.REASON_PLAYER_JUDGE);
    }
    set reason(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get target_uid() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set target_uid(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get is_agreed() {
        return pb_1.Message.getFieldWithDefault(this, 9, false);
    }
    set is_agreed(value) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data) {
        const message = new PlayerApplyEnterHomeResultNotify({});
        if (data.target_nickname != null) {
            message.target_nickname = data.target_nickname;
        }
        if (data.reason != null) {
            message.reason = data.reason;
        }
        if (data.target_uid != null) {
            message.target_uid = data.target_uid;
        }
        if (data.is_agreed != null) {
            message.is_agreed = data.is_agreed;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.target_nickname != null) {
            data.target_nickname = this.target_nickname;
        }
        if (this.reason != null) {
            data.reason = this.reason;
        }
        if (this.target_uid != null) {
            data.target_uid = this.target_uid;
        }
        if (this.is_agreed != null) {
            data.is_agreed = this.is_agreed;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.target_nickname.length)
            writer.writeString(7, this.target_nickname);
        if (this.reason != PlayerApplyEnterHomeResultNotify.Reason.REASON_PLAYER_JUDGE)
            writer.writeEnum(5, this.reason);
        if (this.target_uid != 0)
            writer.writeUint32(12, this.target_uid);
        if (this.is_agreed != false)
            writer.writeBool(9, this.is_agreed);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerApplyEnterHomeResultNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.target_nickname = reader.readString();
                    break;
                case 5:
                    message.reason = reader.readEnum();
                    break;
                case 12:
                    message.target_uid = reader.readUint32();
                    break;
                case 9:
                    message.is_agreed = reader.readBool();
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
        return PlayerApplyEnterHomeResultNotify.deserialize(bytes);
    }
}
exports.PlayerApplyEnterHomeResultNotify = PlayerApplyEnterHomeResultNotify;
_PlayerApplyEnterHomeResultNotify_one_of_decls = new WeakMap();
(function (PlayerApplyEnterHomeResultNotify) {
    let Reason;
    (function (Reason) {
        Reason[Reason["REASON_PLAYER_JUDGE"] = 0] = "REASON_PLAYER_JUDGE";
        Reason[Reason["REASON_PLAYER_ENTER_OPTION_REFUSE"] = 1] = "REASON_PLAYER_ENTER_OPTION_REFUSE";
        Reason[Reason["REASON_PLAYER_ENTER_OPTION_DIRECT"] = 2] = "REASON_PLAYER_ENTER_OPTION_DIRECT";
        Reason[Reason["REASON_SYSTEM_JUDGE"] = 3] = "REASON_SYSTEM_JUDGE";
        Reason[Reason["REASON_HOST_IN_MATCH"] = 4] = "REASON_HOST_IN_MATCH";
        Reason[Reason["REASON_PS_PLAYER_NOT_ACCEPT_OTHERS"] = 5] = "REASON_PS_PLAYER_NOT_ACCEPT_OTHERS";
        Reason[Reason["REASON_OPEN_STATE_NOT_OPEN"] = 6] = "REASON_OPEN_STATE_NOT_OPEN";
        Reason[Reason["REASON_HOST_IN_EDIT_MODE"] = 7] = "REASON_HOST_IN_EDIT_MODE";
        Reason[Reason["REASON_PRIOR_CHECK"] = 8] = "REASON_PRIOR_CHECK";
    })(Reason = PlayerApplyEnterHomeResultNotify.Reason || (PlayerApplyEnterHomeResultNotify.Reason = {}));
})(PlayerApplyEnterHomeResultNotify = exports.PlayerApplyEnterHomeResultNotify || (exports.PlayerApplyEnterHomeResultNotify = {}));