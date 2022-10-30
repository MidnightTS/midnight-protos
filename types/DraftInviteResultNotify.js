"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DraftInviteResultNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftInviteResultNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DraftInviteResultNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class DraftInviteResultNotify extends pb_1.Message {
    constructor(data) {
        super();
        _DraftInviteResultNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _DraftInviteResultNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_all_argee" in data && data.is_all_argee != undefined) {
                this.is_all_argee = data.is_all_argee;
            }
            if ("draft_id" in data && data.draft_id != undefined) {
                this.draft_id = data.draft_id;
            }
        }
    }
    get is_all_argee() {
        return pb_1.Message.getFieldWithDefault(this, 9, false);
    }
    set is_all_argee(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get draft_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set draft_id(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new DraftInviteResultNotify({});
        if (data.is_all_argee != null) {
            message.is_all_argee = data.is_all_argee;
        }
        if (data.draft_id != null) {
            message.draft_id = data.draft_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.is_all_argee != null) {
            data.is_all_argee = this.is_all_argee;
        }
        if (this.draft_id != null) {
            data.draft_id = this.draft_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_all_argee != false)
            writer.writeBool(9, this.is_all_argee);
        if (this.draft_id != 0)
            writer.writeUint32(13, this.draft_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DraftInviteResultNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.is_all_argee = reader.readBool();
                    break;
                case 13:
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
        return DraftInviteResultNotify.deserialize(bytes);
    }
}
exports.DraftInviteResultNotify = DraftInviteResultNotify;
_DraftInviteResultNotify_one_of_decls = new WeakMap();