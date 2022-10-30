"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ReunionPrivilegeInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReunionPrivilegeInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ReunionPrivilegeInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ReunionPrivilegeInfo extends pb_1.Message {
    constructor(data) {
        super();
        _ReunionPrivilegeInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ReunionPrivilegeInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("cur_day_count" in data && data.cur_day_count != undefined) {
                this.cur_day_count = data.cur_day_count;
            }
            if ("total_count" in data && data.total_count != undefined) {
                this.total_count = data.total_count;
            }
            if ("privilege_id" in data && data.privilege_id != undefined) {
                this.privilege_id = data.privilege_id;
            }
        }
    }
    get cur_day_count() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set cur_day_count(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get total_count() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set total_count(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get privilege_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set privilege_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data) {
        const message = new ReunionPrivilegeInfo({});
        if (data.cur_day_count != null) {
            message.cur_day_count = data.cur_day_count;
        }
        if (data.total_count != null) {
            message.total_count = data.total_count;
        }
        if (data.privilege_id != null) {
            message.privilege_id = data.privilege_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.cur_day_count != null) {
            data.cur_day_count = this.cur_day_count;
        }
        if (this.total_count != null) {
            data.total_count = this.total_count;
        }
        if (this.privilege_id != null) {
            data.privilege_id = this.privilege_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.cur_day_count != 0)
            writer.writeUint32(7, this.cur_day_count);
        if (this.total_count != 0)
            writer.writeUint32(10, this.total_count);
        if (this.privilege_id != 0)
            writer.writeUint32(4, this.privilege_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ReunionPrivilegeInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.cur_day_count = reader.readUint32();
                    break;
                case 10:
                    message.total_count = reader.readUint32();
                    break;
                case 4:
                    message.privilege_id = reader.readUint32();
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
        return ReunionPrivilegeInfo.deserialize(bytes);
    }
}
exports.ReunionPrivilegeInfo = ReunionPrivilegeInfo;
_ReunionPrivilegeInfo_one_of_decls = new WeakMap();