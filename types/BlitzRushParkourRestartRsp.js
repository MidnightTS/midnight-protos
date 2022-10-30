"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BlitzRushParkourRestartRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlitzRushParkourRestartRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: BlitzRushParkourRestartRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class BlitzRushParkourRestartRsp extends pb_1.Message {
    constructor(data) {
        super();
        _BlitzRushParkourRestartRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _BlitzRushParkourRestartRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("group_id" in data && data.group_id != undefined) {
                this.group_id = data.group_id;
            }
            if ("schedule_id" in data && data.schedule_id != undefined) {
                this.schedule_id = data.schedule_id;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get group_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set group_id(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get schedule_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set schedule_id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new BlitzRushParkourRestartRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.group_id != null) {
            message.group_id = data.group_id;
        }
        if (data.schedule_id != null) {
            message.schedule_id = data.schedule_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.group_id != null) {
            data.group_id = this.group_id;
        }
        if (this.schedule_id != null) {
            data.schedule_id = this.schedule_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(14, this.retcode);
        if (this.group_id != 0)
            writer.writeUint32(15, this.group_id);
        if (this.schedule_id != 0)
            writer.writeUint32(1, this.schedule_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BlitzRushParkourRestartRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    message.retcode = reader.readInt32();
                    break;
                case 15:
                    message.group_id = reader.readUint32();
                    break;
                case 1:
                    message.schedule_id = reader.readUint32();
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
        return BlitzRushParkourRestartRsp.deserialize(bytes);
    }
}
exports.BlitzRushParkourRestartRsp = BlitzRushParkourRestartRsp;
_BlitzRushParkourRestartRsp_one_of_decls = new WeakMap();
