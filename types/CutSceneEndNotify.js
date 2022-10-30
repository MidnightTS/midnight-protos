"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CutSceneEndNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CutSceneEndNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CutSceneEndNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class CutSceneEndNotify extends pb_1.Message {
    constructor(data) {
        super();
        _CutSceneEndNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _CutSceneEndNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("cutscene_id" in data && data.cutscene_id != undefined) {
                this.cutscene_id = data.cutscene_id;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get cutscene_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set cutscene_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new CutSceneEndNotify({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.cutscene_id != null) {
            message.cutscene_id = data.cutscene_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.cutscene_id != null) {
            data.cutscene_id = this.cutscene_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(5, this.retcode);
        if (this.cutscene_id != 0)
            writer.writeUint32(14, this.cutscene_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CutSceneEndNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.retcode = reader.readInt32();
                    break;
                case 14:
                    message.cutscene_id = reader.readUint32();
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
        return CutSceneEndNotify.deserialize(bytes);
    }
}
exports.CutSceneEndNotify = CutSceneEndNotify;
_CutSceneEndNotify_one_of_decls = new WeakMap();