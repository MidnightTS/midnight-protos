"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GadgetTalkChangeNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetTalkChangeNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GadgetTalkChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class GadgetTalkChangeNotify extends pb_1.Message {
    constructor(data) {
        super();
        _GadgetTalkChangeNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GadgetTalkChangeNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("gadget_entity_id" in data && data.gadget_entity_id != undefined) {
                this.gadget_entity_id = data.gadget_entity_id;
            }
            if ("cur_gadget_talk_state" in data && data.cur_gadget_talk_state != undefined) {
                this.cur_gadget_talk_state = data.cur_gadget_talk_state;
            }
        }
    }
    get gadget_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set gadget_entity_id(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get cur_gadget_talk_state() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set cur_gadget_talk_state(value) {
        pb_1.Message.setField(this, 15, value);
    }
    static fromObject(data) {
        const message = new GadgetTalkChangeNotify({});
        if (data.gadget_entity_id != null) {
            message.gadget_entity_id = data.gadget_entity_id;
        }
        if (data.cur_gadget_talk_state != null) {
            message.cur_gadget_talk_state = data.cur_gadget_talk_state;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.gadget_entity_id != null) {
            data.gadget_entity_id = this.gadget_entity_id;
        }
        if (this.cur_gadget_talk_state != null) {
            data.cur_gadget_talk_state = this.cur_gadget_talk_state;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.gadget_entity_id != 0)
            writer.writeUint32(5, this.gadget_entity_id);
        if (this.cur_gadget_talk_state != 0)
            writer.writeUint32(15, this.cur_gadget_talk_state);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GadgetTalkChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.gadget_entity_id = reader.readUint32();
                    break;
                case 15:
                    message.cur_gadget_talk_state = reader.readUint32();
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
        return GadgetTalkChangeNotify.deserialize(bytes);
    }
}
exports.GadgetTalkChangeNotify = GadgetTalkChangeNotify;
_GadgetTalkChangeNotify_one_of_decls = new WeakMap();