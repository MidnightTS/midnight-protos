"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DraftGuestReplyTwiceConfirmReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftGuestReplyTwiceConfirmReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DraftGuestReplyTwiceConfirmReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class DraftGuestReplyTwiceConfirmReq extends pb_1.Message {
    constructor(data) {
        super();
        _DraftGuestReplyTwiceConfirmReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _DraftGuestReplyTwiceConfirmReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_agree" in data && data.is_agree != undefined) {
                this.is_agree = data.is_agree;
            }
            if ("draft_id" in data && data.draft_id != undefined) {
                this.draft_id = data.draft_id;
            }
        }
    }
    get is_agree() {
        return pb_1.Message.getFieldWithDefault(this, 15, false);
    }
    set is_agree(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get draft_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set draft_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new DraftGuestReplyTwiceConfirmReq({});
        if (data.is_agree != null) {
            message.is_agree = data.is_agree;
        }
        if (data.draft_id != null) {
            message.draft_id = data.draft_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.is_agree != null) {
            data.is_agree = this.is_agree;
        }
        if (this.draft_id != null) {
            data.draft_id = this.draft_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_agree != false)
            writer.writeBool(15, this.is_agree);
        if (this.draft_id != 0)
            writer.writeUint32(14, this.draft_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DraftGuestReplyTwiceConfirmReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.is_agree = reader.readBool();
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
        return DraftGuestReplyTwiceConfirmReq.deserialize(bytes);
    }
}
exports.DraftGuestReplyTwiceConfirmReq = DraftGuestReplyTwiceConfirmReq;
_DraftGuestReplyTwiceConfirmReq_one_of_decls = new WeakMap();
