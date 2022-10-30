"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DraftOwnerTwiceConfirmNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftOwnerTwiceConfirmNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DraftOwnerTwiceConfirmNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class DraftOwnerTwiceConfirmNotify extends pb_1.Message {
    constructor(data) {
        super();
        _DraftOwnerTwiceConfirmNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _DraftOwnerTwiceConfirmNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("twice_confirm_deadline_time" in data && data.twice_confirm_deadline_time != undefined) {
                this.twice_confirm_deadline_time = data.twice_confirm_deadline_time;
            }
            if ("draft_id" in data && data.draft_id != undefined) {
                this.draft_id = data.draft_id;
            }
        }
    }
    get twice_confirm_deadline_time() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set twice_confirm_deadline_time(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get draft_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set draft_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new DraftOwnerTwiceConfirmNotify({});
        if (data.twice_confirm_deadline_time != null) {
            message.twice_confirm_deadline_time = data.twice_confirm_deadline_time;
        }
        if (data.draft_id != null) {
            message.draft_id = data.draft_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.twice_confirm_deadline_time != null) {
            data.twice_confirm_deadline_time = this.twice_confirm_deadline_time;
        }
        if (this.draft_id != null) {
            data.draft_id = this.draft_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.twice_confirm_deadline_time != 0)
            writer.writeUint32(15, this.twice_confirm_deadline_time);
        if (this.draft_id != 0)
            writer.writeUint32(14, this.draft_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DraftOwnerTwiceConfirmNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.twice_confirm_deadline_time = reader.readUint32();
                    break;
                case 14:
                    message.draft_id = reader.readUint32();
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
        return DraftOwnerTwiceConfirmNotify.deserialize(bytes);
    }
}
exports.DraftOwnerTwiceConfirmNotify = DraftOwnerTwiceConfirmNotify;
_DraftOwnerTwiceConfirmNotify_one_of_decls = new WeakMap();
