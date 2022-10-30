"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DungeonWayPointActivateRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonWayPointActivateRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DungeonWayPointActivateRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class DungeonWayPointActivateRsp extends pb_1.Message {
    constructor(data) {
        super();
        _DungeonWayPointActivateRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _DungeonWayPointActivateRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("way_point_id" in data && data.way_point_id != undefined) {
                this.way_point_id = data.way_point_id;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get way_point_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set way_point_id(value) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data) {
        const message = new DungeonWayPointActivateRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.way_point_id != null) {
            message.way_point_id = data.way_point_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.way_point_id != null) {
            data.way_point_id = this.way_point_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(6, this.retcode);
        if (this.way_point_id != 0)
            writer.writeUint32(7, this.way_point_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DungeonWayPointActivateRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.retcode = reader.readInt32();
                    break;
                case 7:
                    message.way_point_id = reader.readUint32();
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
        return DungeonWayPointActivateRsp.deserialize(bytes);
    }
}
exports.DungeonWayPointActivateRsp = DungeonWayPointActivateRsp;
_DungeonWayPointActivateRsp_one_of_decls = new WeakMap();