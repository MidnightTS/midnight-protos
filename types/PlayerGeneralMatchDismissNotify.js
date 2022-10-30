"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PlayerGeneralMatchDismissNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerGeneralMatchDismissNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerGeneralMatchDismissNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./MatchReason");
const pb_1 = require("google-protobuf");
class PlayerGeneralMatchDismissNotify extends pb_1.Message {
    constructor(data) {
        super();
        _PlayerGeneralMatchDismissNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(this, _PlayerGeneralMatchDismissNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("uid_list" in data && data.uid_list != undefined) {
                this.uid_list = data.uid_list;
            }
            if ("reason" in data && data.reason != undefined) {
                this.reason = data.reason;
            }
            if ("match_id" in data && data.match_id != undefined) {
                this.match_id = data.match_id;
            }
        }
    }
    get uid_list() {
        return pb_1.Message.getFieldWithDefault(this, 3, []);
    }
    set uid_list(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get reason() {
        return pb_1.Message.getFieldWithDefault(this, 13, dependency_1.MatchReason.MATCH_REASON_NONE);
    }
    set reason(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get match_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set match_id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new PlayerGeneralMatchDismissNotify({});
        if (data.uid_list != null) {
            message.uid_list = data.uid_list;
        }
        if (data.reason != null) {
            message.reason = data.reason;
        }
        if (data.match_id != null) {
            message.match_id = data.match_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.uid_list != null) {
            data.uid_list = this.uid_list;
        }
        if (this.reason != null) {
            data.reason = this.reason;
        }
        if (this.match_id != null) {
            data.match_id = this.match_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.uid_list.length)
            writer.writePackedUint32(3, this.uid_list);
        if (this.reason != dependency_1.MatchReason.MATCH_REASON_NONE)
            writer.writeEnum(13, this.reason);
        if (this.match_id != 0)
            writer.writeUint32(1, this.match_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerGeneralMatchDismissNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    message.uid_list = reader.readPackedUint32();
                    break;
                case 13:
                    message.reason = reader.readEnum();
                    break;
                case 1:
                    message.match_id = reader.readUint32();
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
        return PlayerGeneralMatchDismissNotify.deserialize(bytes);
    }
}
exports.PlayerGeneralMatchDismissNotify = PlayerGeneralMatchDismissNotify;
_PlayerGeneralMatchDismissNotify_one_of_decls = new WeakMap();
