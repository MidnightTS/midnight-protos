"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PlayerPreEnterMpNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerPreEnterMpNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerPreEnterMpNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class PlayerPreEnterMpNotify extends pb_1.Message {
    constructor(data) {
        super();
        _PlayerPreEnterMpNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _PlayerPreEnterMpNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("state" in data && data.state != undefined) {
                this.state = data.state;
            }
            if ("uid" in data && data.uid != undefined) {
                this.uid = data.uid;
            }
            if ("nickname" in data && data.nickname != undefined) {
                this.nickname = data.nickname;
            }
        }
    }
    get state() {
        return pb_1.Message.getFieldWithDefault(this, 2, PlayerPreEnterMpNotify.State.STATE_INVALID);
    }
    set state(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get uid() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set uid(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get nickname() {
        return pb_1.Message.getFieldWithDefault(this, 6, "");
    }
    set nickname(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new PlayerPreEnterMpNotify({});
        if (data.state != null) {
            message.state = data.state;
        }
        if (data.uid != null) {
            message.uid = data.uid;
        }
        if (data.nickname != null) {
            message.nickname = data.nickname;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.state != null) {
            data.state = this.state;
        }
        if (this.uid != null) {
            data.uid = this.uid;
        }
        if (this.nickname != null) {
            data.nickname = this.nickname;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.state != PlayerPreEnterMpNotify.State.STATE_INVALID)
            writer.writeEnum(2, this.state);
        if (this.uid != 0)
            writer.writeUint32(14, this.uid);
        if (this.nickname.length)
            writer.writeString(6, this.nickname);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerPreEnterMpNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.state = reader.readEnum();
                    break;
                case 14:
                    message.uid = reader.readUint32();
                    break;
                case 6:
                    message.nickname = reader.readString();
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
        return PlayerPreEnterMpNotify.deserialize(bytes);
    }
}
exports.PlayerPreEnterMpNotify = PlayerPreEnterMpNotify;
_PlayerPreEnterMpNotify_one_of_decls = new WeakMap();
(function (PlayerPreEnterMpNotify) {
    let State;
    (function (State) {
        State[State["STATE_INVALID"] = 0] = "STATE_INVALID";
        State[State["STATE_START"] = 1] = "STATE_START";
        State[State["STATE_TIMEOUT"] = 2] = "STATE_TIMEOUT";
    })(State = PlayerPreEnterMpNotify.State || (PlayerPreEnterMpNotify.State = {}));
})(PlayerPreEnterMpNotify = exports.PlayerPreEnterMpNotify || (exports.PlayerPreEnterMpNotify = {}));