"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BlessingScanRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlessingScanRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: BlessingScanRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class BlessingScanRsp extends pb_1.Message {
    constructor(data) {
        super();
        _BlessingScanRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _BlessingScanRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("scan_pic_id" in data && data.scan_pic_id != undefined) {
                this.scan_pic_id = data.scan_pic_id;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("cur_day_scan_num" in data && data.cur_day_scan_num != undefined) {
                this.cur_day_scan_num = data.cur_day_scan_num;
            }
        }
    }
    get scan_pic_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set scan_pic_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get cur_day_scan_num() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set cur_day_scan_num(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new BlessingScanRsp({});
        if (data.scan_pic_id != null) {
            message.scan_pic_id = data.scan_pic_id;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.cur_day_scan_num != null) {
            message.cur_day_scan_num = data.cur_day_scan_num;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.scan_pic_id != null) {
            data.scan_pic_id = this.scan_pic_id;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.cur_day_scan_num != null) {
            data.cur_day_scan_num = this.cur_day_scan_num;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.scan_pic_id != 0)
            writer.writeUint32(4, this.scan_pic_id);
        if (this.retcode != 0)
            writer.writeInt32(11, this.retcode);
        if (this.cur_day_scan_num != 0)
            writer.writeUint32(1, this.cur_day_scan_num);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BlessingScanRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.scan_pic_id = reader.readUint32();
                    break;
                case 11:
                    message.retcode = reader.readInt32();
                    break;
                case 1:
                    message.cur_day_scan_num = reader.readUint32();
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
        return BlessingScanRsp.deserialize(bytes);
    }
}
exports.BlessingScanRsp = BlessingScanRsp;
_BlessingScanRsp_one_of_decls = new WeakMap();
